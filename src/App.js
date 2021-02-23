import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profilepage from "./components/Profile/Profilepage";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import React from 'react';

const  App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div class='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}/> }/>
                    <Route path='/profile' render={ () => <Profilepage state={props.state.profilePage}/> }/>
                    <Route path='/news' render={ () => <News /> }/>
                    <Route path='/music' render={ () => <Music /> }/>
                    <Route path='/settings' render={ () => <Settings /> }/>
                </div>/>
            </div>
        </BrowserRouter>
    );
}

export default App;