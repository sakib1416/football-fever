import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
const LeaguesImage = (props) => {
    const {strBadge} = props.image;
    const imageStyle = {
        width: "100%"
    }
    return (
        <div>
            <img style={imageStyle} src={strBadge} alt=""/>
            <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="0"
                    image={strBadge}
                    title="Contemplative Reptile"
            />
        </div>
    );
};

export default LeaguesImage;