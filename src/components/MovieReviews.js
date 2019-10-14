// Code MovieReviews Here
const MovieReviews = ({reviews}) => {
  return (
    <ul className="review-list">
      {reviews.map((review, index) =>
      <li className="review" key={index}>
      {review.display_title}</li>
    )}
      </ul>)
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReview
