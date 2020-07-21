import React from 'react';
import './App.css';
import Homepage from "./Homepage";
// import HelperMethods from "./HelperMethods";
import Skills from "./Skills";

import LogRocket from 'logrocket';
LogRocket.init('3da9n7/my-site-bneso');


class App extends React.Component {

    state = {screen: 'homepage'};

    componentDidMount() {
        window.addEventListener("touchmove", () => this.setScreen(this.nextScreen()));
        window.addEventListener("mouseup", () => this.setScreen(this.nextScreen()));
    }

    setScreen = (screen) => {
        this.setState({screen: screen})
    }

    nextScreen = () => {
        if (this.state.screen === 'homepage') return 'skills'
        if (this.state.screen === 'skills') window.location = '/Resume_EduardoMorales.pdf'
    }

    render() {
        if (this.state.screen === 'homepage') return <Homepage/>
        else if (this.state.screen === 'skills') return <Skills/>
    }
}

export default App;
