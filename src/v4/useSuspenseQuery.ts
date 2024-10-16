import {
  type QueryKey,
  type UseQueryOptions,
  type UseQueryResult,
  useQuery,
} from '@tanstack/react-query';
import type { OmitKeyof } from './utility-types';

export interface UseSuspenseQueryOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> extends OmitKeyof<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'suspense' | 'useErrorBoundary' | 'enabled' | 'placeholderData'
  > {}

export interface UseSuspenseQueryResult<TData = unknown, TError = unknown>
  extends OmitKeyof<
    UseQueryResult<TData, TError>,
    keyof Pick<UseQueryResult, 'isPlaceholderData'>
  > {
  data: TData;
  status: 'success';
}

export function useSuspenseQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(options: UseSuspenseQueryOptions<TQueryFnData, TError, TData, TQueryKey>) {
  return useQuery<TQueryFnData, TError, TData, TQueryKey>({
    ...options,
    enabled: true,
    useErrorBoundary: true,
    suspense: true,
  }) as UseSuspenseQueryResult<TData, TError>;
}
