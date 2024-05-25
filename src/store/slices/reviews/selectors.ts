import { NameSpace, Status } from '../../../consts/const.ts';
import { Review } from '../../../types/review/review.ts';

import { State } from '../../../types/state/state.ts';

export const getReviews = (state: State): Review[] =>
  state[NameSpace.ReviewsData].reviews;

export const getIsReviewsLoading = (state: State): boolean =>
  state[NameSpace.ReviewsData].isReviewsLoading;

export const getIsReviewsStatusSubmitting = (state: State): boolean =>
  state[NameSpace.ReviewsData].isReviewsStatusSubmitting;

export const getReviewsHasError = (state: State): Status =>
  state[NameSpace.ReviewsData].reviewsStatus;

export const getHasError = (state: State): boolean =>
  state[NameSpace.ReviewsData].hasError;
