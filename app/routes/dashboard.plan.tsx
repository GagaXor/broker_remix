import { Button, Card, Modal, Checkbox, TextInput } from "flowbite-react"
import { useRef, useState } from "react"
import { HiCheck } from "react-icons/hi"
import { Link, useSubmit } from "@remix-run/react"
import { FaCertificate } from "react-icons/fa"

export default function PlansPage(){
    const submit = useSubmit()
    
    function handleSubmit(plan : string){
        submit({plan}, {method: "get", action: "/dashboard/plan/order"})
    }

    return <div className="text-white">
                <div className="grid grid-cols-1">
                <h1 className="justify-self-center text-4xl mb-7">Investment Plans</h1>
                <p className="grid grid-cols-1 justify-self-center mb-3">Choose your investment plan and start earning</p>                
                    <div className="md:grid grid-cols-3 gap-3 mb-4" >
                        <Card className="grid grid-cols-1 mb-4">
                            <div className="grid grid-cols-2">
                            <p className="justify-start text-3xl bold">STARTER</p>
                            
                            </div>
                            <p>Enjoy entry level of investment % and earn money</p>
                           
                            <div className="grid grid-cols-2">
                                <div className="grid grid-cols-1">
                                    <p>120%</p>
                                    <p>Total returns</p>
                                </div>

                                <div className="grid grid-cols-1">
                                    <p>14</p>
                                    <p>Term Days</p>
                                </div>
                               
                            </div>
                            <hr></hr>

                            <div className="grid grid-cols-1">
                                <div className="grid grid-cols-2">
                                    <p>Min Deposit-</p>
                                    <p>$ 1,000.00</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p>Max Deposit-</p>
                                    <p>$ 4,999.00</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p>Deposit Return</p>
                                    <p>Yes</p>
                                </div>
                                <div className="grid grid-cols-2 mb-3">
                                    <p>Daily Interest</p>
                                    <p>17.14%</p>
                                </div>
                                <Button >CHOOSE THIS PLAN</Button>
                            </div>
                        </Card>
                        <Card className="grid grid-cols-1  mb-4">
                            <div className="grid grid-cols-2">
                                <p className="justify-start text-3xl bold">PREMIUM</p>
                                
                            </div>
                            <p>Enjoy entry level of investment % and earn money</p>
                            <div className="grid grid-cols-2">
                                <div className="grid grid-cols-1">
                                    <p>130%</p>
                                    <p>Total returns</p>
                                </div>

                                <div className="grid grid-cols-1">
                                    <p>14</p>
                                    <p>Term Days</p>
                                </div>
                               
                            </div>
                            <hr></hr>

                            <div className="grid grid-cols-1">
                                <div className="grid grid-cols-2">
                                    <p>Min Deposit-</p>
                                    <p>$ 5,000.00</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p>Max Deposit-</p>
                                    <p>$ 9,999.00</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p>Deposit Return</p>
                                    <p>Yes</p>
                                </div>
                                <div className="grid grid-cols-2 mb-3">
                                    <p>Daily Interest</p>
                                    <p>18.57%</p>
                                </div>
                                <Button>CHOOSE THIS PLAN</Button>
                            </div>
                        </Card>
                        <Card className="grid grid-cols-1  mb-4">
                            <div className="grid grid-cols-2">
                                <p className="justify-start text-3xl bold">GOLD</p>
                               
                            </div>
                            <p>Enjoy entry level of investment % and earn money</p>
                            <div className="grid grid-cols-2">
                                <div className="grid grid-cols-1">
                                    <p>140%</p>
                                    <p>Total returns</p>
                                </div>

                                <div className="grid grid-cols-1">
                                    <p>14</p>
                                    <p>Term Days</p>
                                </div>
                               
                            </div>
                            <hr></hr>

                            <div className="grid grid-cols-1">
                                <div className="grid grid-cols-2">
                                    <p>Min Deposit-</p>
                                    <p>$ 10,000.00</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p>Max Deposit-</p>
                                    <p>NO MAXIMUM</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p>Deposit Return</p>
                                    <p>Yes</p>
                                </div>
                                <div className="grid grid-cols-2 mb-3">
                                    <p>Daily Interest</p>
                                    <p>20%</p>
                                </div>
                                <Button onClick={()=> handleSubmit("gold")} >CHOOSE THIS PLAN</Button>
                            </div>
                        </Card>
                        
                    </div>
                    
                </div>
            </div>
} 

function ModalPage() {
    return <Modal  className="grid grid-cols-1" size="7xl" >
                    <Modal.Header>
                        <p className="text-5xl m-2 justify-self-center">Ready to Invest?</p>
                    </Modal.Header>
                    <div className="text-white grid grid-cols-1 m-3">
                        
                        <div className="md:flex ... gap-6">
                            <div className="md:w-2/3 ...">
                                <Card className="m-3" >
                                    <div className="md:grid grid-cols-6">
                                        <FaCertificate className="text-5xl"/>
                                        <div className="col-span-5">
                                            <p className="text-xl">STARTER</p>
                                            <p className="text-xs">Invest for 14 days and get daily profit of 120%</p>
                                        </div>
                                    </div> 
                                </Card>
                                <p className="text-sm m-2">Enter Your Amount</p>
                                <TextInput  className="m-2"  ></TextInput>
                                <p className="text-xs m-2">Note: Minimum invest 1000 USD and up to 4999 USD</p>
                                <p className="italic text-sm m-2">Payment Method</p>
                                <Card className="m-2">
                                    <div className="grid grid-cols-6">
                                        <div></div>
                                        <div className="col-span-5">
                                            <p>Account Balance</p>
                                            <p className="text-xs">Current balance: $ 0.00</p>
                                        </div> 
                                    </div>
                                </Card> 
                                <div className="flex ... m-3">
                                    <Checkbox defaultChecked className="m-1"/><p>I agree to the <Link to="/terms" className="text-blue-500">terms and conditions</Link></p>
                                </div>
                                    
                            </div>
                            <div className="md:w-1/3 ...">
                                <Card>
                                    <p>Your Investment details</p>
                                    <div className="grid grid-cols-2">
                                        <div className="grid grid-rows-2 text-sm">
                                            <p >Name of scheme</p>
                                            <p>STARTER</p>
                                        </div>
                                        <div className="grid grid-rows-2 text-sm">
                                            <p >Term of the scheme</p>
                                            <p>14 Days</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="grid grid-rows-2 text-sm">
                                            <p>Daily profit %</p>
                                            <p>130%</p>
                                        </div>
                                        <div className="grid grid-rows-2 text-sm">
                                            <p>Term starts at</p>
                                            <p>Today 6/10/2023 6:41:41 PM</p>        
                                        </div>     
                                    </div>
                                    <hr></hr>
                                    <div className="grid grid-cols-2 text-sm">
                                        <p>Term end at</p>
                                        <p>6/24/2023 6:41:41 PM</p>
                                    </div>
                                    <hr></hr>
                                    <div className="grid grid-cols-2 text-sm">
                                        <p>Amount to invest</p>
                                        <p>$</p>
                                    </div>
                                    <hr></hr>
                                    <div className="grid grid-cols-2 text-sm">
                                        <p>Total Charge</p>
                                        <p>$ 0.00</p>
                                    </div>
                                    <Button>Confirm & proceed</Button>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Modal>
}