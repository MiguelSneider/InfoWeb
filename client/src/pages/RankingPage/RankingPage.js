/* eslint-plugin-disable */
/* eslint-plugin-disable-all jsx-a11y */

import { Link } from 'react-router-dom'
import { useState } from 'react'

import './RankingPage.css'

const RankingPage = () => {

    const [ranking, setRanking] = useState([])

    const loadRanking = () => {
        fetch('http://localhost:5005/api/ranking')
        .then(res => res.json())
        .then(allRanking => setRanking(allRanking))
        //.then(allRanking => console.log(allRanking))
        
    }
    
    loadRanking()

    return (
        <main>            
            <div class="titleOne">
                <h1>Programming languages list</h1>
            </div> 

            <hr />

            {ranking.map(eachRanking => {
                return (
                    <Link to={`/details/${eachRanking._id}`}>
                    <article className='languageCard'>
                        <h1>{eachRanking.name}</h1>
                        <img src={eachRanking.imageUrl}></img>                       
                    </article>
                    </Link>
                )
            })}    
            <div class="bottonOne">
                <Link to="/">--- Back menu ---</Link>
            </div>
        </main>
    )}

export default RankingPage