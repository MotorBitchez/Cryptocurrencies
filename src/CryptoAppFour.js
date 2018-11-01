import React from 'react';
import {css} from 'react-emotion'; 
import bitcoinIcon from '../icons/bitcoin.png';
import bgImage from './pictures/background.png';

const Event = (props) => (
    <div css={eventStyle}> 
        <span>{props.eventTime}</span>
        <span css={`margin-left: 5px;`}>{props.eventName}</span>
    </div>
);

const Arrow = ({value}) => {
    if(value > 0){
        return(
            <span css={'font-size: 0.8em'}>▲</span>
        )
    }else{
        return(
            <span css={'font-size: 0.8em; color: red;'}> ▼</span>
        )
    }
}

const Block = ({name, currentValue, currentPercent, markedCap, circulatingSupply }) => {
    return(
        <div className={block}>
            <div id="top-side">
                <div>
                    <img id="icon-style" src={bitcoinIcon}/> 
                    <br/>
                    <span id="name">{name}</span>
                </div>
                <div  >
                    <span id="current-value">$ {currentValue}</span>
                    <br/>
                    <span id="current-percent">{currentPercent}% <Arrow value={currentPercent}/></span>
                </div>
            </div>
            <hr/>
            <div css={blockBottom}>
                <div css={"display: flex;  justify-content: space-between;"}>
                    <span>Market Cap</span>
                    <span>${markedCap}</span>
                </div>
                <div css={'display: flex; justify-content: space-between;'}>
                    <span id="circulating-supply">Circulating Supply</span>
                    <span>${circulatingSupply}</span>
                </div>
            </div>
        </div>
    );
};    
 
export class CryptoAppFour extends React.Component { 
    render(){
        const d = new Date();
        let time = new Intl.DateTimeFormat('en-GB', {timeZone: "Europe/Istanbul", hour12: false, hour: '2-digit', minute: '2-digit'}).format(d);
        let date = new Intl.DateTimeFormat('en-GB', {timeZone: "Europe/Istanbul", hour12: false, day: '2-digit', month: 'numeric', year: 'numeric'}).format(d);
        return(
            <div className={container}>
                <div className={header}>
                    Cryptocurrencies
                    <span  css={'margin-left: 20px;'}>{date}</span>
                    <span>{time}</span>
                </div>  
                <div className={blockContainer}> 
                    <Block name={'Bitcoin'} currentValue={'752,22'} currentPercent={'-0.43'} 
                            markedCap={'122,568,750,852'} circulatingSupply={'3,491,927,660'}/>
                    <Block name={'Bitcoin'} currentValue={'752,22'} currentPercent={'-0.43'} 
                            markedCap={'122,568,750,852'} circulatingSupply={'3,491,927,660'}/>
                    <Block name={'Bitcoin'} currentValue={'752,22'} currentPercent={'-0.43'} 
                            markedCap={'122,568,750,852'} circulatingSupply={'3,491,927,660'}/>
                    <Block name={'Bitcoin'} currentValue={'752,22'} currentPercent={'-0.43'} 
                            markedCap={'122,568,750,852'} circulatingSupply={'3,491,927,660'}/>  
                </div>
            </div>    
        )
    }
}

const container = css`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    & * {
        box-sizing: border-box;
        font-family: Futura;
        color: white;
    }   
`;

const header = css`
    width: 100%;
    height: 65px;
    background: rgba(0, 0, 0, 0.8);
    padding: 0 30px;
    line-height: 65px;
    font-size: 25px;
    span{
        float: right;
    }
`;


const blockContainer = css`
    width: 100%;
    height: calc(100% - 65px); 
    display: grid;
    align-content: center;
    justify-content: center;
    grid-template-columns: 500px 500px;
    grid-template-rows: 30.5% 30.5%;
    grid-column-gap: 10%;
    grid-row-gap: 15%;
`;


const block = css`
    border: 2px solid rgba(100, 100, 100, 0.7);
    border-radius: 5px;
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
    
    #top-side{
        display: flex;
        justify-content: space-between;
    }

    #icon-style{
        width: 64px;
        height: 64px;
    }

    #name{
        font-size: 25px;
    }

    #current-value{
        font-size: 42px;
    }

    #current-percent{
        font-size: 30px;
        color: red;
        float: right;
        padding-top: 10px;
    }
    
    hr{
        opacity: 0.7;
    }

    #marked-capacity{
        font-size: 23px; 
    }

    #circulating-supply{
        font-size: 23px;
    }
`;

const blockBottom = css`
    display: flex; 
    flex-direction: column;  
    padding: 5% 0; 
    font-size: 23px; 
    line-height: 200%;
`