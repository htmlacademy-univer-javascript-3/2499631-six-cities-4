import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../../../types/offer/offer.ts';
import { FavouriteData } from '../../../types/favourite_data/favourite-data.ts';

import { APIRoute, NameSpace } from '../../../consts/const.ts';

import { AsyncThunkConfig } from '../../../types/state/state.ts';
import { updateMultipleOffers } from '../multiple-offers/multiple-offers-data';
import { updateSingleOffer } from '../offer/single-offer-data';
import { updateMultipleFavourites } from './favourites-data';
import { updateMultipleNearby } from '../nearby-offers';

export const fetchFavouritesAction = createAsyncThunk<
  Offer[],
  undefined,
  AsyncThunkConfig
>(
  `${NameSpace.FavouritesData}/fetchFavorites`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Favorite);
    return data;
  }
);

export const changeFavouriteStatusAction = createAsyncThunk<
  Offer,
  FavouriteData,
  AsyncThunkConfig
>(
  `${NameSpace.FavouritesData}/changeFavoriteStatus`,
  async ({ status, offerId }, { rejectWithValue, extra: api, dispatch }) => {
    try {
      const { data } = await api.post<Offer>(
        `${APIRoute.Favorite}/${offerId}/${status}`
      );

      dispatch(updateMultipleOffers(data));
      dispatch(updateSingleOffer(data));
      dispatch(updateMultipleFavourites(data));
      dispatch(updateMultipleNearby(data));

      return data;
    } catch (e) {
      return rejectWithValue(e as Error);
    }
  }
);
