import { TextInput, Select, Button, Card, Modal } from "flowbite-react"
import {useState} from "react"
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData, useSubmit} from "@remix-run/react";
import { requireUserId } from "~/session.server";
import { createDeposit } from "~/models/deposit.server";
import { getAppDetails } from "~/models/app.server";

type ActionData = {
  errors?: {
    amount?: string;
    paymentMethod?: string;
  };
};


export const loader: LoaderFunction = async ({request}) => {
  const appDetails = await getAppDetails();
  const btcWallet = appDetails[0]
  return json(btcWallet)
}

export const action: ActionFunction = async ({ request }) => {

  console.log("Action received")
  const userId = await requireUserId(request);

  const formData = await request.formData();
  let amount = formData.get("amount");
  const paymentMethod = formData.get("paymentMethod");

  if (typeof amount !== "string" || amount.length === 0) {
    return json<ActionData>(
      { errors: { amount: "Invalid Amount" } },
      { status: 400 }
    );
  }

  if (typeof paymentMethod !== "string" || paymentMethod.length === 0) {
    return json<ActionData>(
      { errors: { paymentMethod: "Payment Method is required" } },
      { status: 400 }
    );
  }

  console.log("About to create deposit")

  await createDeposit(parseInt(amount), paymentMethod, userId)

  return redirect('/dashboard/deposit/history');
  //return redirect(`/deposit/${deposit.id}`);
};


export default function Deposit(){

    const options = [
      {value: '', text: '--Choose an option--'},
      {value: 'btc', text: 'Bitcoin'},
      {value: 'eth', text: 'Ethereum'},
      {value: 'usdt', text: 'USD Tether'},
      {value: 'btCash', text: 'Bitcoin Cash'}
    ];

    const submit = useSubmit();
    const wallet = useLoaderData();
    const [amount, setAmount] = useState("")
    const [paymentMethod, setPaymentMethod] = useState(options[0].value);
    const [modalIsOpen, setModalIsOpen] = useState(false)

    
    function onSelectHandler(event: any) {
      console.log(event.target.value);
      setPaymentMethod(event.target.value);
      }

    function onChangeHandler(event: any) {
      const {value} = event.target
      setAmount(value)
      console.log(amount)
    }

    function onSubmitHandler(event: any) {
      setModalIsOpen(false)
      submit({amount, paymentMethod}, {method: "post", action: "/dashboard/deposit"})

    }
 
    return (
      <div className="dark:text-white text-center grid grid-cols-1">
        <div className="grid grid-cols-1">
          <h1 className="text-4xl mb-2 ">Deposit Funds</h1>
        </div>

        <Card className="grid grid-cols-1 justify-self-center md:w-1/2">

           
          <form >
            <div className="grid grid-cols-1  justify-self-center">
              <p>Amount to Deposit</p>
              <TextInput 
              type="number" 
              placeholder="0.00" 
              className="" 
              name="amount" 
              value={amount} 
              onChange={onChangeHandler} ></TextInput>
              <p className="mb-6">Minimum 1,000.00 USD</p>
            </div>

            <div className="grid grid-cols-1  justify-self-center">
              <p>Paymemt Method</p>
              <Select value={paymentMethod} onChange={onSelectHandler} name="paymentMethod" className="mb-2" >
                {options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </Select>    

              <Button 
              className="md:w-1/2 justify-self-center bg-blue-700 rounded h-30" 
              onClick={() => setModalIsOpen(true)}>Click to Continue</Button> 
            </div>

            <Modal className="justify-center" dismissible show={modalIsOpen} onClose={()=> setModalIsOpen(false)} popup={true} position="left-center">
            <Modal.Header>Deposit Order</Modal.Header>
            <Modal.Body>
              <div className="grid grid-cols-1 text-white">
                <div className="grid grid-cols-1">
                  <p className="mb-3">To deposit into your account, send this amount <span className="text-green-400 ">${amount}</span> to the walllet address below </p>
                  <p className="mb-3">Wallet Address: <code className="italic text-green-400  w-fit text-sm" >{wallet[paymentMethod]}</code></p>
                </div>
  
                <p>Click on the Confirm Button after sending the amount from your wallet. Your account will be credited after confirmation 
                    of your deposit
                </p>
              </div>

            <Button  onClick={onSubmitHandler}>Confirm Deposit</Button>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
            </Modal>
          </form>
        </Card>  
     
      </div>
    )
}