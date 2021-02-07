import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'

const HomeScreen = (props) => {

  return (
    <div>
      <Header title="Home" />
      <img src="https://source.unsplash.com/1280x720/?office,computer,tech,employee"></img>
    </div>
  )
}

export default HomeScreen
