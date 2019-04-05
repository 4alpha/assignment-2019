import React from 'react';

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
       return lat > 0 ? 'SUMMER' : 'Winter';
    }
    else {
        return lat > 0 ? 'Winter' : 'SUMMER';     
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat,new Date().getMonth());
    const text = season === 'Winter' ? 'Winter is here': 'गर्मी लय हाय !';
    const icon = season === 'Winter' ? 'snowflake':'sun';
    console.log(season);
    return <div>
        <i className={`${icon} icon`} />
        <h1>{text}</h1>
        <i className={`${icon} icon`}/>
        </div>; 
};

export default SeasonDisplay;