import React, { Component, useEffect, useState } from 'react';
import { Button, Card, CardMedia, Container, Grid, Paper, Typography } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroller';
import { fetchApi } from '../lib/api';
import Header from '../components/Header';
import styles from './styles';
import Link from 'next/link';
export default function Home({ allPosts }) {
  console.log('responjson')
  console.log(allPosts)
  return (
    <React.Fragment>

      <main style={styles.main}>

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

          <Container style={styles.cardGrid} >
            {/* End hero unit */}

            <Grid container spacing={6}>
              {allPosts.map((item, i) =>

                <Link key={i} as={`/posts/${item.slug}`} href="/posts/[slug]">
                  <Grid item xs={12} sm={6} md={4}>

                    <Paper elevation={0} style={styles.card} >
                      <div >
                        <CardMedia
                          style={styles.cardMedia}
                          image={item.image}
                          title={item.title}
                        />
                      </div>
                      <div style={styles.cardContent}>

                        <p style={{ fontFamily: 'Oswald', fontSize: "1.5em", fontWeight: 'bold', }} >
                          {item.title} </p>
                        <Typography style={{ color: '#5f6368' }} > {item.description}  </Typography>
                      </div>
                    </Paper>


                  </Grid>
                </Link>

              )}
            </Grid>

          </Container>
        </div>
      </main>
    </React.Fragment >
  )
}


export async function getStaticProps() {
  const allPosts = await fetchApi()
  return {
    props: { allPosts, },
  }
}