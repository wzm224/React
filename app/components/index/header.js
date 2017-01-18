var Css = {
	"header":{
		"width":"100%",
		"height":"0.5rem",
		"fontSize":".12rem",
		"position":"fixed",
		"top":"0px",
		"zIndex":"9999",
		"display":"flex"
	},
	"hdli1":{
		"width":"20%",
		"height":"0.5rem",
		"color":"#fff",
		"textAlign":"center",
		"lineHeight":".5rem",
		"fontSize":".1rem"
	},
	"hdli2":{
		"width":"60%",
		"height":"0.5rem",
		"fontSize":".12rem",
		"color":"#fff",
		"position":"relative",
		"color":"#000"
	},
	"input":{
		"display":"block",
		"width":"100%",
		"height":".3rem",
		"background":"#fff",
		"outline":"none",
		"border":"none",
		"borderRadius":".15rem",
		"marginTop":".1rem",
		"textIndent":"15%",
		"opacity":"0.9"
	},
	"search":{
		"position":"absolute",
		"left":"5%",
		"top":".15rem"
	},
	"span":{
		"fontSize":".18rem",
		"margin":".05rem"
	}
};

var Header = React.createClass({
	getDefaultProps:function(){

	},
	componentDidMount:function(){

		//顶部搜索变色
		var indexbox = document.getElementById("indexbox")
		var ul = document.getElementById("ul")
		indexbox.onscroll=function(){

		var top = indexbox.scrollTop || indexbox.body.scrollTop;
			//console.log(top)
			if (top >= 140) {
				ul.style.background = "#ff6f36"
			}else{
				ul.style.background = "none"
			}	
		}	
		 
	},
	render:function(){
		return(
			<ul  style={Css.header} id="ul">
				<li style={Css.hdli1}>北京
				<span className="icon">&#xe601;</span>
				</li>
				<li style={Css.hdli2}>
				<input type="text" style={Css.input} placeholder="请输入查找商品、种类..."/>
				<span className="icon"  style={Css.search}>&#xe612;</span>
				</li>
				<li style={Css.hdli1}>
				<span className="icon" style={Css.span}>&#xe9ad;</span>
				<span className="icon" style={Css.span}>&#xe637;</span>
				</li>
			</ul>
		)
	}
});

module.exports = Header;