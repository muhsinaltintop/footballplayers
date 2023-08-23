import React, {useState} from "react";
import CardList from "./CardList";
import { players } from "./players";
import SearchBox from "./SearchBox";

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
            <h1>GALATASARAY</h1>
            <SearchBox searchChange={onSearchChange} />
        {/* <SearchBox onChange={onSearchChange} /> */}
        <CardList players={filteredPlayer}/>
        </div>
    )
}
export default App;