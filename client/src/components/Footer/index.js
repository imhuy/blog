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
        var obj = {};
        var domain = [];
        var id = Math.random().toString(36).substr(2, 3);

        var Urlsend = URL + `${id}` + '.com'
        var data = await fetch(Urlsend)
        const respon = await data.json();
        if (respon === 1) {
            return [];
        }
        obj = { domain: id, ischeck: respon }
        domain.push(obj)
        return domain
    }


    async componentDidMount() {
        var totaldoamin = [];
        setInterval(async () => {

            var domain = await this.resdata()
            domain.forEach((item) => {

                totaldoamin.push(item)
                console.log('Urlsend3132')
                console.log(totaldoamin)
            })
            this.setState({
                domain: totaldoamin
            })
        }, 1000);

    }

    render() {
        return (
            <div>
                {this.state.domain.map((item, i) =>
                    <ul key={i}>
                        <li>
                            <p> {item.domain}</p>
                        </li>
                    </ul>
                )}

            </div>
        );
    }
}

export default Footer;
