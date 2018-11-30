import React from 'react';
import { connect } from 'react-redux';
import './Board.css';
import SearchForm from './SearchForm';
import Photo from './Photo';
import { fetchPhotos } from '../Actions';

export class Board extends React.Component {
  //what about constructor super etc it's absense doesn't change anything.

  userSearch = (searchText) => {
    this.props.dispatch(fetchPhotos(searchText));
  }
  
  render() {
    let output;
    if(this.props.photos.length > 0) {
      output = this.props.photos.map((photo, index) => {
        return <Photo key={index} title={photo.title} image={photo.image} />;
     });
    } else {
      output = <div>Get ready to see some photos...</div>;
    }
    
    return (
      <React.Fragment>
        <SearchForm userSearch={this.userSearch} />
        <ul className="photo-list">
          {output}
        </ul>
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => {
  console.log(state);
  return {
    photos: state.photos
  }
}


export default connect(mapStateToProps)(Board);