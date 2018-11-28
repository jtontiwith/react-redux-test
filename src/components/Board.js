import React from 'react';
import { connect } from 'react-redux';
import './Board.css';
import SearchForm from './SearchForm';
import Photo from './Photo';
import { userSearch, fetchPhotos } from '../Actions';

export class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  //what about constructor super etc it's absense doesn't change anything.

  userSearch = (searchText) => {
    console.log(searchText)   
    this.props.dispatch(userSearch(searchText));
    this.props.dispatch(fetchPhotos());
  }
  
  render() {
    return (
      <React.Fragment>
        <SearchForm userSearch={this.userSearch} />
        <Photo />
      </React.Fragment>
    );
  }
}

export default connect()(Board);