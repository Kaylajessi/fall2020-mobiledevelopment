import React, {useState, Component, useReducer} from 'react';

function sportsDisplay(props){
let sportsName =props.sportsName 
    return (   
        <div>
        <div>
        {sportsName} attendance: {props.count}
        </div>
        <button onClick={() => { props.dispatch({type:"SET_SPORT_COUNT", count: props.count +1, sportsName: sportsName} ) } }>Click me!</button>
      </div>);
}

export default sportsDisplay;