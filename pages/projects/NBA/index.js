import styles from '../../../styles/Teams.module.css'
import Link from 'next/link';
import { useState } from 'react'

const nba = (props) => {
    
   
   
    return ( 
        <div className="na">
            <h1>NBA Players</h1>
            
                

            
            {props.players.map(player=>{
                return(
                    <Link href={'/projects/NBA/' + player.id} key={player.id}>
                        <a className={styles.card}>
                            <h3 style= {{color: 'black'}}>{player.first_name + " " + player.last_name}</h3>
                        </a>

                    </Link>
                )
                 
            })}
        </div>
     );
}
 
export async function getStaticProps() {
    const res = await fetch("https://www.balldontlie.io/api/v1/players?per_page=100")
    const players = await res.json()

    return {
        props: {players: players?.data}
    }
}




export default nba;