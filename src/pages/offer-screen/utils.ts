import { Offer } from '../../types/offer/offer.ts';

export const getShuffledNearby = (nearby: readonly Offer[]): Offer[] =>
  [...nearby].sort(() => Math.random() - 0.5);
