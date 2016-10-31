import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  getAll(data) {
    AppDispatcher.dispatch({
      type: 'ALL',
      payload: { data },
    });
  },

  getDetails(data) {
    AppDispatcher.dispatch({
      type: 'DETAILS',
      payload: { data },
    });
  },
};
export default ServerActions;
