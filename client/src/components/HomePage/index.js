import React, { Component } from 'react';
import { Button, Card, CardMedia, Container, Grid, Paper, Typography } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import Header from '../Header';
import styles from './styles';


const data = [
    {
        id: 1,
        title: 'Why Aren’t Straight People Having Better Sex?',
        content: 'A lot of old-fashioned patterns are still in play',
        url: 'https://miro.medium.com/max/1400/1*j9QpYrbpvTr9mP_yoE4Z0A.jpeg'
    },
    {
        id: 2,
        title: 'New to Data Visualization? Start with New York City',
        content: 'How I used New York’s wealth of publicly available data along with Plotly and Pandas to develop',
        url: 'https://miro.medium.com/max/1400/1*loe4IWBxEJxxYHsr91R23Q.png'
    },
    {
        id: 3,
        title: 'How to Build a Bar Chart Race on COVID-19 Cases in Tableau',
        content: 'Using the new Tableau version 2020.1',
        url: 'https://miro.medium.com/max/1400/1*fX8HyCk4RoAgv5_im-0gYA.png'
    },
    {
        id: 4,
        title: 'April Edition: Art, Creativity and Data Science',
        content: '“Everything you can imagine is real.” ― Pablo Picasso',
        url: 'https://miro.medium.com/max/1400/1*kpK59IPchFjllOsMEh52zQ.png'
    },
    {
        id: 5,
        title: 'The Ultimate Guide to Getting Started in Data Science',
        content: 'How I started getting data science job offers in under 6 months',
        url: 'https://miro.medium.com/max/3780/1*FS_p6RRY4GZIreQZ2Bxmng.jpeg'
    },
    {
        id: 6,
        title: 'How to Get Beautiful Results with Neural Style Transfer',
        content: 'A deep dive into the tricks that make Neural Style Transfer work',
        url: 'https://miro.medium.com/max/3780/1*-pPVaYrinvTp4Q6bybWi6Q.jpeg'
    }

]

class HomePage extends Component {

    Copyright() {
        return (

            <Card >

            </Card>

        );
    }

    render() {
        return (
            <React.Fragment>

                <main style={styles.main}>
                    {/* Hero unit */}
                    <div style={styles.content} >
                        <Header />

                        <div style={styles.heroContent}>
                            <Container maxWidth="sm">

                                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                    Album layout
                            </Typography>

                                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                    Something short and leading about the collection below—its contents, the creator, etc.
                                    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                                    entirely.
                            </Typography>

                                <div style={styles.heroButtons}>
                                    <Grid container spacing={2} justify="center">
                                        <Grid item>
                                            <Button variant="text" color="primary">
                                                Main call to action  </Button>

                                        </Grid>
                                        <Grid item>
                                            <Button variant="outlined" color="primary">
                                                Secondary action  </Button>

                                        </Grid>
                                    </Grid>
                                </div>
                            </Container>
                        </div>
                        <div>
                            <Container style={styles.cardGrid} >
                                {/* End hero unit */}
                                <Grid container spacing={6}>
                                    {data.map(item => (
                                        <Grid item key={item.id} xs={12} sm={6} md={4}>
                                            <Link style={{ textDecoration: 'none' }} to="/abc">
                                                <Paper elevation={0} style={styles.card} >
                                                    <div >
                                                        <CardMedia
                                                            style={styles.cardMedia}
                                                            image={item.url}
                                                            title={item.title}
                                                        />
                                                    </div>
                                                    <div style={styles.cardContent}>
                                                        {/* <p style={styles.h2} > */}
                                                        <p style={{ fontFamily: 'Oswald', fontSize: "1.5em", fontWeight: 'bold', }} >
                                                            {item.title} </p>
                                                        <Typography style={{ color: '#5f6368' }} > {item.content}  </Typography>

                                                    </div>

                                                </Paper>
                                            </Link>
                                        </Grid>

                                    ))}
                                </Grid>
                            </Container>
                        </div>
                    </div>
                </main>
                {/* Footer */}
                <footer style={styles.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
              </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Something here to give the footer a purpose!
              </Typography>
                    {this.Copyright()}
                </footer>
                {/* End footer */}
            </React.Fragment >
        );
    }
}

export default HomePage;