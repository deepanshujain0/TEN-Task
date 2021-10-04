import react from "react";
import React, {useEffect ,useState} from 'react';
import EmojiData from './emoji.json';

const SearchBar = () => {
    const [search,setSearch] = useState("");
    const [data,setData] = useState([]);
    useEffect(()=>{
        const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()));
        setData(newData);
    },[search])
    return (
        <div>
          <center>
            <h1 className="text"> Emoji Search</h1>
            
            <input className="searchbox" size="30" type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            
            </center>
            {data.map(emoji =>
              <div className="card" key={emoji.title}>
              <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.symbol);alert("Emoji Copy")}}>
                {emoji.symbol} {emoji.title}
              </div>
            </div>
            )}
          
        </div>
      )
};
export default SearchBar;