import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const URL = 'http://10.110.6.166/user/2'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            data: [],
        };
    }

    async componentDidMount() {
        var x = await this.resdata()
        this.setState({
            data: x
        })

    }

    async resdata() {
        var data = await fetch(URL)
        const responseJson = data.json();
        return responseJson
    }

    render() {
        return (
            <div>
                {this.state.data.map((item, i) =>
                    <ul key={i}>
                        <li>
                            {/* <img src={item.image} /> */}
                            <p> {item.email}</p>
                        </li>
                    </ul>
                )}

            </div>
        );
    }
}



export default Header;