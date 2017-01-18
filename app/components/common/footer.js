import {Link} from "react-router";

var css = {

	"layout":{
		"width":"100%",
		"height":"100%",
		"display":"flex",
		"flexDirection":"column"
	},
	"content":{
		"display":"flex",
		"width":"100%",
		"height":"100%"
	},
	"footbox":{
		"width":"100%",
		"height":".5rem",
		"display":"flex",
		"borderTop":"1px solid #e5e5e5",
		"background":"#fff",
		"zIndex":"1234"
	},
	"footlink":{
		"width":"25%",
		"height":"100%"
	},
	"footli":{
		"width":"100%",
		"height":"100%",
		"display":"flex",
		"align-items":"center",
		"justify-content": "center",
		"flexDirection":"column",
		"fontSize":".12rem"
	}
};

var Footer = React.createClass({

	componentDidMount:function () {

		//底部导航变色
		var foot = document.getElementById("foot");
		var aLi = foot.getElementsByTagName("a");
		
		//console.log(aLi)
		for (var i = 0; i < aLi.length; i++) {
			aLi[i].style.color="#7b8496";
			aLi[i].onclick = function (argument) {
				for (var i = 0; i < aLi.length; i++) {
					aLi[i].style.color="#7b8496";
				}
				this.style.color="#fe6f2e";
			}
		};
		aLi[0].style.color="#fe6f2e";
	},

	render:function(){
		return(
			<div id = "LaYout" style={css.layout}>

				<div id="content" style={css.content}>				
					{this.props.children}
				</div>

				<ul style={css.footbox} id="foot">
					<Link style={css.footlink} to="/index">
						<li style={css.footli}><span className="icon">&#xe619;</span>首页</li>
					</Link>

					<Link style={css.footlink} to="/round">
						<li style={css.footli}><span className="icon">&#xe60a;</span>周边</li>
					</Link>

					<Link style={css.footlink} to="/my">
						<li style={css.footli}><span className="icon">&#xe706;</span>我的</li>			
					</Link>
					
					<Link style={css.footlink} to="/more">
						<li style={css.footli}><span className="icon">&#xe609;</span>更多</li>
					</Link>	
				</ul>
				
			</div>
		)
	}
});

module.exports = Footer;