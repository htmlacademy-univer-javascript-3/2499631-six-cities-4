import { createAsyncThunk } from '@reduxjs/toolkit';
import { Review, ReviewData } from '../../../types/review/review.ts';
import { APIRoute, NameSpace } from '../../../consts/const.ts';

import { AsyncThunkConfig } from '../../../types/state/state.ts';

export const fetchReviewsAction = createAsyncThunk<
  Review[],
  string,
  AsyncThunkConfig
>(`${NameSpace.ReviewsData}/fetchReviews`, async (id, { extra: api }) => {
  const { data } = await api.get<Review[]>(`${APIRoute.Review}/${id}`);
  return data;
});

export const postReviewAction = createAsyncThunk<
  Review,
  ReviewData,
  AsyncThunkConfig
>(
  `${NameSpace.ReviewsData}/postReview`,
  async ({ comment, rating, offerId }, { extra: api }) => {
    const { data } = await api.post<Review>(`${APIRoute.Review}/${offerId}`, {
      comment,
      rating,
    });
    return data;
  }
);
