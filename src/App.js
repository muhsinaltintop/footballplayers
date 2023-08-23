import React, {useState} from "react";
import CardList from "./CardList";
import { players } from "./players";
import SearchBox from "./SearchBox";
import './App.css';

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    
    const onSearchChange = (e) => {
        setSearchTerm(e.target.value)
        
    }
    const filteredPlayer = players.filter(players => {
        return players.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    
    return (
        <div className="tc">
            <div className="logo-title">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Galatasaray_4_Sterne_Logo.svg/1200px-Galatasaray_4_Sterne_Logo.svg.png" alt=""  className="logo"/>
            <h1>GALATASARAY</h1>
            </div>
            <SearchBox searchChange={onSearchChange} />
        {/* <SearchBox onChange={onSearchChange} /> */}
        <CardList players={filteredPlayer}/>
        </div>
    )
}
export default App;