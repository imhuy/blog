import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import HomePage from '../../components/HomePage';
import HomePage from '../HomePage'
import Post from '../Post';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        console.log(React.version);
        return (
            <BrowserRouter >
                <React.Fragment>
                    <Switch>
                        <Route path="/" component={HomePage} exact />
                        <Route path="/:id" component={Post} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default Home;