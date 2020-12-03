import React from "react"
import { connect } from 'react-redux' 
import "./css/style.css" 
import "./css/reset.css"
import "./css/media.css"
import Menu from "./components/menu"
import Header from "./components/Header"
import Content from './components/content/content'
import Login from "./components/login/login"


const groupContent = [
  <Menu />,
  <Header/>,
  <Content/>
];


function App({ isAuth }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      {isAuth ? groupContent : <Login/>}
    </div>
  )
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(App)
