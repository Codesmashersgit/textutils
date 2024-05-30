

import { useState } from 'react';
function Poster(){
  const[num,setnum]=useState(0);

    function inc(){
        setnum(num + 1);
    }
    function dec(){
        setnum(num - 1);
    }
    return(
        <>
        <h2>{num}</h2>
       <div className="swag">
       <button onClick={inc}>Increment</button>
       <button onClick={dec}>Decrement</button>
       </div>
       </>

            
    )
}

export default Poster;