
var Index = React.createClass({
	render:function(){
		return(
			<div>
				<div id="banner" style={CssStyle.banner}>1</div>
				<div id="nav" style={CssStyle.nav}>2</div>
				<div id="ad" style={CssStyle.ad}>3</div>
				<div id="more" style={CssStyle.more}>4</div>
				<div id="bg" style={CssStyle.bg}>5</div>
				<div id="movie" style={CssStyle.movie}>6</div>
				<div id="like" style={CssStyle.like}>7</div>
				<div id="list" style={CssStyle.list}>8</div>
			</div>
		)
	}
})

module.exports = Index;