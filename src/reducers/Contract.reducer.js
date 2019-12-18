import * as constants from '../constants/Actions';

export const initialState = {
  contractlist: [],
  cterr: ''
};

function ContractReducer(state = initialState, action) {
  // let status = '';
  switch (action.type) {
    case constants.GET_ALL_CONTRACT: {
      const st = { ...state };
      st.contractlist = [];
      st.contractlist = action.data.res;
      // console.log('Vô rồi ', st);
      // window.location.href = '/tag-list';
      return st;
    }
    
    default: {
      return { ...state, cterr: '' };
    }
  }
}

export default ContractReducer;
