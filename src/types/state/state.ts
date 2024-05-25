import { AxiosInstance } from 'axios';
import { store } from '../../store/store_configuration/store.ts';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AsyncThunkConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};
