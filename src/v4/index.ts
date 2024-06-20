import { useSuspenseQuery } from './useSuspenseQuery';
import { useSuspenseQueries } from './useSuspenseQueries';
import { useSuspenseInfiniteQuery } from './useSuspenseInfiniteQuery';

const isReactQuery4 = true;
const isReactQuery5 = false;

export * from '@tanstack/react-query';
export {
  isReactQuery4,
  isReactQuery5,
  useSuspenseQuery,
  useSuspenseQueries,
  useSuspenseInfiniteQuery,
};
