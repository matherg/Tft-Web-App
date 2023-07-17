var express = require('express');
var cors = require('cors');
const axios = require('axios');
var app = express();
app.use(cors());
const API_KEY = "RGAPI-d0d0927d-89d2-4952-b3d4-eeb8f9b0551c";
function getPlayerPUUID(playerName) {
    var APISearch = "https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/" + playerName + "?api_key=" +API_KEY;

    return axios.get(APISearch).then(response => {
        console.log(response);
        return response.data.puuid;
    }).catch(err => console.log(err));
}
function getPlayerMatchIds(PUUID) {

}

app.get('/playerMatches', async (req, res) => {
    const playerName = req.query.username;
    const PUUID = await getPlayerPUUID(playerName);
    const APISearch = "https://americas.api.riotgames.com" + "/tft/match/v1/matches/by-puuid/" + PUUID + "/ids" + "?api_key=" + API_KEY;
    const gameIDS = await axios.get(APISearch).then(response => {
            console.log(response);
            return response.data;
        }).catch(err => console.log(err));
})

app.listen(4000, function () {
    console.log("Server started on port 4000");
});