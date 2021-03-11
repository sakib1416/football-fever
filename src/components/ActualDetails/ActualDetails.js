import React from 'react';
// import { Link } from 'react-router-dom';


const ActualDetails = (props) => {
    let {strLeague, strDescriptionEN, strGender, intFormedYear, strSport, strTwitter, strFacebook, strYoutube, strCountry} = props.league;
    console.log(strTwitter, strFacebook, strYoutube);
    // strGender = 'Female'
    const male = 'https://raw.githubusercontent.com/ProgrammingHero1/sports-mania/main/Photo/male.png';
    const female = 'https://raw.githubusercontent.com/ProgrammingHero1/sports-mania/main/Photo/female.png';
    return (
        <div>
            <h1>League: {strLeague}</h1>
            <p>Founded: {intFormedYear}</p>
            <p>Country: {strCountry}</p>
            <p>Sport type: {strSport}</p>
            <p>Gender: {strGender}</p>
            {/* <Link to={{pathname:'{strTwitter}'}}>Twitter</Link> */}
            {/* <button onClick={()=> window.location.assign({strTwitter})}>Twitter</button> */}
            {/* <a href={strTwitter}>Twitter</a> */}
            {
                strGender === 'Male' ? <img src={male} alt=""/> : <img src={female} alt=""/>
            }
            
            <p>{strDescriptionEN}</p>
        </div>
    );
};

export default ActualDetails;