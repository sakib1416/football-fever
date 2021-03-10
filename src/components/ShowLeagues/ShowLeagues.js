import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import LeaguesImage from '../LeaguesImage/LeaguesImage';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './ShowLeagues.css'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ShowLeagues = (props) => {
    //console.log(props.league);
    const {idLeague, strLeague, strLeagueAlternate, strSport} = props.league;
    const [images, setImages] = useState([]);
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(response => response.json())
        .then(data => setImages(data.leagues));
    }, [idLeague]);
    // console.log(images);
    const classes = useStyles();
    let history = useHistory();
    const handleLeague = (idLeague) => {
        return history.push(`/leagues/${idLeague}`)
    }
    return (
        <div className = "league-container">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                    {
                        images.map(image => <LeaguesImage image = {image} key = {image.idLeague}></LeaguesImage>)
                    }
                    <Typography gutterBottom variant="h5" component="h2">
                        {strLeague}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {strLeagueAlternate}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {strSport}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={()=> handleLeague(idLeague)} size="small" color="primary">
                    Explore
                    </Button>
                    <Link to = {`/leagues/${idLeague}`}>Explore</Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default ShowLeagues;