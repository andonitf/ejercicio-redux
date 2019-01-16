import { connect } from 'react-redux';
import { memberRequest, organizationNameUpdate } from '../../actions/memberRequest';
import { MemberAreaComponent } from './memberArea';
import { State } from '../../reducers';

const mapStateToProps = (state  :State) => {
  return{
      members: state.memberReducer,
      organizationName: state.organizationReducer.organizationName
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMembers: (organizationReducer: string) => {
      return dispatch(memberRequest(organizationReducer));
    },
    onChange: (organizationReducer: string) => {
        return dispatch(organizationNameUpdate(organizationReducer));
    },
  };
}

export const MembersAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberAreaComponent);
