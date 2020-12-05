import React, {useState, Component, useReducer} from 'react';

function addSports(props){

    return (<div>
        <div>
            type sport name
        </div>
        <input type="text" id="sport">
        </input>
        <button onClick={()=> { props.dispatch({type:"ADD_SPORT_NAME", sportsName: document.getElementById("sport").value } ) } }>
                add!
        </button>
    </div>);
}

export default addSports;