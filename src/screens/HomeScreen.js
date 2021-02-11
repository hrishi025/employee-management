import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'

const HomeScreen = (props) => {
  const userLogin = useSelector((store) => store.userLogin)
  return (
    <div>
      <img src="https://source.unsplash.com/1280x360/?office,computer,tech,employee" class="img-fluid"></img>
      {
        userLogin.response && userLogin.response.status != "error" && userLogin.response.data.role == 'admin' &&
        <div>
          <Header title="Home" />
          <hr />
          <h3>Welcome Admin..!!🛡️</h3>
        </div>
      }
      {
        userLogin.response && userLogin.response.status != "error" && userLogin.response.data.role == 'employee' &&
        <div>
          <Header title="Home" /><hr />
          <h3>Welcome Employee..!!👨‍💼</h3>
        </div>
      }

      {
        userLogin.response == null &&
        <div>

          <Header title="Welcome to Employee Management" /><hr />
          <div className="row">
            <h5>Demo login details:</h5>
            <br />

            < div >
              <div className="row justify-content-center">

                <div className="card text-white bg-dark mb-2 col-sm-3 mx-sm-1" >
                  <div className="card-header">🛡️ Admin Login </div>
                  <p className="card-body">
                    <strong>Email:</strong><br /> admin@gmail.com<br /><br />
                    <strong >Password:</strong><br />  admin
                  </p>
                </div>

                <div className="card text-white bg-dark mb-2 col-sm-3  mx-sm-1" >
                  <div className="card-header">👨‍💼 Employee Login </div>
                  <p className="card-body">
                    <strong>Email:</strong><br /> employee@gmail.com<br /><br />
                    <strong >Password:</strong><br />  employee
                  </p>
                </div>

              </div>
            </ div>

            <div class="powr-hit-counter" id="09f1be0b_1612975660"></div>
          </div>
        </div>
      }
      <p></p>
    </div >
  )
}

export default HomeScreen
