import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { players } from './players';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card id={players[0].id} name={players[0].name} number={players[0].number} position={players[0].position} photo={players[0].photo}/>
    <Card id={players[1].id} name={players[1].name} number={players[1].number} position={players[1].position} photo={players[1].photo}/>
    <Card id={players[2].id} name={players[2].name} number={players[2].number} position={players[2].position} photo={players[2].photo}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
