import { AuthorizationStatus, NameSpace } from '../../../consts/const.ts';
import { UserData } from '../../../types/user_data/user-data.ts';

import { State } from '../../../types/state/state.ts';

export const getAuthCheckedStatus = (state: State): boolean =>
  state[NameSpace.User].authorizationStatus === AuthorizationStatus.Auth;

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;

export const getUserInfo = (state: State): UserData | null =>
  state[NameSpace.User].userInfo;

export const getIsSubmittingLogin = (state: State): boolean =>
  state[NameSpace.User].isSubmittingLogin;
