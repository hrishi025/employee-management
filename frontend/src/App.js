import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import LoginScreen from './screens/LoginScreen';
import AddNewEmployeeScreen from './screens/AddNewEmployee';
import MeetingsScreen from './screens/MeetingsScreen';
import QueriesScreen from './screens/QueriesScreen'
import GenerateSalarySlipScreen from './screens/GenerateSalarySlipScreen';
import AddMeetingsScreen from './screens/AddMeetingScreen';
import SearchEmployeeScreen from './screens/SearchEmployeeScreen';
import EmployeeNavBar from './components/EmployeeNavbar';
import EditProfileScreen from './screens/EditProfileScreen';
import AddLeaveScreen from './screens/AddLeaveScreen';
import AddQueryScreen from './screens/AddQueryScreen';
import Navigation from './components/Navigation';
import AdminNavBar from './components/AdminNavbar';
import LeavesScreen from './screens/LeavesScreen';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <div className="container">
          <Switch>
            <Route path="/login" component={LoginScreen} />
            <Route path="/addnewemployee" component={AddNewEmployeeScreen} />
            <Route path="/meetings" component={MeetingsScreen} />
            <Route path="/addmeetingscreen" component={AddMeetingsScreen} />
            <Route path="/queries" component={QueriesScreen} />
            <Route path="/generatesalaryslip" component={GenerateSalarySlipScreen} />
            <Route path="/searchemployee" component={SearchEmployeeScreen} />
            <Route path="/leaves" component={LeavesScreen} />

            <Route path="/editprofile" component={EditProfileScreen} />
            <Route path="/addleave" component={AddLeaveScreen} />
            <Route path="/addquery" component={AddQueryScreen} />

            <Route path="/home" component={HomeScreen} />
            <Route path="/about" component={AboutScreen} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
