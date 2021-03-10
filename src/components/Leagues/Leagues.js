import React, { useEffect, useState } from 'react';
import ShowLeagues from '../ShowLeagues/ShowLeagues';

const Leagues = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(response => response.json())
        .then(data => setLeagues(data.leagues));
    },[]);
    const leagueData = leagues.slice(0,12);
    //console.log(leagueData);
    return (
        <div>
            <h1>League page</h1>
            {
                leagueData.map(league => <ShowLeagues league = {league} key = {league.idLeague}></ShowLeagues>)
            }
        </div>
    );
};

export default Leagues;