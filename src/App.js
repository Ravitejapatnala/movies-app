import React, {useState} from "react";
import MoviesList from "./Components/MoviesList";
import MovieDetails from "./Components/MovieDetails";


const App=()=>{

  const [selectedMovie, setSelectedMovie]= useState({});

  return(
    <div>
      <MoviesList setSelectedMovie={setSelectedMovie}/>
      <MovieDetails selectedMovie={selectedMovie}/>
    </div>
  )
  
}

export default App;




// const[movie, setMovie]= useState({});

//   function displaymovie(film){
//     setMovie(film);
//   } 

  // return(

  //   <div>
  //     <div className="movies-list">
  //       {
  //         moviesData.map((item)=>(
  //           <h1 onClick={()=>displaymovie(item)}>{item.title}</h1>
  //         ))
  //       }
  //     </div>

  //     <div className="movie-display" style={{border: "1px solid red", padding: "5px", backgroundColor:"black", color:"white"}}>
  //       {
  //         movie && (
  //           <div>
  //             <h1>{movie.title}</h1>
  //             <p>{movie.actor}</p>
  //             <p>{movie.genre}</p>
  //             <p>{movie.director}</p>
  //           </div>
  //         )
  //       }
  //     </div>
  //   </div>