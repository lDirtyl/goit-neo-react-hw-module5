import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../api/api";
import css from "./MovieReviews.module.css";

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response.data.results);
      } catch (error) {
        console.error("Error fetching movie reviews:", error);
      }
    };

    getReviews();
  }, [movieId]);

  return (
    <div className={css.reviewsContainer}>
      <h2>Reviews</h2>
      {reviews.length === 0 ? (
        <p>We don&apos;t have any reviews for this movie.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>
                <strong>Author: {review.author}</strong>
              </p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieReviews;