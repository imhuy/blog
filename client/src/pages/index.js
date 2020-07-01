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
          <Container style={styles.cardGrid} >
            {/* End hero unit */}

            <Grid container spacing={6}>
              {allPosts.map((item, i) =>

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