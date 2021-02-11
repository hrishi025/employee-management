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
import EditProfileScreen from './screens/EditProfileScreen';
import AddLeaveScreen from './screens/AddLeaveScreen';
import AddQueryScreen from './screens/AddQueryScreen';
import Navigation from './components/Navigation';
import LeavesScreen from './screens/LeavesScreen';
import Footer from './components/Footer';
import ContactScreen from './screens/ContactScreen';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <div className="container">
          <Switch>
            <Route exact path="/emplogin" component={LoginScreen} />
            <Route exact path="/addnewemployee" component={AddNewEmployeeScreen} />
            <Route exact path="/meetings" component={MeetingsScreen} />
            <Route exact path="/addmeetingscreen" component={AddMeetingsScreen} />
            <Route exact path="/queries" component={QueriesScreen} />
            <Route exact path="/generatesalaryslip" component={GenerateSalarySlipScreen} />
            <Route exact path="/searchemployee" component={SearchEmployeeScreen} />
            <Route exact path="/leaves" component={LeavesScreen} />

            <Route exact path="/editprofile" component={EditProfileScreen} />
            <Route exact path="/addleave" component={AddLeaveScreen} />
            <Route exact path="/addquery" component={AddQueryScreen} />

            <Route exact path="/home" component={HomeScreen} />
            <Route exact path="/employee-management-web" component={HomeScreen} />
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/contact" component={ContactScreen} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
