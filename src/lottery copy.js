import React from 'react';
import { useState } from 'react';
const Lottery = () => {
 
  const [pool,setPool]=useState([])

  const randomNumber = (min, max) =>{
    const range = max - min + 1;
    const rand = Math.random() ;
    const num = Math.floor(rand * range + min);
    return num;
  }
  const generator = (n)=>{
    const arr = [];
    while(arr.length<n){
      const num = randomNumber(1,45)
      if (arr.indexOf(num)===-1){
        arr.push(num)
      }
    }
    return arr;
  }
  
  return (
    <div>
      <button onClick={()=>setPool(generator(6))}>一键开奖</button>
      <button onClick={()=>setPool([])}>清空奖池</button>
     
      <div className="lottery">
        <ul>
          {pool.map((num,i)=>(<li key={i}><div>{num}</div></li>))}
        </ul>
      </div>
    </div>
  );
};

export default Lottery;