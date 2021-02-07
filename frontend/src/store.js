import { createStore, combineReducers, applyMiddleware } from 'redux'
import {
  userSignupReducer,
  userLoginReducer,
  addMeetingReducer,
  getLeavesReducer,
  approveLeaveReducer,
  rejectLeaveReducer,
  getQueriesReducer,
  changeQueryReducer,
  getSalarySlipReducer,
  getPresentDaysReducer,

} from './reducers/adminReducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { employeeAddLeave, employeeAddQuery, employeefetchMeetings, employeeUpdateProfileReducer, employeeProfileReducer } from './reducers/employeeReducers';

// combined reducers
const reducers = combineReducers({
  userSignup: userSignupReducer,
  userLogin: userLoginReducer,
  adminAddMeeting: addMeetingReducer,
  empLeaves: getLeavesReducer,
  empapproveLeave: approveLeaveReducer,
  emprejectLeave: rejectLeaveReducer,
  empqueries: getQueriesReducer,
  empQueryStatus: changeQueryReducer,
  empSalarySlip: getSalarySlipReducer,
  empProfileUpdate: employeeUpdateProfileReducer,
  employeeLeaves: employeeAddLeave,
  employeeQuerys: employeeAddQuery,
  empPresent: getPresentDaysReducer,
  employeeMeetings: employeefetchMeetings,
  empProfile: employeeProfileReducer,
})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
