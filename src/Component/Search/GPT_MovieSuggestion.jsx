import React from 'react'
import { useSelector } from 'react-redux'
import UsesearchList from '../hooks/UsesearchList'
import MovieList from '../MainPage/MovieList'
const GPT_MovieSuggestion = () => {
  const search_word=useSelector(store=>store?.GPTSlice?.searchWord);
  UsesearchList();
  const searchList=useSelector(store=>store?.GPTSlice?.searchedList);



  if(!search_word || !searchList ) return null;
  return (
    <div>
      <MovieList title={"Result"} movies={searchList}/>
    </div>
  )
}

export default GPT_MovieSuggestion