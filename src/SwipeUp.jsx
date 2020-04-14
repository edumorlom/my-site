import blueIcon from "./blue-swipeup.gif";
import whiteIcon from "./white-swipeup.gif";

import React from "react";

export default function SwipeUp(props){
    let colorPalette = {
        blue: {
            icon: blueIcon,
            color: '#00539C'
        },
        white: {
            icon: whiteIcon,
            color: 'white'
        }
    }
    return (
        <div className={"swipeUp"}>
            <div onClick={props.onClick}>
                <img style={{height: 40}} src={colorPalette[props.color].icon} alt={""}/>
                <h4 style={{color: colorPalette[props.color].color}} className={"swipeUpText"}>{props.text}</h4>
            </div>
        </div>
    )
}