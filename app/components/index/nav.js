var Nav = React.createClass({

	getDefaultProps:function(){
		return{
			"navurl":"./mock/nav.json"
		}
	},
	getInitialState:function(){
		return{
			"navreset":""
		}
	},
	componentWillMount:function(){
		var that = this;
		$.ajax({
			url:this.props.navurl,
			dataType:"json",
			success:function(res){
				//console.log(res)
				that.setState({
					"navreset":res
				})
			}
		})
	},
	componentDidMount:function(){

	    var NavSwiper = new Swiper('#nswp', {
	        pagination: '#nswp .swiper-pagination',
	        autoplayDisableOnInteraction : true,
	        slidesPerView: 1,
	        paginationClickable: true,
	        loop: true
		    });		
	},
	render:function(){

		var navarr1 = [];
		var navarr2 = [];
		var navreset = this.state.navreset;
		if(navreset){
			for( var i=0;i<8;i++ ){
				navarr1.push( <NavChild1 navname={navreset[i]}/> )
					//console.log(reset[i])
			}
			for( var i=8;i<16;i++ ){
				navarr2.push( <NavChild2 navname={navreset[i]}/> )
					//console.log(reset[i])
			}
		}

		return(


				<div style={CssStyle.swiper} className="swiper-container" id="nswp">
			        <div style={CssStyle.swiper} className="swiper-wrapper">
				        <div className="swiper-slide">
					        	{navarr1}
				        </div>
			        	<div className="swiper-slide">
					        	{navarr2}
			      		 </div>
			        </div>
			        <div className="swiper-pagination"></div>
			    </div>


		)
	}

})
module.exports = Nav;

var NavChild1 = React.createClass({
	render:function(){		
		var navreset = this.props.navname
		return(
			<li style={CssStyle.navli}><img style={CssStyle.navimg} src={navreset.img}/><span style={CssStyle.navspan}>{navreset.title}</span></li>
		)
	}
})
var NavChild2 = React.createClass({
	render:function(){
		var navreset = this.props.navname
		return(
			<li style={CssStyle.navli}><img style={CssStyle.navimg} src={navreset.img}/><span style={CssStyle.navspan}>{navreset.title}</span></li>
		)
	}
})
