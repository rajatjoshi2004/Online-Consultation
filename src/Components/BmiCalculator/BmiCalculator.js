import React, { useState } from 'react'

const BmiCalculator = () => {
    const[inp1 , setInp1] = useState("")
    const[inp2 , setInp2] = useState("")
    const[bmi , setBmi] = useState(false)


    let reloadHandler = ()=>{
        setInp1("")
        setInp2("")
        setBmi("")
    }

    const submitHandler = ()=>{
             let a = inp1/(inp2*inp2)
               setBmi(a)

    }

  return (
    <>
       <div>BmiCalculator</div>
   
        <input type="number" placeholder='write your weight in KG' value={inp1} onChange={(e)=>setInp1(e.target.value)}/>
        <br /><br />
        <input type="number" placeholder='write your height in meter' value={inp2} onChange={(e)=>setInp2(e.target.value)}/>
        <br /><br />
        <button onClick={submitHandler}>submit</button> <br /><br />
        <button onClick={reloadHandler}>Reload</button>
        {bmi ?  <h2>your bmi is {bmi}</h2>: null}
        {
           bmi<18.5 ? <h2>you are underweight</h2>: bmi<24.5 ? <h2>you are normal</h2> : <h2>you are overweight</h2>
        }
       
   
    </>
   
  )
}

export default BmiCalculator