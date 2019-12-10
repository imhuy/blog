import React, { Component } from 'react';
import styled from 'styled-components';
import styles from './styles';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: ''
        };
    }

    render() {
        return (
            <div>
                <p className= "{}">Footer</p>

            </div>
        );
    }
}

export default Footer;
