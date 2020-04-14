import React from "react";

export default class ProgressBar extends React.Component {

    state = {current: 0, text: "Temporary"};
    updateCurrentPct;

    componentDidMount() {
        this.updateCurrentPct = setInterval(() => {
            if (this.state.current < this.props.pct) this.setState({current: this.state.current + 1})
            else {
                this.setState({text: this.props.text});
                this.props.onReady()
                clearInterval(this.updateCurrentPct);
            }
        }, 2)
    }

    componentWillUnmount() {
        clearInterval(this.updateCurrentPct);
    }

    render() {
        return (
            <div style={{width: `${this.state.current}%`, backgroundColor: this.props.color}} className={"progressBar"}>
                <h1 className={this.props.isReady ? "fadeIn" : ""} style={{opacity: this.props.isReady ? 1 : 0}}>{this.state.text}</h1>
            </div>
        )
    }
}