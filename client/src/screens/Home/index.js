import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from '../../admin/app';
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

                        <Route path="/abc" component={Post} />

                        <Route path="/admin" component={Admin} />


                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default Home;