import { useParams } from 'next/navigation';

export const useSearchParamsHelper = (params: string | string[]) => {
  const searchParams = useParams();

  if (Array.isArray(params)) {
    const results: Record<string, string | undefined> = {};

    params.forEach((param) => {
      if (searchParams && param in searchParams) {
        if (typeof searchParams[param] === 'string') {
          results[param] = searchParams[param] as string;
        } else if (Array.isArray(searchParams[param])) {
          results[param] = (searchParams[param] as string[]).join(',');
        }
      }
    });

    return results;
  } else {
    const param = params as string;
    let result: string = '';

    if (searchParams && param in searchParams) {
      if (typeof searchParams[param] === 'string') {
        result = searchParams[param] as string;
      } else if (Array.isArray(searchParams[param])) {
        result = (searchParams[param] as string[]).join(',');
      }
    }

    return result;
  }
};
