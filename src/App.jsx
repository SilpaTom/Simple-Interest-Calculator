import React from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { useState } from 'react'


function App() {

//  state to hold data , creating seperate state for each data
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [interest, setInterest] = useState(0)

  //for conditional rendering

  const [isPrinciple,setIsPrinciple]=useState(true)
  const [isRate,setIsRate]=useState(true)
  const [isYear,setIsYear]=useState(true)

   const validate=(e)=>{
    // console.log(e.target.value)
    // console.log(e.target.name)
    let name=e.target.name 
    let value=e.target.value
    // console.log(!!value.match(/^[0-9]*$/))


      //checking the input is valid

    if(!!value.match(/^[0-9]*$/))
      {
      if(!!value.match(/^[0-9]*$/))

        if(name=="principle"){
          setPrinciple(value)
          setIsPrinciple(true)
        }
        else if(name=="rate"){
          setRate(value)
          setIsRate(true)
        }
        else{
          setYear(value)
          setIsYear(true)
        }
      }
      else{
        

          if(name=="principle"){
            setPrinciple(value)
            setIsPrinciple(false)
          }
          else if(name=="rate"){
            setRate(value)
            setIsRate(false)
          }
          else{
            setYear(value)
            setIsYear(false)
          }

      }
       
    }

    console.log("principle", principle)
  console.log("rate", rate)
  console.log(" year",year)

  //reset
      const handleReset=()=>{
        setPrinciple(0)
        setRate(0)       
        setYear(0)
        setIsPrinciple(true)
        setIsRate(true)
        setIsYear(true)
        setInterest(0)
      }
    
      const calculate=()=>{
        setInterest((principle*rate*year)/100)
      } 
   

  
  return (
    <div className='d-flex justify-content-center align-items-center' style={{width:"100%", height:"100vh"}}>

      <div className='bg-light p-5 rounded' style={{width:"500px"}}>
      <h1> Simple Interest App</h1>
      <p>Calculate your simple interest Easily</p>
    

      <div className='mt-5 shadow bg-warning rounded p-4' >
          <h2 className='text-center fs-1 fw-bolder'> ₹ {interest}</h2>
          <p className='text-center'> Total  simple interest </p>
      </div>

      <form className='mt-5'>
          {/* value={principle || ""} is used to remove the 0(here initialized with 0) 
          from the input box in the browzer. also to implemnt reset*/}
          <div className='mb-3'>
            <TextField className='w-100' value={principle || ""}  name='principle' onChange={(e)=>validate(e)} label="Principle Amount" variant="outlined" />
           
           {/* using truthy operator for conditional rendering
           invalid input should display if the isprinciple is false */}
           {!isPrinciple && <p className='text-danger'> *Invalid Input</p>}

            </div>

          <div className='mb-3'>
            <TextField className='w-100' value={rate || ""}    name='rate' onChange={(e)=>validate(e)} label="Rate of Interest(p.a) %" variant="outlined" />
           
           { !isRate && <p className='text-danger'> *Invalid Input</p>}
            </div>

          <div className='mb-3'>
            <TextField className='w-100' value={year || ""} name='year' onChange={(e)=>validate(e)} label="Year(Yr)" variant="outlined" />
            { !isYear &&  <p className='text-danger'> *Invalid Input</p>}
            </div>

        </form>
        <div className='d-flex justify-content-between w-100 mt-4'>
           <Button variant="contained" color="success" style={{ width: '175px', height: '60px' }} onClick={calculate} 
           
           disabled={isPrinciple && isRate && isYear ?false:true}>CACULATE</Button> 
          
          <Button variant="outlined" style={{ width: '175px', height: '60px' }} onClick={handleReset}  >RESET</Button>
        </div>




        </div>
    </div>
  )
}

export default App