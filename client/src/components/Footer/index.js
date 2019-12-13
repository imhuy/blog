import React, { Component } from 'react';
// import axios from 'axios';

const URL = 'http://whois.net.vn/whois.php?domain='
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            domain: [],
        };
    }


    async resdata() {
        var obj = {}
        var id = Math.random().toString(36).substr(2, 4);
        var Urlsend = URL + `${id}` + '.com'
        var data = await fetch(Urlsend)
        const responseJson = await data.json();
        console.log('Urlsend3132')
        console.log(responseJson)
        return responseJson

    }


    async componentDidMount() {
        setInterval(async () => {
            var x = await this.resdata()
        }, 2000);

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
