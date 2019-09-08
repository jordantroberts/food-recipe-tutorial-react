import React, {useEffect, useState} from "react";
import "./App.css";

const App = () => {
  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const [recipes, setRecipes] = useState([]); // set equal to useState and add an empty array for now because we are going to have an array of objects (which we can see from the data returned by the API call)

  useEffect(() => {
    getRecipes();
  }, []); // use Effect will run when page renders. Adding the [] means it only runs once. 

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json(); // will format the response to json so we can work with the data. Add await as some data won't come back instantly. 
    console.log(data.hits);
    setRecipes(data.hits);
  }
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
