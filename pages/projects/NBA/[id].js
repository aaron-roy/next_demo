
export async function getStaticPaths() {
    const res = await fetch('https://www.balldontlie.io/api/v1/players?per_page=100')
    const data = await res.json();

    const paths = data.data.map(player => {
        return {
            params: { id: player.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const res = fetch('https://www.balldontlie.io/api/v1/players/' + id);
    const data = await (await res).json();

    return {
        props: { player: data}
    }
}



const Details = ({player}) => {
    console.log(player.height_feet)
    return (  
        <div>
            <h1>{player.first_name + " " + player.last_name}</h1>
            <h3>Position: {player.position}</h3>
            
            <h3>Height: {player.height_feet}.{player.height_inches}</h3>
            <h3>Team: {player.team.full_name}</h3>
            

            
        </div>
    );
}


export default Details;