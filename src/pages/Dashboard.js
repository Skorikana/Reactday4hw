import React from 'react'
import {Link} from "react-router-dom";
import stocks from "../Data";
export default function Dashboard() {
  return (
    <div className= "home">
    <div className ="stocks">
      {stocks.map((stocks) =>{
        const {name, symbol ,lastPrice,change} = stocks;
        return(
            <div >
            <div className = "companyname"><h3>Company Name:</h3>
            <Link to ={`/stocks/${symbol}`}>
              <div><h2>{name} {symbol}</h2></div>
              </Link>
              </div>
              <div className="lastPrice">
                <h3>Price</h3>:{lastPrice}</div>
              <div className ="change">
              <h3>Change</h3> {change}</div>
              </div>
              )
        })
    }
    </div>
</div>
)
} 