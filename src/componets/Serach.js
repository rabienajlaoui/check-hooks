import StarRatingComponent from 'react-star-rating-component';

const Search = ({setSearch, setRate}) => {
  return (
    <div>
        <input placeholder='Search' onChange={(e)=>setSearch(e.target.value)}></input>
        <StarRatingComponent name='rate' onStarClick={(star)=>setRate(star)} />
    </div>
  )
}

export default Search