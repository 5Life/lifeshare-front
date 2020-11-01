import { http } from '../../../utils';

const addDonation = async ({ type, location, date, organ }) => {
  const response = await http.post('/donation', {
    type,
    location,
    date,
    organ,
  });
  return response;
};

const editDonation = async ({ key, type, location, date, organ }) => {
  const response = await http.put('/donation', {
    key,
    type,
    location,
    date,
    organ,
  });
  return response;
};

const deleteDonation = async ({ key, type, location, date, organ }) => {
  const response = await http.delete('/donation', {
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
