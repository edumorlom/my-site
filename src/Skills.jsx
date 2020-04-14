import Particles from "react-particles-js";
import logo from "./logo.gif";
import swipeUpIcon from "./blue-swipeup.gif";
import React from "react";
import ProgressBar from "./ProgressBar";
import SwipeUp from "./SwipeUp";

export default class Skills extends React.Component {
    state = {ready: 0, isReady: false}

    viewResume = () => {
        window.location = '/Resume_EduardoMorales.pdf'
    };


    onReady = () => {
        this.setState({ready: this.state.ready + 1})
        if (this.state.ready >= 5) this.setState({isReady: true})
    }

    render() {
        return (
            <div className={"container skills fadeIn"}>
                <h1 className={"title"}>My Skills</h1>
                <div className={"chart-container"}>
                    <ProgressBar pct={100} color={"#00539C"} text={"Full-Stack Engineer"} isReady={this.state.isReady} onReady={this.onReady}/>
                    <ProgressBar pct={90} color={"#014A8A"} text={"Python, JS, Java and C++"} isReady={this.state.isReady} onReady={this.onReady}/>
                    <ProgressBar pct={80} color={"#013E73"} text={"Machine Learning"} isReady={this.state.isReady} onReady={this.onReady}/>
                    <ProgressBar pct={80} color={"#013E73"} text={"UI/UX Design"} isReady={this.state.isReady} onReady={this.onReady}/>
                    <ProgressBar pct={70} color={"#01294C"} text={"React and React Native"} isReady={this.state.isReady} onReady={this.onReady}/>
                    <ProgressBar pct={65} color={"#01182D"} text={"Regression Testing"} isReady={this.state.isReady} onReady={this.onReady}/>
                    <ProgressBar pct={60} color={"black"} text={"Docker Containers"} isReady={this.state.isReady} onReady={this.onReady}/>
                </div>
                <SwipeUp color={"blue"} text={"View My Resume"} onClick={this.viewResume}/>
            </div>
        )
    }
}