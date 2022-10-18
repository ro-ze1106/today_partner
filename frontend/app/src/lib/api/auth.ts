import Cookies from 'js-cookie';
import client from './client';

import { SignInParams, SignUpParams } from '../../type/Login_attestation';

export const signUp = (params: SignUpParams) => client.post('auth', params);

export const signIn = (params: SignInParams) =>
  client.post('auth/sign_in', params);

export const signOut = () =>
  client.delete('auth/sign_out', {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
    },
  });

export const getCurrentUser = () => {
  if (
    !Cookies.get('_access_token') ||
    !Cookies.get('_client') ||
    !Cookies.get('_uid')
  )
    return true;

  return client.get('/auth/sessions', {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
    },
  });
};
