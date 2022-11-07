import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreatePlayer from './pages/CreatePlayer'
import EditPlayer from './pages/EditPlayer'
import FindPlayer from './pages/FindPlayer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<CreatePlayer type='create'/>}/>
          <Route path='/edit' element={<EditPlayer type='edit'/>}/>
          <Route path='/find' element={<FindPlayer type='find'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
