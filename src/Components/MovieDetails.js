import React from "react";

const MovieDetails=({selectedMovie})=>{
    return(
        <div>
            <h1>{selectedMovie.title}</h1>
            <p>{selectedMovie.actor}</p>
            <p>{selectedMovie.genre}</p>
            <p>{selectedMovie.director}</p>
        </div>
    )
}

export default MovieDetails;