const Movie = (props) => {
    return (
      <div className="movie">
        <div>
          <p>{props.Year}</p>
        </div>
        <div>
          {props.Poster !== 'NA' ?
            <><img src={props.Poster} alt={props.Title} /></> : <><img alt={props.Title} /></>}
        </div>
      </div>
    )
  }

export default Movie