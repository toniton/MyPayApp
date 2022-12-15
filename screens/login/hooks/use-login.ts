import {useUser} from '../../../shared/hooks/use-user';

export const useLogin = () => {
  const setUsername = useUser(state => state.setUsername);
  const signIn = (username: string) => {
    setUsername(username);
  };
  return {signIn};
};
