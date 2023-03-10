import React from "react";
import { Link } from "react-router-dom";

const MovieList = (props) => {


        const truncateOverview = (string,maxLength) => {
            if(!string) return null
            if(string.length <= maxLength) return string
            return `${string.substring(0,maxLength)}...`
        }

        return (
            <div className="row">

                {props.movie.map((movie,i) => (
                    <div className="col-lg-4" key={i}>
                        <div className="card mb-4 shadow-sm">
                            <img src={movie.imageURL} className="card-img-top" alt="SampleMovie" />
                            <div className="card-body">
                                <h5 className="card-title">{movie.name}</h5>
                                <p className="card-text">{truncateOverview(movie.overview,135)}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <button type="button" onClick={event => props.deleteMovieProp(movie)} className="btn btn-md btn-danger">Delete</button>

                                        <Link
                                        type="button"
                                        className="btn btn-md btn-warning ms-2"
                                        to={`edit/${movie.id}`}
                                        >Edit</Link>
                                    </div>

                                    <h2><span className="badge text-bg-info">{movie.rating}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        )
}



export default MovieList