import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

function SearchInput() {
    const router = useRouter();
    const { query, push } = router;
    const { search = '' } = query;
    const [value, setValue] = useState(search);

    const handleInputChange = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        setValue(search)
    }, []);

    useEffect(() => {
        const { search } = query;
        if (search !== value) {
            if (value) {
                push({ query: { ...query, search: value } })
            } else if (search !== undefined) {
                delete query.search
                push({ query })
            }
        }
    }, [query, value, push]);

    return (
        <div className="search-input-container">
            <label>
                <span>Search</span>
                <input type="text" value={value} onChange={handleInputChange} placeholder="Search within results" />
            </label>
            <button className="search-input-button">Go</button>
        </div>
    )
}

export { SearchInput }
