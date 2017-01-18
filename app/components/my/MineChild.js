var MineChild = React.createClass({
	 render:function(){
	 	//console.log(this.props)
	 	return(
	 		<div style={StyleSheets.mineB}>
	 		   <div style={StyleSheets.mineBox}>
                  <div style={StyleSheets.mine1}>{this.props.name[0].title1}</div>       	 		       
	 		      <div style={StyleSheets.mine2}>
	 		      <div style={StyleSheets.mine3}>{this.props.name[0].d1}</div>
	 		      </div>
	 		      <div style={StyleSheets.mine4}>
	 		      <li style={StyleSheets.border}>{this.props.name[0].d2}</li>
	 		      <li style={StyleSheets.border}>{this.props.name[0].d3}</li>
	 		      <li style={StyleSheets.mine5}>{this.props.name[0].d4}</li>
	 		      </div>
	 		    </div>
	 		    <div style={StyleSheets.mine6}></div>
	 		    <div style={StyleSheets.mine7}>
	 		        <i className='iconfont' style={StyleSheets.icon1}>&#xe629;</i>
	 		        <b>{this.props.name[1].title2}</b>
	 		    </div>
	 		     <div style={StyleSheets.mine8}>
	 		        <div style={StyleSheets.mine8a}>
	 		        <i className='iconfont' style={StyleSheets.i}>&#xe73f;</i>
	 		        <b style={StyleSheets.b}>{this.props.name[2].title3}</b>
	 		        </div>
	 		          <div style={StyleSheets.mine8a}>
	 		        <i className='iconfont' style={StyleSheets.i}>&#xe73f;</i>
	 		        <b style={StyleSheets.b}>{this.props.name[2].c1}</b>
	 		        </div> 
	 		        <div style={StyleSheets.mine8a}>
	 		        <i className='iconfont' style={StyleSheets.i}>&#xe676;</i>
	 		        <b style={StyleSheets.b}>{this.props.name[2].c2}</b>
	 		         </div>
	 		         <div/>
	 		         
	 		     </div>
	 		       <div style={StyleSheets.mine9}></div>
	 		      
	 		    <div style={StyleSheets.mine10}>
	 		        <i className='iconfont' style={StyleSheets.icon1}>&#xe601;</i>
	 		        <b >{this.props.name[3].title4}</b>
	 		    </div>
	 		     <div style={StyleSheets.mine11}>
	 		         <li style={StyleSheets.mine11a}>{this.props.name[4].title5}</li>
	 		         <li style={StyleSheets.mine11b}>{this.props.name[4].d1}</li>
	 		     </div>
	 		     <div  style={StyleSheets.mine12}></div>
	 		     <div  style={StyleSheets.mine13}>
	 		           <i className="iconfont" style={StyleSheets.icon1}>&#xe7c8;</i>
	 		           <b>{this.props.name[5].title6}</b>
	 		     </div>
	 		     <div style={StyleSheets.mine12}></div>
	 		     <div  style={StyleSheets.mine13}>
	 		           <i className="iconfont" style={StyleSheets.icon1}>&#xe64e;</i>
	 		           <b>{this.props.name[6].title7}</b>
	 		     </div>
	 		     <div  style={StyleSheets.mine13}>
	 		           <i className="iconfont" style={StyleSheets.icon1}>&#xe64e;</i>
	 		           <b>{this.props.name[7].title8}</b>
	 		     </div>
	 		</div>
	 		     
	 		
	 	)
	 	
	 }
	
	
	
})
module.exports=MineChild