import React, { useState } from 'react';

export default function Search ({ searchMovie }) {
    const [search, setSearch] = useState('demo');
    const [type, setType] = useState('');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            searchMovie(search, type)
        }
    }

    const handleFilter = (e) => {
        setType(e.target.dataset.type)
        searchMovie(search, e.target.dataset.type)
    }

        return (
            <div className='row'>
            <div className='input-field'>
            <input className='validate' placeholder='Search' name='search' 
             value={search} onChange={(e) =>  setSearch(e.target.value)}
             onKeyDown={handleKey} />
            <button className='btn search-btn'
            onClick={() => searchMovie(search, type)}>Search Movies</button>
            </div>
                <div>
                    <label>
                        <input class="with-gap" name="type" type="radio" 
                        data-type='all' onChange={handleFilter}
                        checked={type === 'all'}/>
                        <span>All</span>
                    </label>
                    <label>
                        <input class="with-gap" name="type" type="radio" 
                        data-type='movie' onChange={handleFilter}
                        checked={type === 'movie'}/>
                        <span>Movies</span>
                    </label>
                    <label>
                        <input class="with-gap" name="type" type="radio" 
                        data-type='series' onChange={handleFilter}
                        checked={type === 'series'}/>
                        <span>Series</span>
                    </label>
                </div>
            </div>
        )
}