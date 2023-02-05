import './styles/main.sass';
import Home from './Pages/Home'
import About from './Pages/About'
import Teams from './Pages/Teams'
import Genesis from './Pages/Genesis'
import Chaos from './Pages/Chaos'
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

import DataContextProvider from './context/DataContext';

function App() {
    return (
        <DataContextProvider>
                <Router>
                <Navbar/>
                    <Routes>
                        <Route exact path='/alien-academy/' element={<Home/>}/>
                        <Route path='/alien-academy/teams' element={<Teams/>}/>
                        <Route path='/alien-academy/about' element={<About/>}/>
                        <Route path='/alien-academy/genesis' element={<Genesis/>}/>
                        <Route path='/alien-academy/chaos' element={<Chaos/>}/>
                    </Routes>
                </Router>
        </DataContextProvider>
    );
}

export default App;
