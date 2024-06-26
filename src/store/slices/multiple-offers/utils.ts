import { Offer } from '../../../types/offer/offer.ts';

export const updateOffers = (offers: Offer[], updatedOffer: Offer) => {
  const offerIndex = offers.findIndex((el) => el.id === updatedOffer.id);
  if (offerIndex !== -1) {
    offers[offerIndex] = updatedOffer;
  }
};
