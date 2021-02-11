import Header from '../components/Header'

const AboutScreen = (props) => {
  return (
    <div>
      <Header title="About" />
      <hr /><br />
      <p><strong>Dear Visitor,</strong><br /><br />Welcome to Employee Management web app,<br /><br />I have created this project using REACT. Backend server - Express, Nodejs, MySQL.<i><br /> For any suggestions fell free to contact us at - <a href="mailto:hrishikeshd14@gmail.com">  hrishikeshd14@gmail.com</a></i><br /><br /><strong>Sincerely,</strong><br /><strong>Hrishikesh Dalimbkar</strong></p>
      <br />  <hr />
      <Header title="Other Apps" />
      <hr />
      <div>Counter App: <a href="https://hrishi025.github.io/todo-app/">Counter App</a></div>
      <div>ToDo App: <a href="https://hrishi025.github.io/todo-app/">TODO App</a></div>
      <hr />
    </div>
  )
}

export default AboutScreen
