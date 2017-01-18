var CssStyle = {
	"movie":{
		"width":"100%",
		"height":"2.5rem"
	},
	"mvswp":{
		"width": "100%",
		"height":"100%",
		"margin":".1rem"
	},
	"mvtip":{
		"width":"auto",
		"height":".4rem",
		"padding":"0 .1rem",
		"borderBottom":"1px solid #ededed",
		"borderTop":"1px solid #ededed"
	},
	"mvtitle":{
		"height":".4rem",
		"fontWeight":"blod",
		"fontSize":".2rem",
		"lineHeight":".4rem",
		"float":"left"
	},
	"mvmore":{
		"lineHeight":".4rem",
		"height":".4rem",
		"fontSize":".15rem",
		"color":"#9b9b9b",
		"float":"right"
	},
	"mvimg":{
		"display":"block",
		"width":"100%",
		"height":"1.4rem"
	},
	"mvname":{
		"margin":".08rem 0",
		"fontWeight":"bloder",
		"fontSize":".15rem"
	},
	"mvgrade":{
		"width":"100%",
		"height":"2.1rem",
		"color":"#ff8b59",
		"fontSize":".15rem"
	}
};
var Movie = React.createClass({

	getDefaultProps:function(){
		return{
			"url":"./mock/movie.json"
		}
	},
	getInitialState:function(){
		return{
			"reset":""
		}
	},
	componentWillMount:function(){
		var that = this;
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
		var arr = [];
		var reset = this.state.reset;

		if (reset) {
			for (var i = 0; i < reset.length; i++) {
				arr.push(<MovieChild name={reset[i]} />)
			}
		}

		return(
			<div style={CssStyle.movie}>
				<div style={CssStyle.mvtip}>
					<span style={CssStyle.mvtitle}>热放电影</span>
					<span style={CssStyle.mvmore}>全部电影 〉</span>
				</div>
				<div style={CssStyle.mvswp} className="swiper-container" id="Movieswp">
			        <div className="swiper-wrapper">
			        	{arr}
			        </div>
			    </div>
		    </div>

		)
	}

})
module.exports = Movie;

var MovieChild = React.createClass({
	render:function(){
		var reset = this.props.name
		return(

				<div className="swiper-slide" style={CssStyle.mvpage}>
					<img style={CssStyle.mvimg} src={reset.ImgSrc} />
					<p style={CssStyle.mvname}>{reset.name}</p>
					<p style={CssStyle.mvgrade}>{reset.grade}分</p>
				</div>
		)
	},
	componentDidMount:function(){

	    var swiper = new Swiper('#Movieswp', {
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 10,
        freeMode: true
	    });		
	}
})

