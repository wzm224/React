var MoreChild = React.createClass({
	  render:function(){
	  
              return(
	  	 	 <div style={StyleSheets.More}>
	  	 	     <div style={StyleSheets.MoreA}>{this.props.name[0].title1}</div>
	  	 	     <div style={StyleSheets.MoreB}>{this.props.name[1].title2}</div> 
	  	 	     <div style={StyleSheets.MoreB}>{this.props.name[2].title3}</div> 
	  	 	     <div style={StyleSheets.MoreB}>{this.props.name[3].title4}</div> 
	  	 	     <div style={StyleSheets.MoreB}>{this.props.name[4].title5}</div>
	  	 	     <div style={StyleSheets.MoreC}></div>
	  	 	     <div style={StyleSheets.MoreB}>{this.props.name[5].title6}</div>
	  	 	     <div style={StyleSheets.MoreB}>{this.props.name[6].title7}</div>
	  	 	     <div style={StyleSheets.MoreB}>{this.props.name[7].title8}</div> 
	  	 	    <div style={StyleSheets.MoreC}></div>
	  	 	     <div style={StyleSheets.MoreB}>{this.props.name[8].title9}</div>
	  	 	     <div style={StyleSheets.MoreB}>{this.props.name[9].title10}</div> 
	  	 	 </div>
	  	 	 )
	  	 }
	  })
module.exports=MoreChild