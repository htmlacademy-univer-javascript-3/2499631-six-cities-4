import { ExtendedOffer } from '../../../types/offer/offer.ts';
import { NameSpace } from '../../../consts/const.ts';

import { State } from '../../../types/state/state.ts';

export const getOffer = (state: State): ExtendedOffer | null =>
  state[NameSpace.SingleOfferData].offer;

export const getIsOfferLoading = (state: State): boolean =>
  state[NameSpace.SingleOfferData].isOfferLoading;
