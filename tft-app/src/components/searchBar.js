import axios from 'axios'
import {useState} from "react";
import Profile from "@/components/profile";


const SearchBar = () => {
    const [input, setInput] = useState("");
    const [playerName, setPlayerName] = useState("");

    if(playerName == ""){
    return (
    <div className="SearchBar">
        <h3> Search for Player</h3>
        <input onChange={e => setInput(e.target.value)}/>
        <button onClick={e => setPlayerName(input)}>Search</button>
        <h2> Playername is {playerName}</h2>
    </div>)}
    return (
        <div className="SearchBar">
            <h3> Search for Player</h3>
            <input onChange={e => setInput(e.target.value)}/>
            <button onClick={e => setPlayerName(input)}>Search</button>
            <h2> Playername is {playerName}</h2>
            <Profile player = {playerName}/>
        </div>)
};

export default SearchBar;