var CssStyle = {
	"section":{
		"width":"100%",
		"height":"100%",
		"overflow":"hidden",
		"fontSize":".12rem",
		"overflowY":"scroll"
	}
};

var Index = React.createClass({

	componentDidMount:function(){
		
		var Header = require('./header');
		var Banner = require('./banner');
		var Nav = require('./nav');
		var Ad = require('./ad');
		var More = require('./more');
		var Bg = require('./bg');
		var Movie = require('./movie');
		var Like = require('./like');
		var List = require('./list');
		//console.log(document.getElementById('banner'))
		
		ReactDOM.render(<Header />,document.getElementById('head'));
		ReactDOM.render(<Banner />,document.getElementById('banner'));
		ReactDOM.render(<Nav />,document.getElementById('nav'));
		ReactDOM.render(<Ad />,document.getElementById('ad'));
		ReactDOM.render(<More />,document.getElementById('more'));
		ReactDOM.render(<Bg />,document.getElementById('bg'));
		ReactDOM.render(<Movie />,document.getElementById('movie'));
		ReactDOM.render(<Like />,document.getElementById('like'));
		ReactDOM.render(<List />,document.getElementById('list'));


	},
	render:function(){
		return(
			<div id="indexbox" style={CssStyle.section}>
				<div id="head">0</div>
				<div id="banner">1</div>
				<div id="nav">2</div>
				<div id="ad">3</div>
				<div id="more">4</div>
				<div id="bg">5</div>
				<div id="movie">6</div>
				<div id="like">7</div>
				<div id="list">8</div>
			</div>
		)
	}
})

module.exports = Index;

