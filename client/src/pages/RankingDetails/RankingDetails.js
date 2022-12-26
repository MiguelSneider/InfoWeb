import { useState } from 'react'
import {Link, useParams } from 'react-router-dom'

import './RankingDetails.css'

const RankingDetails = () => {

    const {ranking_id} = useParams()
    const [ranking, setRanking] = useState({})

    const loadRankingDetails = () => {

        fetch(`http://localhost:5005/api/details/${ranking_id}`)
            .then(response => response.json())
            .then(ranking => setRanking(ranking)) // al llegar las montañasRusas se guardan usando el método SetCoaster
    }

    loadRankingDetails()

    return (
        <main>
            <div class="titleTwo">            
                <h1>Programming languages details {ranking.name}</h1> 
            </div>

            <hr />

            <article class='head'>
                <p>{ranking.description}</p>
                 <h3>Dates:</h3>
                    <ul>
                        <li>year of creation: {ranking.yearOfCreation}</li>
                        <li>paradigm used: {ranking.paradigmUsed}</li>
                    </ul>
            </article>            

            <div class="bottonTwo">
                <Link to="/gallery">--- Back gallery ---</Link>
            </div>
        </main>
    )
}

export default RankingDetails