import { useEffect, useState } from "react";
import React from 'react';
import data from "./Data/data";

export default function Question() {

    const [checked , setChecked] =  useState(undefined);

    const question = data[0];
    useEffect(()=>{
     // console.log(question);
    })

    function onSelect(){
    
      //console.log('radio button change');
    }
  
    return (
    <div className='questions'>
        <h2 className='text-light'>
            {question.question}
        </h2>

        <ul key={question.id}>
           {
            question.options.map((q , i) =>(
            <li key={i}>
                <input 
                type='radio' 
                value={false} 
                name='options' 
                id = {`q${i}-option`}
                onChange={onSelect()}    
                />
                <label className="text-primary" htmlFor={`q${i}-option`}>{q}</label>
                <div className="check  "></div>


            </li>
            ) )
           }
        </ul>
    </div>
  )
}
