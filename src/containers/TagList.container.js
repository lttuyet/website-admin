import { connect } from 'react-redux';
import * as actions from '../actions/index';
import TagList from '../components/TagList/TagList';

const mapstToProps = state => {
  return {
    username: state.AccountReducer.username,
    isLogin: state.AccountReducer.isLogin,
    token: state.AccountReducer.token,
    taglist: state.TagReducer.taglist,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTags : (token) => dispatch( actions.getAllTagsRequest(token)),
    deleteTag : (token,id) => dispatch(actions.deleteTagRequest(token,id)),

  };
};
const TagListContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(TagList);

export default TagListContainer;





