import { http } from '../../../utils';

const getDonations = async () => {
  // TODO: Uncomment when server is up and running
  // const data = await http.get('/donation');
  // return data;

  return Promise.resolve({
    data: [
      {
        type: 'blood',
        location: 'Hospital Santa Maggiore',
        date: '2020-07-10',
        key: 'SP-01',
        organ: '',
      },
      {
        type: 'organ',
        location: 'Hospital Santa Maggiore',
        date: '2020-07-10',
        key: 'SP-02',
        organ: 'Pele',
      },
      {
        type: 'blood',
        location: 'Hospital Santa Maggiore',
        date: '2020-07-10',
        key: 'SP-03',
      },
    ],
  });
};

export default {
  getDonations,
};
