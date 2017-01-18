var MoreChild=require('./morechild')
var More = React.createClass({
	  getDefaultProps:function(){
	  	 return{
         url:"./mock/list/more.json"	  	 	
	  	 }
	  },
	 getInitialState:function(){
	  	 return{
	  	 	"reset":""
	  	 }
	 },
	  componentWillMount:function(res){
	      var This = this
	      $.ajax({
	      	url:this.props.url,
	      	dataType:"json",
	      	success:function(res){
             This.setState({
             	 "reset":res
             })
	      	}
	      	 
	      	
	      	
	      })
	  },
	  render:function(){
	  	var arr1=[];
	  	var reset1=this.state.reset
	  	//console.log(reset1)
	  	if(reset1){
	  		
	  		 	   arr1.push(<MoreChild  name={reset1} />)
	  		 }
	  	
	  	return(
	  		<div id='boxB' style={StyleSheets.boxB}>
	  		     {arr1}
	  		
	  		</div>
	  	)
	  }
	
	
})
module.exports=More