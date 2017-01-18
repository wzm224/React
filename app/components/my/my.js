var MineChild=require('./MineChild')
var My = React.createClass({
	  getDefaultProps:function(){
	  	  return{
	  	     url:"./mock/list/mine.json"
	  	  }
	  },
	  getInitialState:function(){
	     return{
	     	   "reset":""
	     }
	  },
	  componentWillMount:function(){
	  	 var This = this;
	  	 $.ajax({
	  	 	 url:this.props.url,
	  	 	 dateType:"json",
	  	 	 success:function(res){
	  	 	 	  This.setState({
	  	 	 	      "reset":res		  	 	 	  	
	  	 	 	  })
	  	 	 	
	  	 	 }
	  	 })
	  	 
	  },
	  render:function(){
	  	var arr=[];
	  	var reset=this.state.reset;
	  	//console.log(reset)
	  	if(reset){
	  		  arr.push(<MineChild name={reset}/>)
	  	}
	  	return(
	  		<div style={StyleSheets.my}>
	  		   {arr}
	  		
	  		</div>
	  	)
	  }
	
	
})
module.exports=My;