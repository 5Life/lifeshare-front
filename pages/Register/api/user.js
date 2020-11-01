import { http } from '../../../utils';

const registerUser = async ({
  name,
  email,
  bloodGroup,
  password
}) => {
  const data = await http.post('/api/user', {
    name,
    email,
    bloodGroup,
    password
  });

  return data;
};

export default {
  registerUser,
};
