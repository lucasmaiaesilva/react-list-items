var Site = React.createClass({
	render: function(){
		return (
			<h1> Olá mundo! </h1>
		);
	}
});

ReactDOM.render(
	<Site />,
	document.getElementById('content')
);