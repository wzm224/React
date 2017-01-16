var Bg = React.createClass({
	getDefaultProps:function(){
		return{
			"src":"./images/index/bg.jpg"
		}
	},
	render:function(){
		return(
			<div>
				<img src={this.props.src} style={CssStyle.bgimg}/>
			</div>
		)
	}
})

module.exports = Bg