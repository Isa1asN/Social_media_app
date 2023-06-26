import React, {useEffect} from "react";
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Posts from "./components/posts/posts";
import Form from "./components/form/form";
import useStyles from './styles';
import memories from './images/memories.png'
import {useDispatch} from 'react-redux';
import {getPosts} from './Actions/posts';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts());
    }, [dispatch]
    );
    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center"> Memories</Typography>
                <img className={classes.img} src={memories} alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );  
};

export default App;