import { http } from '../../../utils';

const authenticateUser = async ({ email, password }) => {
  const response = await http.post('/auth', {
    email,
    password,
  });

  return response;
};

export default {
  authenticateUser,
};
