import React from 'react';
import ReactDOM from 'react-dom';
import {css, injectGlobal} from 'react-emotion';
import Futura from './fonts/Futura.ttc'; 
import {WeatherApp} from './WeatherApp'; 


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
    city: 'İstanbul', 
    temperature: '16', 
    dayOne: {
      dayName: 'Thursday', 
      temperature: '23', 
      airCondition: 'Cloudly', 
    },
    dayTwo: {
      dayName: 'Friday', 
      temperature: '28', 
      airCondition: 'Sunny', 
    },
    dayOne: {
      dayName: 'Saturday', 
      temperature: '20', 
      airCondition: 'Snowy', 
    },
    dayOne: {
      dayName: 'Saturday', 
      temperature: '18', 
      airCondition: 'Sunny', 
    }
  } 
]

const App = () => (
  <div className={appStyle}>  
    <WeatherApp data={data}/> 
  </div>
);

ReactDOM.render(<App/>, document.getElementById('root'));