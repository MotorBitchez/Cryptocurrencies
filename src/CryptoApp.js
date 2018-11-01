import React from 'react';
import {css} from 'react-emotion'; 
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
            <span id="current-percent" css={'color: rgb(16, 216, 16);'}>{value}% ▲</span>
        )
    }else{
        return(
            <span id="current-percent" css={'color: red;'}>{value}% ▼</span>
        )
    }
}

const Block = ({currency, length}) => {
    let currentBlockStyle = block;
    if(length == 1 || length == 2){
        currentBlockStyle = singleBlock;
    }
    return(
        <div className={currentBlockStyle}>
            <div id="top-side">
                <div>
                    <img id="icon-style" src={currency.logo}/> 
                    <br/> 
                    <span id="name">{currency.name}</span>
                </div>
                <div  >
                    <span id="current-value">$ {currency.value}</span>
                    <br/> 
                    <Arrow value={currency.percent}/> 
                </div>
            </div>
            <hr/>
            <div css={blockBottom}>
                <div css={"display: flex;  justify-content: space-between;"}>
                    <span id="market-capacity" >Market Cap</span>
                    <span id="market-capacity">${currency.marketCap}</span>
                </div>
                <div css={'display: flex; justify-content: space-between;'}>
                    <span id="circulating-supply">Circulating Supply</span>
                    <span id="circulating-supply">${currency.circSupply}</span>
                </div>
            </div>
        </div>
    );
};    
 
export class CryptoApp extends React.Component { 
    render(){
        const d = new Date();
        let time = new Intl.DateTimeFormat('en-GB', {timeZone: "Europe/Istanbul", hour12: false, hour: '2-digit', minute: '2-digit'}).format(d);
        let date = new Intl.DateTimeFormat('en-GB', {timeZone: "Europe/Istanbul", hour12: false, day: '2-digit', month: 'numeric', year: 'numeric'}).format(d);
        let currentStyle= '';
        if(this.props.data.length > 4){
            currentStyle = blockStyles.get(5);
        }else{
            currentStyle = blockStyles.get(this.props.data.length);
        }
        return(
            <div className={container}>
                <div className={header}>
                    Cryptocurrencies
                    <span  css={'margin-left: 20px;'}>{date}</span>
                    <span>{time}</span>
                </div>  
                <div className={currentStyle}> 
                    {this.props.data.map(currency => (
                        <Block currency={currency} length={this.props.data.length}/>
                    ))} 
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
        grid-template-columns: auto auto auto auto;
        grid-template-rows: 31.5% 31.5% 31.5%;
        grid-column-gap: 45px;
        grid-row-gap: 30px;
        padding: 20px;
`;
    
const blockContainerSingle = css`
    width: 100%;   
    height: calc(100% - 65px); 
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 600px;
    padding: 20px;
`;  
    
const blockContainerDouble = css`
    width: 100%;
    height: calc(100% - 65px); 
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: 650px 650px;
    grid-template-rows: 31.5%;
    grid-column-gap: 10%;

`;
    
const blockBottomTriple = css`
    width: 100%;
    height: calc(100% - 65px); 
    display: grid;
    align-content: center;
    justify-content: center; 
    grid-template-columns: 450px 450px 450px;
    grid-template-rows: 30.5%; 
    grid-column-gap: 8%;
`;

const blockContainerFour = css`
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
   
const blockStyles = new Map();
blockStyles.set(1, blockContainerSingle);
blockStyles.set(2, blockContainerDouble);
blockStyles.set(3, blockBottomTriple);
blockStyles.set(4, blockContainerFour);
blockStyles.set(5, blockContainer);



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
        font-size: 50px;
    }

    #current-percent{
        font-size: 30px; 
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

const singleBlock = css`
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
        margin: 15px 0 20px 10px;
    }

    #name{
        font-size: 30px;
    }

    #current-value{
        font-size: 60px;
    }

    #current-percent{
        font-size: 40px;
        float: right;
        padding-top: 10px;
    }

    hr{
        opacity: 0.7;
    }

    #market-capacity{
        font-size: 26px; 
    }

    #circulating-supply{
        font-size: 26px;
    }
`;

const blockBottom = css`
    display: flex; 
    flex-direction: column;  
    padding: 5% 0; 
    font-size: 23px; 
    line-height: 200%;
`