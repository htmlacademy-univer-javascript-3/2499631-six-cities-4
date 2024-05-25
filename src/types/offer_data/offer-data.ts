import { Review } from '../review/review.ts';
import { ExtendedOffer, Offer } from '../offer/offer.ts';

export type OfferData = {
  offerInfo: ExtendedOffer;
  nearestOffers: Offer[];
  reviews: Review[];
};
