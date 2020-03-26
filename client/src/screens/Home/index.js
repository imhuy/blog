import React, { Component } from 'react';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';
// import Demo from '../../components/Demo';
import HomePage from '../../components/HomePage';
import NotFound from '../../screens/NotFound';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import TTA from '../../components/TTA';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <BrowserRouter >
                <React.Fragment>
                    <Switch>
                        {/* <Route path="/" component={HomePage} /> */}
                        <Route path="/">
                            <HomePage />
                        </Route>
                        <Route path="/abc">
                            <NotFound />
                        </Route>
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default Home;
