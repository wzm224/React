var CssStyle = {
	"like":{
		"width":"100%",
		"height":".4rem",
		"background":"#f6f6f6",
		"borderBottom":".01rem solid #f1f1f1",
		"borderTop":".01rem solid #f1f1f1"		
	},
	"likebox":{
		"width":"100%",
		"height":"100%",
		"display":"flex",
		"justify-content": "center",
		"align-items":"center"
	},
	"liketitle":{
		"color":"#ff4e00",
		"fontSize":".15rem",
		"margin": "0 .2rem"
	},
	"likeline":{
		"width":".6rem",
		"height":"1px",
		"background":"#ff4e00"
	},
	"likecricle":{
		"width":".12rem",
		"height":".12rem",
		"border":"1px solid #ff4e00",
		"borderRadius":".12rem"
	}
};
var Like = React.createClass({
	render:function(){
		return(
			<div style={CssStyle.like}>
				<div style={CssStyle.likebox}>
					<div style={CssStyle.likeline}></div>
					<div style={CssStyle.likecricle}></div>
					<div style={CssStyle.liketitle}>猜你喜欢</div>
					<div style={CssStyle.likecricle}></div>
					<div style={CssStyle.likeline}></div>
				</div>
			</div>
		)
	}
})

module.exports = Like;