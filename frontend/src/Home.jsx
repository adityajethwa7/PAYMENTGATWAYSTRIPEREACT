import React, { useState } from 'react'

const Home = () => {

  const itemName= "Consultation Fees";
  const itemPrice=500;
  const[quantity,setquantity] = useState(1);
  const[finalAmount,setfinalamount]= useState(itemPrice)

  const decrement= () => {
    if(quantity<=1){
      setquantity(1)
      setfinalamount(itemPrice)
    }
    else if (quantity>1){
      setquantity(quantity-1)
      setfinalamount(finalAmount-itemPrice);
    }
  }

  const increment = () =>{
    setquantity(quantity+1)
    setfinalamount(finalAmount+itemPrice);
  }

  const checkout =async()=>{
    try {
      const res=await fetch("http://localhost:8000/checkout", {
        method:"POST",
        headers:{
          "Content-Type":"application/json",

        },
        mode:"cors",
        body: JSON.stringify({items:[
          {
            id:1,
            quantity: quantity,
            price: itemPrice,
            name: itemName,
          },
        ]
        })
      });
      const data= await res.json();
      window.location= data.url;
    }catch (error){
      console.log(error);
        }
  }

  return (
    <div>
      <button 
        onClick={checkout}
        style={{backgroundColor: 'blue', color: 'white'}}
      >
        pay now
      </button>
    </div>
  )
}

export default Home