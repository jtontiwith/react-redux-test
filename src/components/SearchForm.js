import React from 'react';
import './SearchForm.css'

export default function SearchForm(props) {
  let textInput = null;

  const onSubmit = (e) => {
    e.preventDefault();
    const searchText = textInput.value.trim();
    if (searchText && props.userSearch) {
      props.userSearch(searchText);
    }
    textInput.value = '';
  }
  
  return (
    <form onSubmit={onSubmit}>
      <input type="text" className="search-input" ref={(input) => { textInput = input }} aria-label="Seach and image" />
      <div>
        <button className="button">Search</button>
      </div>
    </form>
  );
}

/* What I don’t know that I need to know to figure this out:
-what the difference between putting a method on a stateless component
vs a stateful component
-refs on stateless vs stateful 
  You can't 


Other decisions or thoughts
  -should I send the input from the form to parent component 
  or just dispatch it right there, and if I do send it right from
  the SearchForm component then it'll have to be stateful anyway and
  thus it I don't have to mess around with this ref trickery 
    -after looking at this SO post https://stackoverflow.com/questions/36559661/how-can-i-dispatch-from-child-components-in-react-redux
    it talks about the fact that I should structure that app to have
    unconnected "dumb components" to display UI and connected "smart
    components" responsible for composing non-connected componets, so 
    based on that it makes sense to keep SearchForm unconnected




*/
