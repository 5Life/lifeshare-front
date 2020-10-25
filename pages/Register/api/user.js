import { http } from '../../../utils';

const registerUser = async ({
  name,
  email,
  bloodType,
  password,
  confirmPassword,
}) => {
  const data = await http.post('/user', {
    name,
    email,
    bloodType,
    password,
    confirmPassword,
  });

  return data;
};

export default {
  registerUser,
};
