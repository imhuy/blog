import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';
// import Demo from '../../components/Demo';
import HomePage from '../../components/HomePage';
// import Post from '../../screens/Post';
// import Post from '../../admin/components/post';
// import TTA from '../../components/TTA';
import Dashboard from '../../admin/screens/Dashboard';
import User from '../../admin/screens/UserProfile/UserProfile';
import Admin from '../../admin/app'

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

                        {/* <Route path="/abc" component={Post} /> */}

                        <Route path="/admin" component={Admin} />


                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default Home;