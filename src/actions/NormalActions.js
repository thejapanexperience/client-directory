import API from '../API';
import AppDispatcher from '../AppDispatcher';

const NormalActions = {
  action(board) {
    AppDispatcher.dispatch({
      type: 'STUFF',
      payload: { data },
    });
  },
};

export default NormalActions;
