import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className="pa2">

            <input
                className="pa3 ba b--red bg-yellow"
                type="search" 
                placeholder="search for player"
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;