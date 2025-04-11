import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Mainpage2 from './Components/Mainpage'
import Mainpage from './Pcomponents/Mainpage'
import Details from './Components/Details'
import Searchpg from './Components/Searchpg'
import Mainpgw from './Wcomponents/Mainpagew'
import './App2.css';
import './App3.css';
import './App4.css';
import Gamepage from './Pcomponents/Gamespg'
import Certificatepg from './Pcomponents/Certificatepg'
import Rmainpg from './Rcomponents/Rmainpg'
import Rsearchpg from './Rcomponents/Searchpg'
import Foodpg from './Rcomponents/Foodpg'
import Category from './Rcomponents/Categorypg'
import Area from './Rcomponents/Area'
import Gmain from './Games/Gmainpg'
import './app5.css';
import Gsearchpg from './Games/Gsearchpg'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route path="/certificate" element={<Certificatepg/>}/>
        <Route path="/apps&games" element={<Gamepage/>}/>
        <Route path='/m' element={<Mainpage2/>}/>
        <Route path='/movie/:title' element={<Details/>}/>
        <Route path='/search/:srch' element={<Searchpg/>}/>
        <Route path='/w' element={<Mainpgw />}/>
        <Route path='/r' element={<Rmainpg/>}/>
        <Route path='/receipisearch/:rsrch' element={<Rsearchpg/>}/>
        <Route path='/foodpg/:foodid' element={<Foodpg/>}/>
        <Route path='/rcategory/:cateid' element={<Category/>}/>
        <Route path='/rarea/:areaid' element={<Area/>}/>
        <Route path='/g' element={<Gmain/>}/>
        <Route path='/gsearchpg/:title' element={<Gsearchpg/>}/>



      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App
