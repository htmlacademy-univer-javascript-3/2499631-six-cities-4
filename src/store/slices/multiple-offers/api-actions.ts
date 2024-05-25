import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../../../types/offer/offer.ts';
import { APIRoute, NameSpace } from '../../../consts/const.ts';

import { AsyncThunkConfig } from '../../../types/state/state.ts';

export const fetchOffersAction = createAsyncThunk<
  Offer[],
  undefined,
  AsyncThunkConfig
>(
  `${NameSpace.MultipleOffersData}/fetchOffers`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    return data;
  }
);
