import React from "react"
import { NavLink } from "react-router-dom"

export default () => {
  return (
    <div className="leftmenu">
      <div className="nav">
        <NavLink to="/">
            <img src = "./img/logotype.svg" alt ="logo"/>
        </NavLink>
        <div className="navbar">
            <NavLink to = "/">
                <div className="icon imgMain"/>
                    Главная
            </NavLink>
            <NavLink to = "/orders">
                <div className="icon imgOrder"/>
                    Заказы
            </NavLink>
            <NavLink to = "/clients">
                <div className="icon imgClients"/>
                    Клиенты
            </NavLink>
            <NavLink to = "/displays">
                <div className="icon imgDisplay"/>
                    Дисплей
            </NavLink>
        </div>
      </div>
    </div>
  )
}
