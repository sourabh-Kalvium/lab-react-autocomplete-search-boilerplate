import React from 'react'
import { useState } from 'react'
import Suggestion from './Suggestion'
import data from "../resources/countryData.json"

function SearchBox() {

   let [inputval,setInputval]=useState("")
   let [hide,setHide] = useState(false) 

   let handleInput=(e)=>{
       setInputval(e.target.value)
   }
   
   let handleDropDown=(e)=>{
      if(e.key=="Escape"){
         console.log("escape")
         setHide(!hide)
         if(hide){
          document.getElementById("drop-down").style.display="none"
         }
         else{
            document.getElementById("drop-down").style.display="block" 
         }
      }

   }


   console.log(inputval)
  return (
     <>
       <input type="text" placeholder='search here' onChange={handleInput} onKeyDown={handleDropDown} />
       <button>Search</button>
       <p style={{fontSize:"10px",color:"grey"}}>use "Escape" key for activate/de-activate the Suggestion</p>
       <div id="drop-down">
          {
            inputval && (()=>{
                let filtered=data.filter((ele)=>{
        
                   return ele.name.toLocaleLowerCase().includes(inputval.toLocaleLowerCase())
              })
              return filtered.map((ele)=>{
                return <Suggestion content={ele.name} key={Math.random()* new Date()}/>
             })
        
            })()
                
            }
       </div>
       
     </>
  )
}

export default SearchBox