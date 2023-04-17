import React from 'react';
import {useParams} from "react-router-dom";
import stocks from "../Data";

export default function Details(props) {
  const {symbol} =useParams()
  return (
    <div>
      {stocks.filter((stock) => stock.symbol === symbol).map ((stock, index) =>(
       //filter is a method to pull out only the required details of a single name from the array 
        <div key ={index} className ="stock">
          <h3>Stock Details</h3>
          <p>Name: {stock.name}</p>
          <p>Symbol: {stock.symbol}</p>
          <p>Last Price: {stock.lastPrice}</p>
          <p>Change: {stock.change}</p>
          <p>High: {stock.high}</p>
          <p>Low: {stock.low}</p>
          <p>Open: {stock.open}</p>
          </div>
      ))}
    </div>
  )
}
