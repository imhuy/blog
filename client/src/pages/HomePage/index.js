import { Button, Card, CardMedia, Container, Grid, Paper, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/Header'
import styles from './styles';
import InfiniteScroll from 'react-infinite-scroller';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isloadmore: true
        };
    }

    Copyright() {
        return (

            <Card >

            </Card>

        );
    }
    async componentDidMount() {
        var rs = await fetch(`http://localhost/post/0/50`);
        var itemResponse = await rs.json();

        // console.log('huydev111')
        // console.log(itemResponse.length)
        this.setState({ data: itemResponse })
    }

    async loadmore(page) {
        var rs = await fetch(`http://localhost/post/${page}/6`);
        var itemResponse = await rs.json();

        console.log('huydev1000')
        console.log(itemResponse.length)
        if (itemResponse === null || itemResponse.length === 0) {
            this.setState({ isloadmore: false })
        }
        this.setState({ data: this.state.data.concat(itemResponse) })
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
                                    {
                                        this.state.data.map(item => (
                                            <Grid item key={item.id} xs={12} sm={6} md={4}>
                                                <Link style={{ textDecoration: 'none' }}
                                                    // to={item.slug + '-' + item.slug}
                                                    to={{
                                                        pathname: item.slug,
                                                        state: { fromDashboard: '5ef3109f66c09345c64c89d5' },
                                                    }}
                                                >
                                                    <Paper elevation={0} style={styles.card} >
                                                        <div >
                                                            <CardMedia
                                                                style={styles.cardMedia}
                                                                image={item.image}
                                                                title={item.title}
                                                            />
                                                        </div>
                                                        <div style={styles.cardContent}>
                                                            {/* <p style={styles.h2} > */}
                                                            <p style={{ fontFamily: 'Oswald', fontSize: "1.5em", fontWeight: 'bold', }} >
                                                                {item.title} </p>
                                                            <Typography style={{ color: '#5f6368' }} > {item.description}  </Typography>

                                                        </div>

                                                    </Paper>
                                                </Link>
                                            </Grid>

                                        ))
                                    }
                                </Grid>


                                <Grid container spacing={6}>

                                    <InfiniteScroll
                                        pageStart={0}
                                        loadMore={this.loadmore.bind(this)}
                                        hasMore={this.state.isloadmore}
                                        loader={<div className="loader" key={0}>Loading ...</div>}  >
                                    </InfiniteScroll>

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