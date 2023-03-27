import React from 'react'
import { useEffect, useRef, useState } from 'react';
import '../styles/Display.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DisplayTransactions(props) {
    const blocknumber = props.data;
    const transactions = useRef([]);
    const ethval = useRef(0);
    const [data, setData] = useState();
    

   

    useEffect(()=>{

        const options = {
            method: 'POST',
            headers: {accept: 'application/json', 'content-type': 'application/json'},
            body: JSON.stringify({
              id: 1,
              jsonrpc: '2.0',
              method: 'eth_getBlockByNumber',
              params: [blocknumber, true]
            })
          };
          
          fetch('https://eth-mainnet.g.alchemy.com/v2/GNauZOAEhjOc34zQQqQuXorOlmC6wJ6W', options)
            .then(response => response.json())
            .then(response => {
                setData(response.result.transactions);
                transactions.current = response.result.transactions; 
                console.log(transactions.current);})
            .catch(err => console.error(err));

            // https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd

            fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
            .then(response => response.json())
            .then(response => {
                console.log(response.ethereum.usd);
                ethval.current = response.ethereum.usd;
            })
            .catch(err => console.error(err));



    }, [blocknumber]);

    



  return (
    <div className='main'>
        <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
        <h3>Displaying Transactions for block: {parseInt(blocknumber, 16)} (Updates every 12 seconds)</h3>
        <div className='inMain'>
            <ol>
                {transactions.current.map((item)=>(
                    <li key={item.hash} style = {{fontSize: '20px'}}> 
                    <b>Block Number : </b>{parseInt(item.blockNumber, 16)} <br />
                    <b>Transaction Hash : </b>{item.hash} <br />    
                    <b>From : </b>{item.from} <br />
                    <b>To : </b>{item.to} <br />
                    <b>Amount : {}{(Number(item.value, 16)/1000000000000000000).toString()} ETH</b><br />
                    {/* <b>Amount : {(Number(item.value, 16)/1000000000000000000).toLocaleString('fullwide', { useGrouping: false })} ETH</b><br /> */}
                    <b>Amount USD $ : {(Math.round((ethval.current * Number(item.value, 16)/1000000000000000000 + Number.EPSILON) * 100) / 100).toString()}</b>
                    
                    <p>&nbsp;</p>
                    <hr />
                    <p>&nbsp;</p>
                    </li>
                    
                ))}
            </ol>
            
        </div>
        

    </div>
  )
}

export default DisplayTransactions