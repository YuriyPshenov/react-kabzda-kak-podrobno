import React, {useState} from 'react';



const UnControlledOnOff02 = () => {
    console.log('UnControlledOnOff rendered')
    const [on, setOn] = useState(false)

    const onOffContainer = {
        display: "flex"
    }

    const onStyle = {
        width: "50px",
        height: "20px",
        border: "1px solid black",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "50px",
        height: "20px",
        border: "1px solid black",
        marginLeft: "5px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "20px",
        height: "20px",
        border: "1px solid black",
        borderRadius: "50%",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }

    const onClickHandler = (on: boolean) => () => {
        setOn(on)
    }

    return (
        <div style={onOffContainer}>
            <div style={onStyle} onClick={() => onClickHandler(true)}>On</div>
            <div style={offStyle} onClick={() => onClickHandler(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default UnControlledOnOff02;