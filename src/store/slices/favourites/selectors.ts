import { NameSpace } from '../../../consts/const.ts';
import { Offer } from '../../../types/offer/offer.ts';
import { State } from '../../../types/state/state.ts';

export const getFavorites = (state: State): Offer[] =>
  state[NameSpace.FavouritesData].favourites;

export const getFavouritesCount = (state: State): number =>
  state[NameSpace.FavouritesData].favourites.length;

export const getIsFavoritesLoading = (state: State): boolean =>
  state[NameSpace.FavouritesData].isFavouritesLoading;

export const getIsFavoriteStatusSubmitting = (state: State): boolean =>
  state[NameSpace.FavouritesData].isFavouriteStatusSubmitting;
