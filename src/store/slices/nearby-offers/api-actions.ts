import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../../../types/offer/offer.ts';
import { APIRoute, NameSpace } from '../../../consts/const.ts';

import { AsyncThunkConfig } from '../../../types/state/state.ts';

export const fetchNearbyAction = createAsyncThunk<
  Offer[],
  string,
  AsyncThunkConfig
>(`${NameSpace.NearbyOffersData}/fetchNearby`, async (id, { extra: api }) => {
  const { data } = await api.get<Offer[]>(
    `${APIRoute.Offers}/${id}${APIRoute.Nearby}`
  );
  return data;
});
