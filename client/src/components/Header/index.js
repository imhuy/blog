import { Grid } from '@material-ui/core';
import React, { Component } from 'react';

const data = [
    { title: 'Why Google', id: 1 },
    { title: 'Solutions', id: 2 },
    { title: 'Products', id: 3 },
    { title: 'Pricing', id: 4 },
    { title: 'Getting Startted', id: 5 },
    { title: 'Elemental', id: 6 },
]

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <React.Fragment>

                <Grid container style={{ backgroundColor: '#fcfcfc' }}  >

                    {data.map((item) => (
                        <Grid key={item.id} style={{ paddingRight: 25, }} >
                            <p>{item.title} </p>
                        </Grid>
                    ))}
                </Grid>
            </React.Fragment>
        );
    }
}

export default Header;
