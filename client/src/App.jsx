import './App.css';
import IndexPage from './pages/indexPage/indexPage';
import RankingPage from './pages/RankingPage/RankingPage';
import RankingDetails from './pages/RankingDetails/RankingDetails';

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="container">

    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/gallery" element={<RankingPage />} />
      <Route path="/details/:ranking_id" element={<RankingDetails />} />
    </Routes>
    
    </div>
  )
}

export default App;
