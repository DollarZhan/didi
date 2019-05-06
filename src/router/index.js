
import React from "react" //解析jsx语法
import { HashRouter as Router, Route, Redirect,Switch } from "react-router-dom";

import App from "../App";
import newsCenter from "../components/NewsCenter";
import Home from "../components/Home"


const router = 	(
	<Router>
		<Switch> 

			<Route path="/news/newsCenter" component={newsCenter}/>
			<Route path="/home" component={Home}/>
			<Redirect from="*" to="/home"/>


		</Switch>
	</Router>
)


export default router;