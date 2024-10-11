const isReactQuery4 = true;
const isReactQuery5 = false;

export { useSuspenseQuery } from './useSuspenseQuery';
export type {
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from './useSuspenseQuery';

export { useSuspenseQueries } from './useSuspenseQueries';
export type {
  SuspenseQueriesOptions,
  SuspenseQueriesResults,
} from './useSuspenseQueries';

export { useSuspenseInfiniteQuery } from './useSuspenseInfiniteQuery';
export type {
  UseSuspenseInfiniteQueryOptions,
  UseSuspenseInfiniteQueryResult,
} from './useSuspenseInfiniteQuery';

export * from '@tanstack/react-query';

export { isReactQuery4, isReactQuery5 };
