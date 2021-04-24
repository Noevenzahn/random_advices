import React from "react";
import axios from "axios";

import "./App.css"


class App extends React.Component {
    state = {
        advice: ""
    }

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get("https://api.adviceslip.com/advice")
        .then ((response) => {
            const { advice } = response.data.slip; // this destructuring works like const advice = response.data.slip.advice;
                console.log(advice);
                this.setState({ advice }) // works like this.setState({ advice: advice })
        })
        .catch((error) => {
            console.error();
        })
    }

    render() {
        const { advice } = this.state; // works like advice = this.state.advice
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>Advice, please!</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default App;

// Übung: random background (unsplash API?)
// Übung: refactor this to a function component
// Übung: use fetch() instead of axios
// Übung: use more APIs!