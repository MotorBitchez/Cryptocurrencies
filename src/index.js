import React from 'react';
import ReactDOM from 'react-dom';
import {css, injectGlobal} from 'react-emotion';
import Futura from './fonts/Futura.ttc'; 
import {CryptoApp} from './CryptoApp';
import {CryptoAppFour} from './CryptoAppFour';
import {CryptoAppTree} from './CryptoAppTree';


injectGlobal`
  @font-face {
    font-family: 'Futura';
    src: url(${Futura}) format('truetype');
  }
`;

const appStyle = css`
  height: 100%;
  min-width: 1000px;
`; 

const data = [
  {
    name: 'Bitcoin', 
    value: '752,22', 
    percent: '0.34', 
    marketCap: '122,568,750,852', 
    circSupply: '3,491,927,600',
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
  },
  {
    name: 'Ethereum', 
    value: '752,22', 
    percent: '-0.34', 
    marketCap: '122,568,750,852', 
    circSupply: '3,491,927,600',
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
  },
  // {
  //   name: 'Bitcoin', 
  //   value: '752,22', 
  //   percent: '-0.34', 
  //   marketCap: '122,568,750,852', 
  //   circSupply: '3,491,927,600',
  //   logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
  // },
  // {
  //   name: 'Bitcoin', 
  //   value: '752,22', 
  //   percent: '-0.34', 
  //   marketCap: '122,568,750,852', 
  //   circSupply: '3,491,927,600',
  //   logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
  // },
  // {
  //   name: 'Bitcoin', 
  //   value: '752,22', 
  //   percent: '-0.34', 
  //   marketCap: '122,568,750,852', 
  //   circSupply: '3,491,927,600',
  //   logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
  // },
  // {
  //   name: 'Bitcoin', 
  //   value: '752,22', 
  //   percent: '-0.34', 
  //   marketCap: '122,568,750,852', 
  //   circSupply: '3,491,927,600',
  //   logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
  // },
]

const App = () => (
  <div className={appStyle}>  
    <CryptoApp data={data}/> 
  </div>
);

ReactDOM.render(<App/>, document.getElementById('root'));