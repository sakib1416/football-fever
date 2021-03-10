import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react/cjs/react.development';
import ActualDetails from '../ActualDetails/ActualDetails';

const LeagueDetails = () => {
    let {idLeague} = useParams();
    const [league, setLeague] = useState([]);
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(response => response.json())
        .then(data => setLeague(data.leagues))
    },[idLeague])
    
    return (
        <div>
            <h1>Details page here {idLeague}</h1>
            {
                league.map(lg => <ActualDetails league = {lg} key = {lg.idLeague}></ActualDetails>)
            }
        </div>
    );
};

export default LeagueDetails;