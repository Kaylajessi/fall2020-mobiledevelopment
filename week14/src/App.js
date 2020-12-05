import React, {useState, Component, useReducer} from 'react';
import './App.css';
import AddSports from './Components/AddSports';
import SportsDisplay from './Components/sportsDisplay';


const intialSportsState= {
  SportsOffered:["Basketball"], 
  Basketball: 0


}

function sportsReducer(state, action){
  console.log(state)
  let updatedState= {...state}
  switch(action.type) {
    case "SET_SPORT_COUNT": 
      updatedState[action.sportsName]=action.count      
      // looks at action data
      // updates state based on that data\
      return updatedState;
      
      case "ADD_SPORT_NAME":
        if(!state.SportsOffered.includes(action.sportsName))
        {updatedState.SportsOffered.push(action.sportsName)
          updatedState[action.sportsName]=0
          return updatedState;}      

    default:
      return state
  }
}

function App(){

  const [sportsState, dispatch] = useReducer(sportsReducer, intialSportsState);

  return (
      <div>
        <AddSports dispatch={dispatch}/>   
        {sportsState.SportsOffered.map((name)=>{
          const count=sportsState[name]?sportsState[name]:0
          return(
            <SportsDisplay dispatch={dispatch} sportsName={name} count={count}></SportsDisplay>
          )
        })}
        
      </div>
  );

}

export default App;
