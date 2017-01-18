var CssStyle = {
	"bg":{
		"width":"100%",
		"height":"2rem",
		"display":"flex",
		"align-items":"center",
		"borderBottom":".1rem solid #f6f6f6"
	},
	"bgimg":{
		"display":"block",
		"width":"90%",
		"height":"1.7rem",
		"margin":"0 auto"
	}
};
var Bg = React.createClass({
	getDefaultProps:function(){
		return{
			"src":"./images/index/bg.jpg"
		}
	},
	render:function(){
		return(
			<div style={CssStyle.bg}>
				<img src={this.props.src} style={CssStyle.bgimg}/>
			</div>
		)
	}
})

module.exports = Bg