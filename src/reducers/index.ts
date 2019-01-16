import { combineReducers} from 'redux';
import { memberReducer, memberState } from './memberReducer';
import { organizationReducer, organizationState} from './organizationNameReducer';

export interface State {  
  memberReducer : memberState;
  organizationReducer: organizationState;
};

export const reducers = combineReducers<State>({
  memberReducer,
  organizationReducer,
});
