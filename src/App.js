import './App.css';
import Nav from "./components/Nav/Nav";
/*import News from "./components/News/News";*/
/*import Music from "./components/Music/Music";*/
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import React from 'react';
/*import DialogsContainer from "./components/Dialogs/DialogsContainer";*/
import UsersContainer from "./components/Users/UsersContainer";
import ProfilepageContainer from "./components/Profile/ProfilepageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/redux-store";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={() => {
                            return <React.Suspense fallback={<div><Preloader/></div>}>
                                <DialogsContainer/>
                            </React.Suspense>
                        }}/>

                        <Route path='/profile/:userId?' render={() => <ProfilepageContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => {
                            return <React.Suspense fallback={<div><Preloader/></div>}>
                                <News/>
                            </React.Suspense>
                            }}/>
                        <Route path='/music' render={() => {
                            return <React.Suspense fallback={<div><Preloader/></div>}>
                                <Music/>
                            </React.Suspense>
                            }}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, {initializeApp})(App);

const MaineApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default MaineApp