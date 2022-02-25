import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';



function App() {
  const [state, setState] = useState({
    joke: '',
    listItem: ''
  });

  const fetchData = async (category) => {
    setState((prevState) => ({
      ...prevState,
      listItem: category,
    }));
    const api = `https://api.chucknorris.io/jokes/random?category=${category}`;
    const result = await axios.get(api);

    setState((prevState) => ({
      ...prevState,
      joke: result.data.value,
    }));
  };
  const fetchNewJoke = async (item) => {


    const api = `https://api.chucknorris.io/jokes/random?category=${item}`


    const result = await axios.get(api);

    console.log(result);
    setState({
      ...state,
      joke: result.data.value
    });
  }


  const list = ["animal", "career", "celebrity", "dev", "explicit", "fashion", "food", "history", "money", "movie", "music", "political", "religion", "science", "sport", "travel"];

  return (
    <div className='container'>

      <div className='col-6'>
        <h1 className='title'>Chuck Norris</h1>
      </div>
      <div className='col-6 searchJokeCol'>
        <div className='section'>
          <div className='parent'>
            {list.map((item) => {
              return (
                <button onClick={() => fetchData(item)}>
                  <div> {item} </div>
                </button>

              )
            })
            }
          </div>
        </div>

      </div>

      <h2 className='subTitle'>Here is the joke</h2>
      <h4>{state.joke}</h4>
      {state.listItem.length > 0 ?
        <button onClick={() => fetchNewJoke(state.listItem)}>
          new joke </button> : <h1>Please select the category</h1>}
    </div>
  );
}

export default App;
