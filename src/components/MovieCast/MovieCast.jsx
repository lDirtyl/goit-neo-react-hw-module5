import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../api/api";
import css from "./MovieCast.module.css";

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const response = await fetchMovieCast(movieId);
        setCast(response.data.cast);
      } catch (error) {
        console.error("Error fetching movie cast:", error);
      }
    };

    getCast();
  }, [movieId]);

  return (
    <div className={css.castContainer}>
      <h2>Cast</h2>
      <ul className={css.castList}>
        {cast.map((member) => (
          <li key={member.cast_id} className={css.castItem}>
            <img
              src={
                member.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${member.profile_path}`
                  : "https://via.placeholder.com/200x300?text=No+Image"
              }
              alt={member.name}
              className={css.castImage}
            />
            <p>
              {member.name} as {member.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCast;