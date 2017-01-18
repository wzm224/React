var CssStyle = {

	"list":{
		"width":"100%",
		"height":"auto",
	},
	"listli":{
		"width":"96%",
		"height":"1.05rem",
		"padding":"0 0 0 2%",
		"borderBottom":"1px solid #ececec"
	},
	"listleft":{
		"width":"30%",
		"height":".8rem",
		"float":"left",
		"margin":".15rem .2rem 0 0"
	},
	"listimg":{
		"width":"100%",
		"height":"100%"
	},
	"listright":{
		"width":"55%",
		"height":".8rem",
		"float":"left",
		"marginTop":".2rem",
		"fontSize":".12rem"
	},
	"listtitle":{
		"display": "inline-block",
		"width":"70%",
		"height":".2rem",
		"lineHeight":".2rem",
		"fontSize":".15rem",
		"overflow":"hidden",
		"textOverflow":"ellipsis",
		"whiteSpace": "nowrap",
		"fontWeight":"blod"
	},
	"listkm":{
		"display": "inline-block",
		"height":".2rem",
		"lineHeight":".2rem",
		"color":"#c1c1c1",
		"overflow":"hidden",
		"fontStyle":"normal",
		"float":"right"
	},
	"listaddress":{
		"width":"95%",
		"height":".13rem",	
		"fontSize":".13rem",
		"lineHeight":".13rem",
		"padding":".08rem 0",
		"whiteSpace": "nowrap",
		"overflow":"hidden",
		"color":"#c1c1c1"
	},
	"listprice":{
		"display": "inline-block",
		"height":".2rem",
		"lineHeight":".2rem",
		"color":"#ff4600",
		"fontSize":".2rem",
		"fontWeight":"bold"
	},
	"listoldprice":{
		"display": "inline-block",
		"height":".15rem",
		"lineHeight":".15rem",
		"color":"#c1c1c1",
		"textDecoration":"line-through",
		"marginLeft":".08rem"
	},
	"listsell":{
		"display": "inline-block",
		"height":".2rem",
		"lineHeight":".2rem",
		"color":"#c1c1c1",
		"fontStyle":"normal",
		"float":"right"
	},
	"listmore":{
		"width":"100%",
		"height":".4rem",
		"fontSize":".15rem",
		"lineHeight":".4rem",
		"textAlign":"center"
	}
};

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
			<ul  style={CssStyle.list}>
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
