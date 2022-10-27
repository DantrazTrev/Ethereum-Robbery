
import './App.css';
import React, { useEffect } from 'react'
import Web3 from 'web3'
function App() {
  //No tracking this time
  // useEffect(() => {
  //   let cookie = false
  //   if (navigator.cookieEnabled)
  //     cookie = true
  //   let tracker = { width: window.outerWidth, height: window.outerHeight, cookie }

  //   fetch("/track", {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json, text/plain, */*',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(tracker)
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log({ ...data, ...tracker }));

  // }, []);

  const loadblck = async () => {
    const web3Provider = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3Provider.eth.getAccounts()
    console.log(accounts)

  }

  return (
    <div className="App">
      This is an E-Robbery
      <span style={{ height: '13px' }}></span>
      <button>Give me all your money</button>

    </div>
  );
}

export default App;
