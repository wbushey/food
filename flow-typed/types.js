// @flow

export type Recipe = {
  id: string,
  title: string,
  isGlutenFree: boolean,
  type?: 'string',
  time?: string,
  servings?: string,
  ingredients?: {[key: string]: string},
  directions?: string,
};
