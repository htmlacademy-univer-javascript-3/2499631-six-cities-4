import { Offer } from '../../../types/offer/offer.ts';
import { NameSpace } from '../../../consts/const.ts';

import { State } from '../../../types/state/state.ts';

export const getNearbyOffers = (state: State): Offer[] =>
  state[NameSpace.NearbyOffersData].nearby;

export const getIsNearbyOffersLoading = (state: State): boolean =>
  state[NameSpace.NearbyOffersData].isNearbyOffersLoading;
