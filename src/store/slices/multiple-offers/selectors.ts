import { Offer } from '../../../types/offer/offer.ts';
import { NameSpace } from '../../../consts/const.ts';

import { State } from '../../../types/state/state.ts';

export const getOffers = (state: State): Offer[] =>
  state[NameSpace.MultipleOffersData].offers;

export const getIsOffersLoading = (state: State): boolean =>
  state[NameSpace.MultipleOffersData].isOffersLoading;
