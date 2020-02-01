import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const URL = 'http://localhost/user/2'
const mp3 = 'https://gate-aicc.vbeecore.com/streaming/15804654147240.79486393346034730.198924413991556030.33503549482141826.mp3'
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

    }

    async resdata() {
        var data = await fetch(URL)
        const responseJson = data.json();
        return responseJson
    }

    render() {
        return (
            <div>

                <form>
                    <label>
                        Name:
    <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <audio controls className="audio-element">
                    <source src={mp3} type="audio/mpeg"></source>
                </audio>

            </div>
        );
    }
}



export default Header;
