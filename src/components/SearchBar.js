import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/fetchImages'


class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			searchTerm: ''
		}
	}

	handleChange = (event) => {
		this.setState({ searchTerm: event.target.value });
	}

	handleSubmit= (event) => {
		event.preventDefault();
		this.props.fetchImages(this.state.searchTerm);
	}

  render() {
    return (
      <div>
	      <form id="searchbar" onSubmit={this.handleSubmit}>
	        <label>
	          <input id="searchbar-input" className="input" type="text" value={this.state.value} onChange={this.handleChange} />
	        </label>
	        <input className="button is-info" type="submit" value="Search" />
	      </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchImages: (query) => { dispatch(fetchImages(query)) }
})

export default connect(null, mapDispatchToProps)(SearchBar);