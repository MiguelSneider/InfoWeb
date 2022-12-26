import { Link } from 'react-router-dom'

import './indexPage.css'

const IndexPage = () => {
    return (
        <main>
            { 
            <section class="header">
                <div class="title">                   
                    <h1>Welcome to the MERN UNAB!</h1>          
                    <h3>Programming languages ranking</h3>
                </div>            
            </section> 
            }      

            <div class="botton">
                    <Link to="/gallery">--- View gallery ---</Link>
            </div>        
        </main>
    )
}

export default IndexPage