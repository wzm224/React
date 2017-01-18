var CssStyle = {
	"more":{
		"width":"100%",
		"height":"3rem"
	},
	"moretop":{
		"width":"100%",
		"height":"1.5rem",
		"overflow":"hidden"
	},
	"moredown":{
		"width":"100%",
		"height":"1.5rem",
		"overflow":"hidden"
	},
	"moreimg":{
		"display":"block",
		"width":".5rem",
		"height":".5rem",
		"borderRadius":".5rem"
	},
	"moreli":{
		"width":"50%",
		"height":"50%",
		"float":"left",
		"boxSizing":"border-box",
		"borderBottom":"1px solid #ededed",
		"borderRight":"1px solid #ededed"
	},
	"morelileft":{
		"width":"60%",
		"height":"100%",
		"float":"left",
		"display":"flex",
		"flexDirection":"column",
		"justify-content": "center"
	},
	"morelih3":{
		"color":"#f64c43",
		"margin":"0 0 .1rem .11rem",
		"fontSize":".15rem"
	},
	"morelispan":{
		"color":"#c6c6c6",
		"marginLeft":".11rem",
		"fontSize":".12rem"
	},
	"moreliright":{
		"width":"40%",
		"height":"100%",
		"float":"left",
		"display":"flex",
		"align-items":"center",
		"justify-content": "center"
	},
	"morediv":{
		"width":"33.3%",
		"height":"100%",
		"float":"left",
		"display":"flex",
		"align-items":"center",
		"flexDirection":"column",
		"boxSizing":"border-box",
		"borderRight":"1px solid #ededed",
		"borderBottom":"1px solid #ededed",
	},
	"moredivh3":{
		"color":"#fbb319",
		"marginTop":".2rem",
		"fontSize":".15rem"
	},
	"moredivp":{
		"color":"#a4a4a4",
		"margin":".15rem 0",
		"fontSize":".12rem"
	}
};
var More = React.createClass({

	getDefaultProps:function(){
		return{
		}
	},
	getInitialState:function(){
		return{
			"reset":[
				{
					"tip":"金鸡纳福",
					"title":"一大波福利来袭",
					"img":"./images/index/1.jpg"
				},{
					"tip":"金鸡纳福",
					"title":"一大波福利来袭",
					"img":"./images/index/2.jpg"
				},{
					"tip":"金鸡纳福",
					"title":"一大波福利来袭",
					"img":"./images/index/3.jpg"
				},{
					"tip":"金鸡纳福",
					"title":"一大波福利来袭",
					"img":"./images/index/4.jpg"
				},{
					"tip":"金鸡纳福",
					"title":"一大波福利来袭",
					"img":"./images/index/5.jpg"
				},{
					"tip":"金鸡纳福",
					"title":"一大波福利来袭",
					"img":"./images/index/6.jpg"
				},{
					"tip":"金鸡纳福",
					"title":"一大波福利来袭",
					"img":"./images/index/7.jpg"
				}
			]
		}
	},
	render:function(){
		var morearr1 = [];
		var morearr2 = [];
		var mores = this.state.reset		
		//console.log(mores)

		if(mores){
			for( var i=0;i<4;i++ ){
				morearr1.push( <More1 name={mores[i]}/> )
			}
			for( var i=4;i<7;i++ ){
				morearr2.push( <More2 name={mores[i]}/> )
			}
		}

		return(
			<div style={CssStyle.more}>
				<ul style={CssStyle.moretop}>
					{morearr1}
				</ul>
				<div style={CssStyle.moredown}>
					{morearr2}
				</div>
			</div>
		)
	}
})

module.exports = More;

var More1 = React.createClass({
	render:function(){
		var reset = this.props.name
		return(
			<li style={CssStyle.moreli}>
				<div style={CssStyle.morelileft}>
					<h3 style={CssStyle.morelih3}>{reset.tip}</h3>
					<span style={CssStyle.morelispan}>{reset.title}</span>
				</div>
				<div style={CssStyle.moreliright}>
				<img src={reset.img} style={CssStyle.moreimg}/>
				</div>
			</li>
		)
	}
})

var More2 = React.createClass({
	render:function(){
		var reset = this.props.name
		return(
			<div style={CssStyle.morediv}>
				<h3 style={CssStyle.moredivh3}>{reset.tip}</h3>
				<p style={CssStyle.moredivp}>{reset.title}</p>
				<img src={reset.img} style={CssStyle.moreimg}/>
			</div>
		)
	}
})

