import { Button, Card, CardMedia, Container, Grid, Paper, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import Header from '../Header';
import styles from './styles';
const cards = [1, 2, 3, 4, 5, 6,];

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
                                    {cards.map(card => (
                                        <Grid item key={card} xs={12} sm={6} md={4}>
                                            <Paper elevation={0} style={styles.card} >
                                                <div >
                                                    <CardMedia
                                                        style={styles.cardMedia}
                                                        image="https://miro.medium.com/max/1058/1*Z1SU1atGbGMgY_jHaDyMGA.png"
                                                        title="Image title"
                                                    />
                                                </div>
                                                <div style={styles.cardContent}>
                                                    {/* <p style={styles.h2} > */}
                                                    <p style={{ fontFamily: 'sans-serif', fontSize: "large", fontWeight: 'bolder', }} >
                                                        How to Remove Array Duplicates in ES6 </p>
                                                    <Typography> This is a media card. You can use this section to describe the content.  </Typography>

                                                </div>

                                            </Paper>
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
            </React.Fragment>
        );
    }
}

export default HomePage;