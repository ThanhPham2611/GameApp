import {useQuery} from '@tanstack/react-query';
import {getListExample} from '../api/example/example';

export function useGetListExample(params: any) {
  const res: any = useQuery(
    ['list_example', params],
    () => getListExample(params),
    {
      refetchOnWindowFocus: false,
      enabled: true,
    },
  );
  return res;
}

export function useDeleteExample(fun: Function) {}

export function useCreateExample(fun: Function) {}

export function useGetDetailExample(params: any) {}

export function useUpdateExample(id: any, fun: Function) {}
