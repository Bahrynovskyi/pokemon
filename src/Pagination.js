import React from 'react'
import "./styles.css"
const Pagination = ({ gotoNextPage, gotoPrevPage }) => {
    return (
        <div className='buttons'>
            <button onClick={gotoPrevPage} disabled={!gotoPrevPage}>Previous</button>
            <button onClick={gotoNextPage} disabled={!gotoNextPage}>Next</button>
        </div>
    )
}

export default Pagination