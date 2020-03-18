import { AppBar, Button, Link, Toolbar, Typography } from '@material-ui/core';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <React.Fragment>
                <AppBar position="relative" color="#ff4757">
                    <Toolbar>

                        <Typography variant="h6"  >
                            Album layout
          </Typography>
                        <Typography variant="h6"  >
                            Album layout
          </Typography>

                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}

export default Header;
