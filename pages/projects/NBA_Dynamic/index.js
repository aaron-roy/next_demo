import styles from '../../../styles/Searchbar.module.css'
import Link from 'next/link';
import { useState } from 'react'

/**
 * <a className={styles.card} onClick={search}>
                    <h4 style = {{color: 'black'}}>Player Search</h4>
                    <input type="text" onKeyUp={updatePlayer} ></input>
                </a>
 */


const nba = (props) => {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    
    /**
     * 
     * const updatePlayer = e => {
        setId(e.target.value)
        console.log(e.target.value)
    }
     */
    
    const updatePlayer = e => {
        getPlayer()
        async function getPlayer() {
            setName(e.target.value) 
            console.log("logging", await getPlayerId(e.target.value))
            setId(await getPlayerId(e.target.value))
        }
        
        
    }
    

    
    console.log("user query: ", id)
    
    return ( 
        <div >
            <h1>Stat Search</h1>
            <div className={styles.containerSearch}>
                <div className={styles.seachbox}>
                    <input placeholder='Search' type="text" onKeyUp={updatePlayer} />
                    <Link href={'/projects/NBA_Dynamic/' + id}><button>Search</button></Link>
                </div>
                
            </div>
            
                
        </div>
     );
}
 
async function getPlayerId(name) {
    if(name != undefined){
        const info = (await fetch('https://www.balldontlie.io/api/v1/players?search='+ name))
        const readable = await info.json()
        return readable.data[0].id
        
    }
    
}


export default nba;