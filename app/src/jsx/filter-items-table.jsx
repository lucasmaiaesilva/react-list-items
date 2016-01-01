var ItemRow = React.createClass({
	
	renderElement: function() {
		return <td>{this.props.obj.id} - {this.props.obj.name}</td>
	},

	render: function(){
		var name = this.props.name;
		var id = this.props.key;
		return(
			<tr>
				{this.renderElement()}
			</tr>
		);
	}
});

var ItemsTable = React.createClass({
	render: function(){
		var list = [];
		var dados = this.props.dados;

        dados.forEach(function(obj) {
            if (obj.name.toLowerCase().indexOf(this.props.queryString.toLowerCase()) === -1) {
                return;
            }
            list.push(<ItemRow key={obj.id} obj={obj} />);
        }.bind(this));


		return (
			<table>
				<thead>
					<tr><th>Tabela de Itens</th></tr>
				</thead>
				<tbody>
					{list}
				</tbody>
			</table>
		);
	}
});

var Searchbar = React.createClass({
	handleChange: function(){
		this.props.onUserIput(
			this.refs.queryStringInput.value
		);
	},

	render: function(){
		return (
			<form>
				<input 
					type="text" 
					placeholder="search" 
					value={this.props.queryString}
					ref='queryStringInput'
					onChange={this.handleChange}
				/>
			</form>
		);
	}
});

var FilterItemsTable = React.createClass({
	getInitialState: function(){
		return {queryString: ''}
	},
	
	handleUserInput: function(query){
		this.setState({
			queryString: query
		});
	},

	render: function(){
		return (
			<div>
				<Searchbar 
					queryString={this.state.queryString}
					onUserIput={this.handleUserInput}
				/>
				<ItemsTable 
					queryString={this.state.queryString}
					dados={this.props.dados}
				/>
			</div>
		);
	}
});