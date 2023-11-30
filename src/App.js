import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import Video from './Video';
import History from './History';
import You from './You';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/signin' element={<SignIn/>}/>
        <Route exact path='/video/:id' element={<Video/>}/>
        <Route exact path='/history' element={<History/>}/>
        <Route exact path='/you' element={<You/>}/>
        <Route exact path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
