import { Component } from './interfaces';
import { Counter } from './components/counter';
import { Speaker } from './components/speaker';

export interface RouteValue {
  component: Component;
  scope: string;
}
export interface Routes {
  readonly [index: string]: RouteValue;
}

export const routes: Routes = {
  '/': { component: Counter, scope: 'counter' }
};

export const initialRoute = '/';
