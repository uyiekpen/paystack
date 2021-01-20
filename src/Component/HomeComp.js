import React,{useState} from 'react';
import {useHistory} from "react-router-dom"
import { usePaystackPayment } from 'react-paystack';

const config = {
   
};

// you can call this function anything

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
}

export const HomeComp = () => {
  const history = useHistory()

  // const hist
  const [amount,Setamount]=useState(0)
  const [email,setEmail]=useState("")


  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    history.push("/about")
    console.log(reference);
  };
  

    const initializePayment = usePaystackPayment({
      reference: (new Date()).getTime(),
      email:email,
      amount: amount,
      publicKey: 'pk_live_1b38eded7c4210daa7cf2270cebee0bf90de0252',
      //pk_live_1b38eded7c4210daa7cf2270cebee0bf90de0252
      //pk_test_f747091150685438ae86d5a98b5df3c60275f367
    });
    return (
      <div style={
        {
          
          display:"flex",
          flexDirection:"column",
        justifyContent:"center",
        height:"100vh",
        alignItems:"center"
        }
      }>
        <div>
<div>you are going to pay N{amount/100}</div>
          <input 
          placeholder="amount"
          value={amount}
          onChange={(e)=>{
            Setamount(e.target.value)
          }}
          />
        <div>
         <p>Enter your Email</p>
        <input 
          placeholder="email"
          
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          />
        </div>
        </div>
          <button onClick={() => {
              initializePayment(onSuccess, onClose)
          }}>Pay Now</button>
      </div>
    );
};

//pk_test_f747091150685438ae86d5a98b5df3c60275f367