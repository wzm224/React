
var Like = React.createClass({
	render:function(){
		return(
			<div style={CssStyle.likebox}>
				<div style={CssStyle.likeline}></div>
				<div style={CssStyle.likecricle}></div>
				<div style={CssStyle.liketitle}>猜你喜欢</div>
				<div style={CssStyle.likecricle}></div>
				<div style={CssStyle.likeline}></div>
			</div>
		)
	}
})

module.exports = Like;