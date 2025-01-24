import './App.css'
import {Home} from './main/components/smarts/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/home'} element ={<Home/>}/>
          <Route path={'/shop'} element ={<p>shop</p>}/>
          <Route path={'/about'} element ={<p>about</p>}/>
          <Route path={'/contact'} element ={<p>contact</p>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
