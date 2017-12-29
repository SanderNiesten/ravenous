import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best match': 'best_match',
  'Highest rating': 'rating',
  'Most reviewed': 'review_count'
}

getSortByClass(sortByOption) {
  if (this.state.sortBy === sortByOption) {
    return 'active';
  } else {
    return '';
  }
}

handleSortByChange(sortByOption) {
  this.setState({ sortBy: sortByOption });
}

handleTermChange(event) {

}

handleLocationChange(event) {

}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '', location: '', sortBy: 'best_match'};
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>;
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Lets Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
