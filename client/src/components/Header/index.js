import React, { Component } from 'react';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            data: null,
        };
    }
    async  componentDidMount() {

        var response = await fetch("http://localhost:9000/user/1", { mode: 'no-cors' })
        console.log('huydev')
        console.log(response)
    }
    render() {
        return (
            <div>
                {JSON.stringify(this.state.planets)}
            </div>
        );
    }
}



export default Header;