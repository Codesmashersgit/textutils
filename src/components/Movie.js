function Movie (props){
    return(
       
        <div className="movie">
          <img src={props.img}/>
       
        
          <div className="title">
          <p>{props.title}</p>
          </div>
          <div className="year">
          <p>Year:{props.year}</p>
          </div>
          <p>{props.actors[0]},{props.actors[1]},{props.actors[2]}</p>
          <p>Genres:{props.genres[0]},
          {props.genres[1]},
          {props.genres[2]}
          </p>
          <p>Rating:{props.rating}</p>
          </div>
          
      
    )
}

export default Movie;
