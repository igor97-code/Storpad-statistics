import React from "react"
import { Route } from "react-router-dom"
import Main from "./main/main"
import Orders from "./orders/Orders"
import Clients from "./clients/Clients"
import Displays from "./displays/Displays"

export default () => {
    return (
        <main>
            <div className ="content">
                <Route exact path = "/" component={Main} />
                <Route exact path = "/orders" component ={Orders} />
                <Route exact path = "/clients" component ={Clients} />
                <Route exact path = "/displays" component ={Displays} />
            </div>
        </main>
    )
}