//var CssStyle = require('./CssStyle');


var LaYout = React.createClass({
	render:function(){
		return(
			<div style={CssStyle.bodybox}>
				<div style={CssStyle.header}></div>
				<div id="index" style={CssStyle.section}></div>
				<div style={CssStyle.footer}></div>
			</div>
		)
	}
});


var Index = require('./components/index/index');
var Banner = require('./components/index/banner');
var Nav = require('./components/index/nav');
var Ad = require('./components/index/ad');
var More = require('./components/index/more');
var Bg = require('./components/index/bg');
var Movie = require('./components/index/movie');
var Like = require('./components/index/like');
var List = require('./components/index/list');

ReactDOM.render(<LaYout />,document.getElementById('app'));
ReactDOM.render(<Index />,document.getElementById('index'));
ReactDOM.render(<Banner />,document.getElementById('banner'));
ReactDOM.render(<Nav />,document.getElementById('nav'));
ReactDOM.render(<Ad />,document.getElementById('ad'));
ReactDOM.render(<More />,document.getElementById('more'));
ReactDOM.render(<Bg />,document.getElementById('bg'));
ReactDOM.render(<Movie />,document.getElementById('movie'));
ReactDOM.render(<Like />,document.getElementById('like'));
ReactDOM.render(<List />,document.getElementById('list'));
