import axios from 'axios'
import {useState} from "react";
import Profile from "@/components/profile";
import {response} from "express";



const SearchBar = () => {

    const [playerName, setPlayerName] = useState("");
    const [matches, setMatches] = useState({});
     async function getPlayerGames {
         var APISearch = "http://localhost:4000/playerMatches";
         await axios.get(APISearch, {params: {username: playerName}}).then(function (response) {
             setMatches(response);
         }).catch(function (error) {
             console.log(error);
         });
     }
    return (
    <div className="SearchBar">
        <h3> Search for Player</h3>
        <input onChange={e => setPlayerName(e.target.value)}/>
        <button onClick={getPlayerGames}>Search</button>
        <Profile data = {matches} />
    </div>)
};

export default SearchBar;