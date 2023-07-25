import Image from 'next/image'

function averagePlacement(matchList){

    if (matchList.length() === 0){
        return;
    }
    let puuid = matchList.data.pop();
    let matches = matchList.data;
    let placement = 0;
    for (let i = 0; i < matches.length; i++) {
        let participants = matches[i].info.participants;
        let player;
        for (let j = 0; j < participants.length; j++){
            if (puuid == participants[j].puuid) {
                player = participants[j];
                placement += player.placement;
            }
        }
    }
    return placement / matches.length;
}
const Profile = (props) => {

    return (
    <div>
        <Image src = "/images/sauna.jpg"
               alt = "Sauna Sprite"
               width ={500}
               height={500}/>
        <h2>{averagePlacement(props)}</h2>
    </div>
);}

export default Profile;