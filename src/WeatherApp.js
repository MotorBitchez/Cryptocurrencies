import React from 'react';
import {css} from 'react-emotion';  
import clearIcon from './icons/clear.png';
import fewcloudsIcon from './icons/fewclouds.png';
import humidityIcon from './icons/humidity.png';
import mistIcon from './icons/mist.png';
import rainIcon from './icons/rain.png';
import scatteredcloudsIcon from './icons/scatteredclouds.png';
import showerrainIcon from './icons/showerrain.png';
import snowIcon from './icons/snow.png';
import thermometerIcon from './icons/thermometer.png';
import thunderstormIcon from './icons/thunderstorm.png';
import windIcon from './icons/wind.png';

function getIcon(text){
    switch(text){
        case 'Clear':
            return clearIcon;
        case 'Few Clouds':
            return fewcloudsIcon;
        case 'Humidty':
            return humidityIcon;
        case 'Mist': 
            return mistIcon;
        case 'Rainy': 
            return rainIcon;
        case 'Scattered Clouds': 
            return scatteredcloudsIcon;
        case 'Showerrain' : 
            return showerrainIcon;
        case 'Snowy' : 
            return snowIcon;
        case 'Thunderstrom' : 
            return thunderstormIcon;
        case 'Windy' : 
            return windIcon;
    }
}


const LeftSide = ({data}) => {
    return (
        <div className={leftSide}>
            <div css={`width: 100%; height: 20vh; 
                display: flex; justify-content: flex-end; flex-direction: column; 
                align-items: center;  `}>
                <span css={'margin-bottom: 2%;'}>İstanbul</span>
                <span css={'margin-bottom: 4%;'}>27 September, Wendesday</span>
            </div>
            <div css={`width: 58vh; height: 58vh; border-radius: 50%;
                bordedr: 1px solid white;  background: rgba(0, 0, 0, 0.3);
                box-shadow: 2px 0 20px 2px rgba(255, 255, 255, 0.7); 
                background-image: url(${getIcon('Clear')}); background-repeat: no-repeat;
                background-size: 80%; background-position: center;` }>
            </div>
            <div css={`width: 100%; height: 22vh;
             display: flex; flex-direction: column; justify-content: flex-start;
                align-items: center; span{font-size: 40px;}`}>
                <span css={'margin: 4% 0 1% 0;'}>Thunderstorm</span>
                <span>16°</span>
            </div>
        </div>
    );
}

const RightSide = ({data}) => {
    return(
        <div className={rightSide}>
            <div css={nextDay}>
                <span>Thursday</span> 
                <img src={getIcon('Mist')} />
                <span css={'font-size: 1.1em; font-weight: bold;'}>23°</span>
                <span>Cloudly</span>
            </div>
            <div className={hrStyle}></div>
            <div css={nextDay}>
                <span>Thursday</span> 
                <img src={getIcon('Mist')} />
                <span css={'font-size: 1.1em; font-weight: bold;'}>23°</span>
                <span>Cloudly</span>
            </div>
            <div className={hrStyle}></div>
            <div css={nextDay}>
                <span>Thursday</span> 
                <img src={getIcon('Mist')} />
                <span css={'font-size: 1.1em; font-weight: bold;'}>23°</span>
                <span>Cloudly</span>
            </div>
            <div className={hrStyle}></div>
            <div css={nextDay}>
                <span>Thursday</span> 
                <img src={getIcon('Mist')} />
                <span css={'font-size: 1.1em; font-weight: bold;'}>23°</span>
                <span>Cloudly</span>
            </div>
             

        </div>
    );
}

export class WeatherApp extends React.Component { 
    render(){
        const d = new Date();
        let time = new Intl.DateTimeFormat('en-GB', {timeZone: "Europe/Istanbul", hour12: false, hour: '2-digit', minute: '2-digit'}).format(d);
        let date = new Intl.DateTimeFormat('en-GB', {timeZone: "Europe/Istanbul", hour12: false, day: '2-digit', month: 'numeric', year: 'numeric'}).format(d);
        
        return(
            <div className={container}> 
                <LeftSide data={"this.props.data"}/>
                <RightSide data={this.props.data}/>
            </div>    
        )
    }
}

const container = css`
    width: 100%;
    height: 100%;
    box-sizing: border-box; 
    background: linear-gradient(to right bottom, black, rgb(70, 70, 70));
    background: linear-gradient(to right bottom, rgb(87, 21, 9), rgb(147, 67, 78));
    display: flex;

    & * {
        box-sizing: border-box;
        font-family: Futura;
        color: white;
        font-size: 35px;
    }   
`;

const leftSide = css` 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    flex-basis: 1%;
    flex-grow: 1;
`;
    
const rightSide = css` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;    
    height: 100%;
    flex-basis: 1%;
    flex-grow: 1;
`;

const nextDay = css`
    width: 80%;
    height: 12vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;

    img{
        width: 100px;
        height: auto;
    }
`;
const hrStyle = css`
    width: 80%;
    height: 1px;
    border: none;
    background: white;
`;