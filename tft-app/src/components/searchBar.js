import axios from 'axios'
import {useState} from "react";



const SearchBar = () => {

    const [playerName, setPlayerName] = useState("");
    function playerGames(e) {
        var APISearch = "http://localhost:4000/playerMatches";
        axios.get(APISearch, {params: {username: playerName}}).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });}
    return (
    <div className="SearchBar">
        <h3> Search for Player</h3>
        <input onChange={e => setPlayerName(e.target.value)}/>
        <button onClick={e => playerGames(e)}>Search</button>
    </div>)
};

export default SearchBar;