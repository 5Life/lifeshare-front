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

const editDonation = async ({ type, location, date, organ }) => {
  const response = await http.put('/donation', {
    type,
    location,
    date,
    organ,
  });
  return response;
};

const deleteDonation = async ({ type, location, date, organ }) => {
  const response = await http.delete('/donation', {
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
