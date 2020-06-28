{
    this.state.data.map(item => (
        <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Link style={{ textDecoration: 'none' }} to="/abc">
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