import React from 'react'

function SubCategory({ subcategory }) {
    return (<div className="subcategory-container bg-gray">
        <span className="subtitle">Sub-Category: </span><span className="subcategory">{subcategory}</span>
    </div>
    )
}

export default SubCategory;
