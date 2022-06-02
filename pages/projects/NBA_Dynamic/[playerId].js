const statistics = (props) => {
    //console.log("ID of player: ", data.data.data[0])
    console.log("name: ", props.info.first_name + " " + props.info.last_name)
    return ( 
        <div>
            <h1>{props.info.first_name} {props.info.last_name}</h1>
            <h3>PPG: {props.data.data[0].pts} </h3>
            <h3>APG: {props.data.data[0].ast} </h3>
            <h3>REB: {props.data.data[0].reb} </h3>
        </div>
     );
}
 
export async function getServerSideProps( { params }) {
    const playerId = params.playerId
    const data = (await fetch('https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]='+playerId).then(r => r.json()))
    console.log("Data: ", data.data[0])

    const info = (await fetch('https://www.balldontlie.io/api/v1/players/'+playerId).then(r => r.json()))
    console.log("Info: ", info)
    //const data = await averages.json();

    return{
        props: {
            data: data,
            playerId: playerId,
            info: info
        }
            
    }
}


export default statistics;