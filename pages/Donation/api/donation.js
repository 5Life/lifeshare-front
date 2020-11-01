import { http } from '../../../utils';

const addDonation = async ({ key, type, location, date, organ }) => {
  const response = await http.post('/api/user/donation', {
    key,
    type,
    location,
    date,
    organ,
  });
  return response;
};

const editDonation = async ({ key, type, location, date, organ }) => {
  const response = await http.put('/api/user/donation', {
    key,
    type,
    location,
    date,
    organ,
  });
  return response;
};

const deleteDonation = async ({ key, type, location, date, organ }) => {
  const response = await http.delete('/api/user/donation', {
    key,
    type,
    location,
    date,
    organ,
  });
  return response;
};

export default {
  addDonation,
  editDonation,
  deleteDonation,
};
