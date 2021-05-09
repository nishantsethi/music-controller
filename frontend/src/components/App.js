import React, { Component } from "react";
import {render} from "react-dom";
import HomePage from './Homepage'


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="center">
                <HomePage />
            </div>
            );
    }
}


const AppDiv = document.getElementById("app");
render(<App />,AppDiv);