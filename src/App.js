
import './styles/App.css';
import { useState, useEffect } from 'react';
import DisplayTransactions from './components/DisplayTransactions';
import NavBar from './components/NavBar';


function App() {

  const [block, setBlock] = useState(0);
  const [counter, setCounter] = useState(0);




  useEffect(()=>{

    const options = {
      method: 'POST',
      headers: {accept: 'application/json', 'content-type': 'application/json'},
      body: JSON.stringify({id: 1, jsonrpc: '2.0', method: 'eth_blockNumber'})
    };
    
    fetch('https://eth-mainnet.g.alchemy.com/v2/GNauZOAEhjOc34zQQqQuXorOlmC6wJ6W', options)
      .then(response => response.json())
      .then(response => {console.log(response.result); setBlock(response.result);})
      .catch(err => console.error(err));

  }, [counter]);


  

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log('This will run every 12 seconds!');
      setCounter((counter)=> counter + 1);
    }, 12000);
    
    return () => clearInterval(interval);
  }, []);

  


  return (
    <div className="App">
      <NavBar />
      <div className='inApp'>
        <h1 >Current Block on Ethereum: {parseInt(block, 16)}</h1>
        {block !== 0? <DisplayTransactions data = {block}/>: <>Loading ...</>}
      </div>
      
      
    </div>
  );
}

export default App;
