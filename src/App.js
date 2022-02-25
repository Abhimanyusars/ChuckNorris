import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';



function App() {
  const [state, setState] = useState({
    joke: ''
  });
  
  const fetchData = async (category) => {
    const api = `https://api.chucknorris.io/jokes/random?category=${category}`
    // console.log(category);
    const result =  await axios.get(api);
    
    console.log(result);
    setState({
      ...state,
      joke: result.data.value
    });
  }




  // useEffect(() => {
  //   fetchData();

  // }, [])

  const list = ["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"];

  


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
    </div>


  );
}

export default App;
