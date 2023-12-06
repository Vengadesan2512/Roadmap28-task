

import { createContext, useContext, useState } from 'react'
import './App.css'
const shopCtx = createContext(null);
function App() {
 
const[productPrice,setProductPrice]=useState(1500000);
const[cardCount,setCardCount]=useState(0);
const[totalCost,setTotalCost]=useState(0);
  return (
<div className='App'>
<shopCtx.Provider
value={{
cardCount,
setCardCount,
productPrice,
setProductPrice,
totalCost,
setTotalCost,


}}
>
 <ProductCard/>
</shopCtx.Provider>
 

</div>
  )
}


function ProductCard(){
  const{productPrice,cardCount,setCardCount,setTotalCost,totalCost}=useContext(shopCtx)
return(
<div>

<div><div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://th.bing.com/th/id/OIP.d80DSqN4gem9P_Yt51hFyQHaF7?w=214&h=180&c=7&r=0&o=5&pid=1.7" alt="Movie"/></figure>
  <div className="card-body">
    <h1 className="card-title"><p className='p'>I Phone 14</p></h1>
    <p className='p2'>About :The iPhone 15 is the first major redesign since the iPhone 12, featuring rounder edges and slightly curved display and back glass. Both models are available in five colors: blue, pink, yellow, green and black. This makes it the first lower-cost iPhone since the iPhone XR to not ship with a Product Red variant at launch</p>
      <h1 className='h2'>Price : 150000</h1>
       <div className='btns'>
<button className="btn btn-active btn-primary" onClick={()=>setCardCount(cardCount+1)}>Add</button>
<button className=" btn-outline btn-info">{cardCount}</button>
<button className="btn btn-warning"  onClick={()=>setCardCount(cardCount-1)}>Remove</button>
      </div>
    <div className="card-actions justify-end">
  
      <button className="btn btn-primary" onClick={()=>setTotalCost(productPrice*cardCount)}>Check</button>
   
    </div>
    <div>
      <p className='h2'>Free Shipping</p>
      <button className=" btn-outline btn-info">Total Amount : {totalCost}</button></div>
  </div>
</div></div>

</div>


)


}

export default App
