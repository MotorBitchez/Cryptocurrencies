import React from 'react';
import {css} from 'react-emotion';
// import {AnalogClock} from './AnalogClock';
// import calendarIcon from './calendar.svg';
// import clockIcon from './clock.svg';
// import notificationIcon from './notification.png';
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Event = (props) => (
    <div css={eventStyle}> 
        <span>{props.eventTime}</span>
        <span css={`margin-left: 5px;`}>{props.eventName}</span>
    </div>
);




const Block = ({idx, day}) => {

    return(
        <div className={block}>
            <div>
                <span id='dayStyle'>{day}</span>
                <span id='dayStyle'css={`margin-left: 4%;`}> {idx <= 6 ? days[idx] : ''} </span>
            </div>
            <div css={`width: 100%; height: 88%; margin-top: 1%;`}>
                <Event eventName={'Webrazzi Meeting'} eventTime={'8pm'}/> 
            </div>
        </div>
    );
};              

export class CyrptoApp extends React.Component{

    componentDidMount(){
    }

    render(){
        let {date} = this.props;

        let a = [];
            for(let i = 1; i <= this.props.weeks * 7; i++){
                a.push(i);
        }

        return(
            <div css={container}>
                <div css={modalContainerStyle}>
                    <div css={modalStyle}>
                        <div css={modalMessagePanel}>
                            <img id={'alertIcon'} src={"notificationIcon"}/> 
                            <span id={'modalEventName'}> Webrazzi Meeting </span>
                            <hr css={`width: 70%; opacity: 0.6;`}/>
                            <div id={`modalEventDate`}>
                                <img src={""} />
                                <span >Tuesday, June 5</span>
                            </div>
                            <div id={`modalEventTime`}>
                                <img src={"clockIcon"} />
                                <span >8:00pm - 9:00pm</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div css={leftPanel}>
                    <div css={watchContainer} >
                        <div id='dateContainer'> 
                            <span css={`font-size: 1.9vw; `} > {date.toUpperCase()} </span>
                            <hr css={`width: 80%; margin-top: 8%; opacity: 0.6;`}/>
                        </div>
                        <div id='clockContainer'> 
                        </div>
                    </div>
                    <div css={nextEvents}>Next Events </div>
                    <div css={`${leftEvents} `}> 
                        <div id='eventName'>Iyzico Meeting</div>
                        <div id='eventDate'>
                        <img src={calendarIcon}/>
                            <span>Tuesday, June 5</span>
                        </div>
                        <div id='eventTime'>
                            <img src={clockIcon} />
                            <span>7:00pm - 8:00pm</span>
                        </div>
                    </div>
                    <div css={`${leftEvents} ${eventTwo}`}>
                        <div id='eventName'>Iyzico Meeting</div>
                        <div id='eventDate'>
                            <img src={calendarIcon}/>
                            <span  >Tuesday, June 5</span>
                        </div>

                        <div id='eventTime'>
                            <img src={clockIcon} />
                            <span  >7:00pm - 8:00pm</span>
                        </div>
                    </div>
                </div>
                <div css={`${rightPanel} grid-template-rows: repeat(${this.props.weeks}, 1fr);`}>
                    {a.map((element, idx) => <Block key={idx} day={element} idx={idx}/>)}
                </div>
            </div>
        )
    }
}

const container = css`
    width: 100%;
    height: 100%;
    display: flex;
    
    & * {
        box-sizing: border-box;
        font-family: Muli;
    }
`;

const modalContainerStyle = css`
    display: none;  
    align-items: center;
    justify-content: center; 
    position: absolute; 
    width: 100%; 
    height: 100%; 
    top: 0; 
    left: 0; 
    background-color: rgba(0, 0, 0, 0.0); 
    z-index: 15; 
`;

const modalStyle = css`
    width: 60vw; 
    height: 40vw; 
    background: linear-gradient(to bottom, rgba(0, 123, 195, 0.0), rgba(86, 193, 255, 0.0));
    border-radius: 40px;
    color: white; 
    display: flex;
    justify-content: center;
    align-items: center;
    `;
    
    const modalMessagePanel = css`
    width: 60%;
    height: 50%;
    border: 5px solid white;
    background-color: white;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: rgb(0,123,195);
    box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.4);
    position: relative;
    & #alertIcon{
        width: 6vw; 
        height: 6vw;
        position: absolute;
        top: -12%; 
        right: -10%;
    }

    & #modalEventName{
        font-size: 2.5vw;
        padding-top: 5%;
        margin-bottom: 3%;
        font-weight: bold;
    }

    & #modalEventDate{
        font-size: 2vw;
        padding-top: 7%;
        width: 100%;
        padding-left: 15%;
        display: flex; 
        justify-content: flex-start;
        align-items: center;
        & img {
            width: 2vw;
            height: 2vw; 
            margin-right: 5%;
        }
    }
    
    & #modalEventTime{
        font-size: 2vw;
        padding-top: 5%;
        width: 100%;
        padding-left: 15%;
        display: flex; 
        justify-content: flex-start;
        align-items: center;
        & img {
            width: 2vw;
            height: 2vw; 
            margin-right: 5%;
        }
    }
    
`;

const leftPanel = css`
    width: 15%;
    height: 100vh;
    background: linear-gradient(to bottom, rgb(0,118,186), rgb(251,251,251));
    box-shadow: 1px 0 25px 1px rgba(0,0,0,0.4);
`;

const watchContainer = css`
    width: 100%;
    height: 35%;
    display: grid;
    grid-template-rows: 6vw 1fr;

    & #dateContainer{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        color: white;
    }

    & #clockContainer{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
`;


const nextEvents = css`
    font-size: 1.3vw;
    text-align: center;
    font-weight: 500;
    background-color: rgb(0,123,195, 0.2);
    width: 90%;
    padding: 2%;
    color: white;
    margin: 10% auto 6% auto;
    border-radius: 17px;
 `;
    
const leftEvents = css`
    width: 90%;
    height: 25%;
    margin: auto;
    border-radius: 15px;
    background-color: white;
    box-shadow: 0 6px 12px 5px rgba(0,0,0,0.1);
    
    & #eventName{
        width: 100%;
        padding: 8%;
        text-align: center;
        font-size: 1.3vw;
        color: white; 
        border-radius: 15px 15px 0 0;
        background-color: rgb(0,162,255);
        box-shadow:  0 18px 50px -20px rgb(0,0,0,0.7);
    }
    & #eventDate{
        width: 100%;
        height 18%;
        font-size: 1vw;
        display: flex;
        align-items: center;
        margin-top: 15%;
        & img{
            width: 1.5vw;
            height: 1.5vw;
            margin-left: 10%;
            margin-right: 5%;
        }
    }
    
    & #eventTime{
        width: 100%;
        height 18%;
        font-size: 0.9vw;
        display: flex;
        align-items: center;
        margin-top: 5%;
        & img {
            width: 1.5vw;
            height: 1.5vw;
            margin-left: 10%;
            margin-right: 5%;
        }
    }
`;

    
const eventTwo = css`
    margin-top: 8%;
`;
const rightPanel = css`
    width: 85%; 
    height: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 1fr);
`;

const eventStyle = css`
    width: 100%;
    height: 20%;
    border-radius: 17px;
    background-color: rgb(0, 162, 255);
    font-size: 0.8vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-bottom: 4%;
    box-shadow: 0 0 10px 1px rgb(0,0,0, 0.3);
    

`;


const block = css`
    border: 1px solid rgba(150,150,150,0.3);
    border-collapse: collapse;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;

    & #dayStyle{
        font-size: 1.8vh;
        color: rgb(61,61,61);
    }
`;
