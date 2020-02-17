import { AppBar, Button, Card, CardContent, CardMedia, Container, CssBaseline, Grid, Link, CardActions, Toolbar, Typography } from '@material-ui/core';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import React, { Component } from 'react';
import styles from './styles';
const cards = [1, 2, 3, 4, 5, 6];

class HomePage extends Component {

    Copyright() {
        return (

            <Card >
                <CardContent>
                    <Typography className={styles.title} color="textSecondary" gutterBottom>
                        Word of the Day
              </Typography>

                    <Typography className={styles.pos} color="textSecondary">
                        adjective
              </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>

        );
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                        <CameraIcon style={styles.icon} />
                        <Typography variant="h6" color="inherit" noWrap>
                            Album layout
                </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    {/* Hero unit */}
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
                                        <Button variant="contained" color="primary">
                                            Main call to action
                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined" color="primary">
                                            Secondary action
                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                    <Container style={styles.cardGrid} maxWidth="lg">
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {cards.map(card => (
                                <Grid item key={card} xs={12} sm={6} md={4}>
                                    <Card style={styles.card}>
                                        <div >
                                            <CardMedia
                                                style={styles.cardMedia}
                                                image="https://miro.medium.com/max/1058/1*Z1SU1atGbGMgY_jHaDyMGA.png"
                                                title="Image title"
                                            />
                                        </div>
                                        <CardContent style={styles.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                How to Remove Array Duplicates in ES6
                          </Typography>
                                            <Typography>
                                                This is a media card. You can use this section to describe the content.
                          </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                View
                          </Button>
                                            <Button size="small" color="primary">
                                                Edit
                          </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
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