import Particles from "react-particles-js";
import logo from "./logo.gif";
import React from "react";
import SwipeUp from "./SwipeUp";

export default class Homepage extends React.Component {

    state = {particlesValue: window.outerWidth * 0.1};

    setParticles = () => {
        this.setState({particlesValue: window.innerWidth * 0.1})
    };

    componentDidMount() {
        window.addEventListener("resize", this.setParticles);
    }

    render() {
        return (
            <React.Fragment>
                    <Particles
                        canvasClassName={"background"}
                        params={{
                            "particles": {
                                "number": {
                                    "value": this.state.particlesValue
                                },
                                "size": {
                                    "value": 3
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    }
                                }
                            }
                        }}
                    />
                <div className={"container"}>
                    <div className={"panel border shadow"}>
                        <img className={"logo"} src={logo} alt={""}/>
                        <h4 className="subtitle">Student Researcher at Google</h4>
                    </div>
                    <SwipeUp color={"white"} text={"View My Skills"} onClick={this.props.nextScreen}/>
                </div>
            </React.Fragment>

        )
    }
}