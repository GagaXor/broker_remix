import { Card, Button, TextInput, Checkbox, Select, Modal } from "flowbite-react";
import {FaCertificate, FaDollarSign} from "react-icons/fa"
import { Link } from "@remix-run/react";
import { LoaderFunction, json } from "@remix-run/node";
import { useEffect, useState } from "react";
import { MiniChart } from "react-ts-tradingview-widget";


export const loader: LoaderFunction = async ({request}) => {
    return null
  }
  

export default function InvestmentOrder(){
    const options = [
        {value: '', text: '--Choose an option--'},
        {value: 'STARTER', text: 'STARTER'},
        {value: 'PREMIUM', text: 'PREMIUM'},
        {value: 'GOLD', text: 'GOLD'}
      ];
    const [plan, setPlan] = useState(options[0].value);
    const [amount, setAmount] = useState(0);
    const [modalOpen, setModalOpen] = useState(false)
   
    
    function onSelectHandler(event: any) {
        setPlan(event.target.value);
        }

    function onChnageHandler(event: any) {
        const {value} = event.target;
        setAmount(value)
    }

    useEffect(()=> {
        console.log(plan)
    }, [plan])

    return <div className="text-white grid grid-cols-1">
                <h1 className="text-5xl mb-5 justify-self-center">Ready to Invest?</h1>
                <div className="sm:grid grid-cols-2 md:flex ... gap-6">
                    <div className="sm:w-fit md:w-1/3 mb-3">
                        <Card >
                            <div >
                            <MiniChart  autosize symbol="BTCUSD"></MiniChart>
                            </div>
                            
                        </Card>
                    </div>
                    <div className="sm:w-fit md:w-2/3 ...">
                        <Select value={plan} name="plan" onChange={onSelectHandler}>
                        {options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                        </Select>
                        <Card className="mb-3" >
                            <div className="grid grid-cols-6">
                                <FaCertificate className="text-5xl"/>
                                <div className="col-span-5">
                                    
                                    <p className="text-xs">Invest for 14 days and get daily profit of 120%</p>
                                </div>
                            </div>
                            
                        </Card>

                        <p className="text-sm">Enter Your Amount</p>
                        <TextInput type="number" value={amount} onChange={onChnageHandler} className="mb-2"></TextInput>
                        <p className="text-xs mb-2">Note: Minimum invest 1000 USD and up to 4999 USD</p>

                        
                        <p className="italic text-sm">Payment Method</p>
                        <Card className="mb-2">
                            <div className="grid grid-cols-6">
                                <div className="text-5xl">
                                    <FaDollarSign/>
                                </div>
                                <div className="col-span-5">
                                    <p>Account Balance</p>
                                    <p className="text-xs">Current balance: $ 0.00</p>
                                </div>
                                
                            </div>
                            
                        </Card> 
                        <div className="flex ...">
                            <Checkbox className="mr-3"/><p>I agree to the <Link to="/terms" className="text-blue-500">terms and conditions</Link></p>
                        </div>
                        <div className="justify-self-center">
                            <Button>Confirm Investment</Button>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
}