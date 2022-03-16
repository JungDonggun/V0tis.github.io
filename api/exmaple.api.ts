import fetch from 'isomorphic-unfetch';
import { SERVER } from '../common/urls';

export interface ExmapleApiResponseBody {
}

export const testExample = async () => {
  const request = await fetch(`${SERVER}`);
  const response = await request.json();

  return {
    response
  };
};
