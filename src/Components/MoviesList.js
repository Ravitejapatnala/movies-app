import React, {useState} from "react";
import moviesData from "../Data/moviesData";

const MoviesList=({setSelectedMovie})=>{

    return(
        <div>
            {
                moviesData.map((item)=>(
                    <p key={item.title} onClick={()=>setSelectedMovie(item)}>{item.title}</p>
                ))
            }
        </div>
    )
}

export default MoviesList;