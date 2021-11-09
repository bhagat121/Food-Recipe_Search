import React , {useState} from "react";
import Axios from "axios";
import { v4 as uuidv4} from "uuid";
import "./App.css";
import Recipe from "./components/Recipe";
import Alert from "./components/Alert";
function App() {

    const [query,setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert,setAlert] = useState("");

    const onChange = (e) =>{
        setQuery(e.target.value);
    }

    const APP_ID = "c5dd8bcd";
    const APP_KEY = "531c56ad1e063d0b9c18778e5eddff76";
    const url =`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData = async() => {
        if(query !== ""){
            const result = await Axios.get(url);
            if(!result.data.more){
                return setAlert("No food Available with this name, Please enter the valid food name");
            }
            setRecipes(result.data.hits);
            console.log(result);
            setAlert("");
            setQuery(""); 
        }else {
            setAlert("Plaese Type The Food Name");
        }
       
    };

    const onSubmit = (e) => {
            e.preventDefault();
            getData();
    }
    return (
    <div className="App">  
      <h1>FOOD SEARCHING APP</h1>

      <form className="search-form" onSubmit={onSubmit}>
      {alert !== "" && <Alert alert={alert}/>}
          <input type="text" placeholder="Search Recipe" autoComplete="false" onChange={onChange} value={query}/>
          <input type="submit" value="search"/>
      </form>
      <div className="recipes">
          {recipes !==[] && recipes.map(recipe=><Recipe key={uuidv4()}recipe={recipe}/>)}
      </div>
    </div>
    );
}

export default App;