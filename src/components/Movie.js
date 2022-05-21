import React from "react";
import { Link } from "react-router-dom";

const IMG_API = "https://image.tmdb.org/t/p/w1280"

const setVoteClass = (vote) => { 
    if(vote >= 8){ 
        return 'green'
    } else if (vote >= 6) {
        return 'orange'
    } else { 
        return 'red'
    }
}

const Movie = ({title , poster_path , overview , vote_average , id , release_date , vote_count}) => (
    
    <div className="movie">
       <Link to={`/detail/${id}`}><img src={poster_path ? (IMG_API +poster_path) : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80"} alt={title} /></Link>
        <div className="movie-info">
            <h3>{title}</h3>
            <span className=
                {`tag ${setVoteClass(vote_average)}`}>
                    {vote_average}
            </span>
        </div>
            <span className="release-date">
                Released Date : {release_date}
            </span>
            <span className="voted-num">
                Votes Num : {vote_count} Person
            </span>
        <div className="movie-over">
            <h2>Overview : </h2>
            <p>{overview}</p>
        </div>
    </div>
);


export default Movie