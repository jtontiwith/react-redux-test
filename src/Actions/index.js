import $ from 'jquery';

export const API_RESULT = 'API_RESULT'; 
export const apiResult = (cleanedAPIData, searchText) => {
  console.log(cleanedAPIData);
  console.log(searchText);
  return {
    type: API_RESULT,
    searchText: searchText,
    photos: cleanedAPIData 
  }
}

export const fetchPhotos = (searchText) => dispatch => {
  const flickerAPI = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=${searchText}`;
  
  $.ajax({ 
    method: "get",
    dataType: "jsonp",
    jsonpCallback: 'jsonFlickrFeed',
    url: flickerAPI,
    success: function(data) { 
      const cleanedAPIData = data.items.map(photo => {
       return {
                title: photo.title, 
                image: photo.media.m
              }
      })
      dispatch(apiResult(cleanedAPIData, searchText));
    }
  });
}

