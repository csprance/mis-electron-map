import { AnyAction, Dispatch as ReduxDispatch, Store } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { StateType } from 'typesafe-actions';

import { rootReducer } from './index';
import { MisMapActions } from './mismap';

export interface RootState extends StateType<typeof rootReducer> {}

export type RootAction =
  | MisMapActions;

export type AsyncThunkResult<R> = ThunkAction<
  Promise<R>,
  RootState,
  {},
  AnyAction
>;
export type ThunkResult<R> = ThunkAction<R, RootState, undefined, AnyAction>;

export type Dispatch = ThunkDispatch<RootState, any, RootAction> &
  ReduxDispatch<RootAction>;

// Dispatch is not Thunk-Compatible here
export type AppStore = Store<RootState, RootAction>;
