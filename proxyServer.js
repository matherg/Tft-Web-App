var express = require('express');
var cors = require('cors');
const axios = require('axios');
var app = express();
app.use(cors());
const API_KEY = "RGAPI-fbcd7405-d667-4bd6-ac3c-e37c6a63c804";
async function getPlayerPUUID(playerName) {
    var APISearch = "https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/" + playerName + "?api_key=" +API_KEY;

    return axios.get(APISearch).then(response => {
        console.log(response);
        return response.data.puuid;
    }).catch(err => console.log(err));
}
async function getPlayerMatchIds(PUUID) {
    const APISearch = "https://americas.api.riotgames.com" + "/tft/match/v1/matches/by-puuid/" + PUUID + "/ids" + "?api_key=" + API_KEY;
    return await axios.get(APISearch).then(response => {
        console.log(response);
        return response.data;
    }).catch(err => console.log(err));
}

async function getMatchData(matchID) {
    const APISearch = "https://americas.api.riotgames.com" + "/tft/match/v1/matches/" + matchID  + "?api_key=" + API_KEY;
    return await axios.get(APISearch).then(response => {
        console.log(response);
        return response.data;
    }).catch(err => console.log(err));
}
app.get('/playerMatches', async (req, res) => {
    const playerName = req.query.username;
    console.log(playerName);
    const PUUID = await getPlayerPUUID(playerName);
    const matchIDS = await getPlayerMatchIds(PUUID);
    console.log(matchIDS);
    let match = await getMatchData(matchIDS[0]);
    const matchData = [];
    for (let i = 0; i < matchIDS.length; i++) {
        let match = await getMatchData(matchIDS[i]);
        matchData.push(match)
    }
    return matchData;
})
app.get('/playerPUUID', async (req, res) => {
    return await getPlayerPUUID(req.query.username);
})

app.listen(4000, function () {
    console.log("Server started on port 4000");
});