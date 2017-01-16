var Banner = React.createClass({

	getDefaultProps:function(){
		return{
			"url":"./mock/banner.json"
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
				arr.push(<BannerChild name={reset[i]} />)
			}
		}

		return(

			<div style={CssStyle.swiper} className="swiper-container" id="bswp">
		        <div className="swiper-wrapper">
		        	{arr}
		        </div>
		        <div className="swiper-pagination"></div>
		    </div>

		)
	}

})
module.exports = Banner;

var BannerChild = React.createClass({
	render:function(){
		var reset = this.props.name
		return(
			<div className="swiper-slide"><img style={CssStyle.img} src={reset} /></div>
		)
	},
	componentDidMount:function(){

	    var swiper = new Swiper('#bswp', {
	        pagination: '#bswp .swiper-pagination',
	        autoplay : 1500,
	        autoplayDisableOnInteraction : true,
	        slidesPerView: 1,
	        paginationClickable: true,
	        loop: true
	    });		
	}
})

