import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;
