import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profilepage from "./components/Profile/Profilepage";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";


const  App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                {/*<Profilepage />*/}
                <div class='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <Dialogs name={props.name} message={props.message}/> }/>
                    <Route path='/profile' render={ () => <Profilepage posts={props.posts}/> }/>
                    <Route path='/news' render={ () => <News /> }/>
                    <Route path='/music' render={ () => <Music /> }/>
                    <Route path='/settings' render={ () => <Settings /> }/>
                </div>/>
            </div>
        </BrowserRouter>
    );
}

export default App;
