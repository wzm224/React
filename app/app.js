
import {Router,Route,hashHistory} from "react-router";


import Index from "./components/index/index";
import Round from "./components/round/round";
import My from "./components/my/my";
import More from "./components/more/more";
import Footer from "./components/common/footer";
//路由的相关配置


const routes = {
	path : "/",
	component : Footer, //路由开始显示的页面,
	indexRoute : {component:Index}, //indexRoute用来进行组件的嵌套，不需要嵌套的话可以不写
	childRoutes : [ //这childRoutes里进行子路由的配置，每一个路由都是一个对象
	//在对象里有path comopent等
		
		{
			path : "/index",
			component :Index
		},
		{	path : "/round",
			component : Round
		},
		{ 
			path : "/my",
			component : My
		},
		{ 
			path : "/more",
			component : More
		}
	]
}

//1.2个参数
//2.把配置好的路由渲染到页面
ReactDOM.render(<Router routes={routes} history={hashHistory}/>,document.getElementById("app"));

