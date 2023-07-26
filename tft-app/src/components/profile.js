import Image from 'next/image'
import axios from 'axios'
import {useState, useEffect} from "react";



const Profile = ({player}) => {
    const [playerName, setPlayerName] = useState("");
    const [matchData, setMatchData] = useState([]);
    const [PUUID, setPUUID] = useState("");

    useEffect(() => {
        const getPUUID = async () => {
            var APISearch = "http://localhost:4000/playerPUUID";
            console.log("\n\n\n\nAXIOS GET\n\n\n")
            setPlayerName(player);
            console.log("\nHELLLLOO\n" + playerName);
            await axios.get(APISearch, {params: {username: player}, timeout: 5000}).then(response => {
                console.log(response);
                setPUUID(response.data);
            }).catch(e => console.log(e));
        }
        getPUUID();
    }, [player]);

if (playerName != "" || PUUID != "") {
    console.log(PUUID);
    return (
        <div><Image src="/images/sauna.jpg"
                    alt="Sauna Sprite"
                    width={500}
                    height={500}/>
             <h2>PUUID is {PUUID} </h2>
            <h2> Playername is {player}</h2>
        </div>);
}
return (
        <div><Image src="/images/sauna.jpg"
                    alt="Sauna Sprite"
                    width={500}
                    height={500}/>
        </div>);
}

export default Profile;