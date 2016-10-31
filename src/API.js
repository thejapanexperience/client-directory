import ServerActions from './actions/ServerActions';
import socket from './socket-init';
import axios from 'axios';

const API = {

  getAll() {
    axios.get('http://localhost:8000/api/clients')
    .then((res) => {
      console.log('Got All Clients');
      // ServerActions.getAll(res.data);
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
  },

  getOne(id) {
    axios.get(`http://localhost:8000/api/clients/${id}`)
    .then((res) => {
      ServerActions.getOne(res.data);
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
  },

  new(client) {
    axios.post('http://localhost:8000/api/clients', { client })
      .then((res) => {
        console.log('Added Client');
        // ServerActions.getAll(res.data);
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  },

  edit(client) {
    axios.put('http://localhost:8000/api/clients', { client })
      .then((res) => {
        ServerActions.getAll(res.data);
        axios.get('http://localhost:8000/api/properties')
      .then((res) => {
        ServerActions.getAllProperties(res.data);
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
      });
  },

  delete(id) {
    axios.delete(`http://localhost:8000/api/clients/${id}`)
      .then((res) => {
        ServerActions.getAll(res.data);
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  },
};

export default API;
