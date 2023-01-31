import "./App.css";
import React, { useState } from 'react';
import getContractsForSymbol from "./api/contract-for-symbol"
import getActiveSymbols from "./api/get-active-symbols"
import {checkSignal, endCall} from "./api/keep-alive"
import {getProposal, unsubscribeProposal} from "./api/proposal"
import {subscribeTicks, unsubscribeTicks, getTicksHistory} from "./api/tickstream"

function App() {
  const [quote, setQuote] = useState();

  function subscribe(){
    subscribeTicks()
    .then(()=>setQuote(subscribeTicks))
  }

  return (
    <div>
      <header>
        <button className="submitBtn" onClick={subscribe}>Subscribe Tickstream</button>
        {/* <button className="submitBtn" onClick={()=>setQuote(subscribeTicks)}>Subscribe Tickstream</button> */}
        <button className="resetBtn" onClick={unsubscribeTicks}>Unsubscribe Tickstream</button>
        <button onClick={getTicksHistory}>Get Ticks History</button>
        <br />
        <button onClick={getActiveSymbols}>Get Active Symbols</button>
        <button onClick={getContractsForSymbol}>Get contracts for symbol</button>
        <br />
        <button className="submitBtn" onClick={getProposal}>Subscribe proposal</button>
        <button className="resetBtn" onClick={unsubscribeProposal}>Unsubscribe proposal</button>
        <br />
        <button className="submitBtn" onClick={checkSignal}>Keep Alive</button>
        <button className="resetBtn" onClick={endCall}>End Call</button>
      </header>
      {/* TODO: resolve this [object Promise]
      currently able to console log the quote but not render on DOM */}
      <p>{quote?quote.toString():'0'}</p>
    </div>
  );
}

export default App;
