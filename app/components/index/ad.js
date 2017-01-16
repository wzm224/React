var  Ad = React.createClass({
	getDefaultProps:function(){
		return{
			"adimg":"./images/index/ad.png"
		}
	
	},
	render:function(){
		//console.log(this.props.adimg)
		return(
			<div>
				<div style={CssStyle.adleft}><img style={CssStyle.adimg} src={this.props.adimg}/></div>
				<div  style={CssStyle.adright} className="swiper-container" id="adswp">
			        <div className="swiper-wrapper">
			            <div className="swiper-slide"><span style={CssStyle.adspan}>【电影特惠】</span>一大波立减来袭</div>
			            <div className="swiper-slide"><span style={CssStyle.adspan}>【金鸡福利】</span>快来买买买</div>
			        </div>

			    </div>
		    </div>
		)
	},
	componentDidMount:function(){
		var Adswiper = new Swiper('#adswp', {
        direction: 'vertical',
        autoplay:2000,
        autoplayDisableOnInteraction : true,
       loop: true
	})
}

})

module.exports = Ad;
