import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import Video from './Video';
import History from './History';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/signin' element={<SignIn/>}/>
        <Route exact path='/video/:id' element={<Video/>}/>
        <Route exact path='/history' element={<History/>}/>
      </Routes>
    </div>
  );
}

export default App;
