import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExtendedOffer } from '../../../types/offer/offer.ts';
import { APIRoute, Routes, NameSpace } from '../../../consts/const.ts';

import { AsyncThunkConfig } from '../../../types/state/state.ts';
import { redirectToRoute } from '../../action/action.ts';

export const fetchOfferAction = createAsyncThunk<
  ExtendedOffer | null,
  string,
  AsyncThunkConfig
>(
  `${NameSpace.SingleOfferData}/fetchOffer`,
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<ExtendedOffer>(`${APIRoute.Offers}/${id}`);
      return data;
    } catch (e) {
      dispatch(redirectToRoute(Routes.NotFound));
      return null;
    }
  }
);
