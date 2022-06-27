import React from 'react'
import {StarRatingComponent} from 'react-star-rating-component';

const Filter = () => {
  return (
    <div>
        <StarRatingComponent 
          name="rate2" 
          editing={false}
          renderStarIcon={() => <span></span>}
          starCount={10}
          value={8}
          />
    </div>
  )
}

export default Filter