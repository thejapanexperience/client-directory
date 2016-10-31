import API from '../API';
import AppDispatcher from '../AppDispatcher';

const ToAPIActions = {
  new: API.new,
  all: API.all,
  edit: API.edit,
  delete: API.delete,
  getOne: API.getOne,
};

export default ToAPIActions;
