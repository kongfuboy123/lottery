import React from 'react';
import { useState } from 'react';
const Lottery = () => {
 
  const [pool,setPool]=useState({'red':[],'blue':'發'})

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
    const blue = randomNumber(1,16)
    return {red:arr,blue};
  }
  
  return (
    <div>
      <button onClick={()=>setPool(generator(6))}>一键开奖</button>
      <button onClick={()=>setPool({'red':[],'blue':'發'})}>清空奖池</button>
     
      <div className="lottery">
        <ul>
          {pool.red.map((num,i)=>(<li key={i}><div className="red">{num}</div></li>))}
          <li><div className="blue" >{pool.blue}</div></li>
        </ul>
      </div>
    </div>
  );
};

export default Lottery;