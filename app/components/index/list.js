var List = React.createClass({
	getDefaultProps:function(){
		return{
			"url":"./mock/list.json"
		}
	},
	getInitialState:function(){
		return{
			"reset":""
		}
	},
	componentWillMount:function(){
		var that=this;
		$.ajax({
			url:this.props.url,
			dataType:"json",
			success:function(res){
				//console.log(res)
				that.setState({
					"reset":res
				})
			}
		})	
	},
	render:function(){
		var listarr = [];
		var reset = this.state.reset;
		if (reset) {
			for (var i = 0; i < reset.length; i++) {
				listarr.push(<ListChild name={reset[i]}/>)
			}
		}
		return(
			<ul style={CssStyle.list}>
				{listarr}
				<div style={CssStyle.listmore}>查看更多团购</div>
			</ul>
		)
	}
});

module.exports = List;

var ListChild = React.createClass({
	render:function(){
		
		var ListRes = this.props.name
			//console.log(ListRes)

		return(
			<li style={CssStyle.listli}>

				<div style={CssStyle.listleft}>
					<img style={CssStyle.listimg} src={ListRes.ImgSrc}/>
				</div>
				<div style={CssStyle.listright}>
					<p><span style={CssStyle.listtitle}>{ListRes.title}</span><i style={CssStyle.listkm}>{ListRes.distance}</i></p>
					<p style={CssStyle.listaddress}>[{ListRes.address}]{ListRes.situation}</p>
					<p>
					<span style={CssStyle.listprice}>¥{ListRes.price}</span>
					<span style={CssStyle.listoldprice}>{ListRes.oldprice}</span>
					<i style={CssStyle.listsell}>已售  {ListRes.sell}</i>
					</p>		
				</div>
			</li>
		)
	}
})
