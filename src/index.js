import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: '1', message: 'Hello', count: '12'},
    {id: '2', message: 'How are you', likesCount: '11'},
    {id: '3', message: 'Life is great', likesCount: '0'},
    {id: '4', message: 'Sun shine', likesCount: '5'},
    {id: '5', message: 'Yo', likesCount: '12'},
    {id: '6', message: 'Wats up', likesCount: '12'},
    {id: '7', message: 'Kiks', likesCount: '12'},
]

let dialogsData = [
    {id: '1', name: 'Vitalik'},
    {id: '2', name: 'Yana'},
    {id: '3', name: 'Anya'},
    {id: '4', name: 'Kolya'},
    {id: '5', name: 'Nastya'},
    {id: '6', name: 'Marina'},
    {id: '7', name: 'VitalikR'},
]

let messagesData = [
    {id: '1', message: 'Hello'},
    {id: '2', message: 'How are you'},
    {id: '3', message: 'Life is great'},
    {id: '4', message: 'Sun shine'},
    {id: '5', message: 'Я хочу выпить'},
    {id: '6', message: 'Куда пойдем?'},
    {id: '7', message: 'Кикс'},
]

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} name={dialogsData} message={messagesData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
