import React, { Component } from 'react';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';
import Demo from '../../components/Demo';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <React.Fragment>
                <Demo />
                {/* <Header /> */}
                {/* <Footer /> */}
            </React.Fragment>
        );
    }
}

export default Home;
