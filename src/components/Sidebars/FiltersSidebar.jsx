
import { IoIosArrowForward } from "react-icons/io";
import {
    getIndividualCategories,
    getIndividualTags,
    setActiveSort
} from "lib/product";

const FiltersSidebar = ({ products, getSortParams }) => {
    const categories = getIndividualCategories(products);
    const tags = getIndividualTags(products);
    console.log(getIndividualTags(products))
    console.log({ tags })
    console.log({ products })

    return (
        <div className="sidebar">
            <div className="widget">
                <h5 className="widget__title">Categories</h5>
                {categories.length > 0 ? (
                    <ul className="widget__categories">
                        {categories &&
                            categories.map((category, key) => {
                                return (
                                    <li key={key}>
                                        <button
                                            onClick={(e) => {
                                                getSortParams("category", category.name);
                                                setActiveSort(e);
                                            }}
                                        >
                                            <IoIosArrowForward />
                                            <span className="categories-name">{category.name}</span>
                                            <span className="categories-num">({category.count})</span>
                                        </button>
                                    </li>
                                );
                            })}
                    </ul>
                ) : (
                    "No categories found"
                )}
            </div>

            <div className="widget">
                <h5 className="widget__title">tags</h5>
                {tags.length > 0 ? (
                    <div className="widget__tags">
                        {tags &&
                            tags.map((tag, key) => {
                                return (
                                    <button
                                        key={key}
                                        onClick={(e) => {
                                            getSortParams("tag", tag);
                                            setActiveSort(e);
                                        }}
                                    >
                                        {tag}
                                    </button>
                                );
                            })}
                    </div>
                ) : (
                    "No tags found"
                )}
            </div>
        </div>
    )
}

export { FiltersSidebar }
