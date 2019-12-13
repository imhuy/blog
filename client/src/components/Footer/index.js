import React, { Component } from 'react';
// import axios from 'axios';

const URL = 'http://whois.net.vn/whois.php?domain='
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: ''
        };
    }


    async resdata() {

        var id = Math.random().toString(36).substr(2, 4);
        var Urlsend = URL + `${id}` + '.com'
        console.log('huydevv111')
        console.log(Urlsend)
        var data = await fetch(Urlsend)
        const responseJson = data.json();
        return responseJson
    }



    async componentDidMount() {
        var x = await this.resdata()
        console.log('respondata')
        console.log(x)
    }

    render() {
        return (
            <div>
                <p className="">Footer</p>
            </div>
        );
    }
}

export default Footer;
