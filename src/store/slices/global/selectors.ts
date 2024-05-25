import { CityName, NameSpace, SortingType } from '../../../consts/const.ts';
import { State } from '../../../types/state/state.ts';

export const getSelectedSortType = (state: State): SortingType =>
  state[NameSpace.App].selectedSortType;

export const getSelectedCity = (state: State): CityName =>
  state[NameSpace.App].selectedCity;
