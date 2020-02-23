import React from 'react';

const SearchBox=({handleChange})=>{
    return (
        <div>
            <input className='bg-light-blue ba b--red ma2 pa2 ' placeholder='Search Friends' type='search' onChange={handleChange}/>

        </div>

    )
}

export default SearchBox;