
export const USER_SEARCH = 'USER_SEARCH'; 

export const userSearch = (searchText) => {
  console.log(searchText);
  return {
    type: USER_SEARCH,
    searchText
  }
}

const flickerURL = 'https://api.flickr.com/services/feeds/photos_public.gne';
//const flickerURL1 = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';


export const fetchPhotos = () => dispatch => {
  fetch(flickerURL, {
    mode: 'no-cors',
    method: 'GET'
  }).then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then((res) => console.log(res))
}

