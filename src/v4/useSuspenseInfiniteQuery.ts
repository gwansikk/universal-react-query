import {
  type InfiniteData,
  type QueryKey,
  type UseInfiniteQueryOptions,
  type UseInfiniteQueryResult,
  useInfiniteQuery,
} from '@tanstack/react-query';
import type { OmitKeyof } from './utility-types';

export interface UseSuspenseInfiniteQueryOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> extends OmitKeyof<
    UseInfiniteQueryOptions<
      TQueryFnData,
      TError,
      TData,
      TQueryFnData,
      TQueryKey
    >,
    'suspense' | 'useErrorBoundary' | 'enabled' | 'placeholderData'
  > {}

export interface UseSuspenseInfiniteQueryResult<
  TData = unknown,
  TError = unknown,
> extends OmitKeyof<
    UseInfiniteQueryResult<TData, TError>,
    keyof Pick<UseInfiniteQueryResult<TData, TError>, 'isPlaceholderData'>
  > {
  data: InfiniteData<TData>;
  status: 'success';
}

export function useSuspenseInfiniteQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: UseSuspenseInfiniteQueryOptions<
    TQueryFnData,
    TError,
    TData,
    TQueryKey
  >,
): UseSuspenseInfiniteQueryResult<TData, TError> {
  return useInfiniteQuery({
    ...options,
    enabled: true,
    suspense: true,
    useErrorBoundary: true,
  }) as UseSuspenseInfiniteQueryResult<TData, TError>;
}
