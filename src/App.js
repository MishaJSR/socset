import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App (props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />

        <div className='app-wrapper-content'>
          <Routes>
            <Route path="frofile/*" element={<Profile state = {props.state} dispatch={props.dispatch} addPostAction={props.addPostAction} onPostChangeAction={props.onPostChangeAction} getNewPostText={props.getNewPostText }/>} />
            <Route path="dialogs/*" element={<Dialogs state = {props.state} dispatch={props.dispatch} updateNewMessage={props.updateNewMessage} sendMessage={props.sendMessage}/>} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
