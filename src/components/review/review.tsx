import { Review } from '../../types/review';
import { formatRatingToStars } from '../../utils/utils';

type ReviewProps = {
  review: Review;
};

function OneReview({review}: ReviewProps): JSX.Element {
  const {id, date, user, rating, comment} = review;
  return (
    <li className="reviews__item" key={id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatar} width="54" height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name"> {user.name} </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: formatRatingToStars(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{date}</time>
      </div>
    </li>
  );
}

export default OneReview;