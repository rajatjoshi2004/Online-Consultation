import React, { useState } from 'react'
import Card from '../Components/Card/Card'
import img1 from '../Images/Usage-Tokens-of-Subscription-Business-Models.png'
import img2 from '../Images/how-to-create-a-successful-subscription-based-app-monetization-model.webp'
import { Link } from 'react-router-dom';
const SubscriptionPage = () => {

    const [ data , setData] = useState([
        {
           img : img1,
           title: "Free",
           btn: "Checkout",
           textSub:"text-success",
           btnBack:"bg-success"
           
    },
        {
           img : img2,
           title: "Premium",
           btn: "Subscribe Plan",
           textSub:"text-warning",
           btnBack:"bg-warning "
    }
])

  return (
    
    <>
           <div className="overflow-hidden aboutsection " style={{background:"lightblue"}}>
             <div className="container py-5 ">
                 <div className="row  m-0 p-0 " >
                     <div className="col-md-6">
                     <Link to="/Consultant">
                     <Card data = {data[0]}/>
                     </Link>
                     
                        {/* <img src={img1} width="60%"/> */}
                     </div>
                     <div className="col-md-6">
                     <Card data = {data[1]}/>
                     </div>
                 </div>
             </div>
             </div>
    </>
  )
}

export default SubscriptionPage