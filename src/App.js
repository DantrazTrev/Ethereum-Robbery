
import './App.css';
import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
import Lottie from 'react-lottie-player'
import Loader from './assets/loader.json'
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
  const [account, setAccount] = useState(undefined)
  const [ethe, setEthe] = useState(false)
  const loadblck = async () => {
    if (window.ethereum) {
      window.ethereum.enable()

      const web3Provider = new Web3(Web3.givenProvider || "http://localhost:8545")
      const network = await web3Provider.eth.net.getNetworkType()
      const accounts = await web3Provider.eth.getAccounts()
      setEthe(true)

      setAccount(accounts[0])
      console.log(network, accounts)
    }
  }
  useEffect(() => { loadblck() }, [])
  return (
    <div className="App">{
      !ethe ? (
        <> <Lottie
          loop
          animationData={Loader}
          play
          style={{ width: 250, height: 250 }}
        /></>
      ) : (
        <button>Give me all your money</button>
      )
    }

    </div>
  );
}

export default App;
