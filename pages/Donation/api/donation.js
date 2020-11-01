import { http } from '../../../utils';

const addDonation = async ({ type, location, date, organ }) => {
  const response = await http.post('/api/user/donation', {
    type,
    location,
    date,
    organ,
  });
  return response;
};

const editDonation = async ({ type, location, date, organ }) => {
  const response = await http.put('/api/user/donation', {
    type,
    location,
    date,
    organ,
  });
  return response;
};

const deleteDonation = async ({ type, location, date, organ }) => {
  const response = await http.delete('/api/user/donation', {
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
