import { useState, useEffect } from "react";
import { Breadcrumb } from "components/Breadcrumb";
import { Disclaimer } from 'components/Disclaimer';
import { FiltersSidebar } from 'components/Sidebars';
import { Container, Row, Col } from "react-bootstrap";
import { SearchInput } from 'components/SearchInput'
import { ItemsGridListNav } from 'components/ItemsGridListNav';
import { useRouter } from 'next/router';
import { LayoutOne } from "layouts";
import { getSortedProducts } from "lib/product";

const LayoutSearchFilter = ({ browseBy, items, mainPathname }) => {
    const router = useRouter();
    const { pathname, query } = router;
    const [crumbs, setCrumbs] = useState([]);
    const [sortType, setSortType] = useState("");
    const [sortValue, setSortValue] = useState("");
    const [sortedProducts, setSortedProducts] = useState([]);
    const [offset, setOffset] = useState(0);
    const [filterSortType, setFilterSortType] = useState("");
    const [filterSortValue, setFilterSortValue] = useState("");
    const [currentData, setCurrentData] = useState([]);
    const pageLimit = 12;

    const getSortParams = (sortType, sortValue) => {
        setSortType(sortType);
        setSortValue(sortValue);
    };

    const getFilterSortParams = (sortType, sortValue) => {
        setFilterSortType(sortType);
        setFilterSortValue(sortValue);
    };

    useEffect(() => {
        let sortedProducts = getSortedProducts(items, sortType, sortValue);
        const filterSortedProducts = getSortedProducts(
            sortedProducts,
            filterSortType,
            filterSortValue
        );
        sortedProducts = filterSortedProducts;
        setSortedProducts(sortedProducts);
        setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
    }, [offset, items, sortType, sortValue, filterSortType, filterSortValue]);


    useEffect(() => {
        const queryObject = { ...query };
        delete queryObject.search;

        let newPathname = '/shop'
        const newCrumbs = [{ href: "/", text: "Home" }]

        Object.keys(queryObject).map(key => {
            newPathname += `/[${key}]`
            const newQueryObject = {}
            newPathname.match(/\[(.*?)\]/g).forEach(element => {
                const currentKey = element.slice(1, -1)
                if (element !== "shop")
                    newQueryObject[currentKey] = queryObject[currentKey]
            });
            newCrumbs.push({
                href: {
                    pathname: newPathname,
                    query: newQueryObject
                },
                text: query[key]
            })
        })
        if (browseBy) {
            newCrumbs.push({ text: `Browse by ${browseBy}` })
        }
        setCrumbs(newCrumbs)
    }, [pathname, browseBy, query]);


    return (
        <LayoutOne>
            <div className="shop-content space-pt--r100 space-pb--r100">
                <Container>
                    <Row>
                        <Col lg={9}>
                            <Breadcrumb crumbs={crumbs}
                                classNameContainer="shop-breadcrumb" />
                            <Disclaimer>
                                Browse by {browseBy} is designed to be used as a guide and there could be multiple options used across different applications/years.
                                Please verify OEM reference numbers or fit before ordering. IceTruck is not responsible for incorrect identification.
                            </Disclaimer>

                            <SearchInput />

                            <ItemsGridListNav items={items} mainPathname={mainPathname} />
                        </Col>
                        <Col lg={3} className="order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
                            <FiltersSidebar products={items} getSortParams={getSortParams} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </LayoutOne>
    );
};

export default LayoutSearchFilter;



