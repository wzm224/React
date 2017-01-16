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
			<div>
				<div style={CssStyle.mvtip}>
					<span style={CssStyle.mvtitle}>全部电影</span>
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

