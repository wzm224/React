
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
			<div>
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

