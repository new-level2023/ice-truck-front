import { memo } from 'react'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Paginator from "react-hooks-paginator";
import { LayoutOne } from "layouts";
import { Breadcrumb } from "components/Breadcrumb";
import { Sidebar, ShopHeader, ShopProducts } from "components/Shop";
import { getSortedProducts } from "lib/product";
import { Disclaimer } from 'components/Disclaimer';
import { ItemsGridListNav } from 'components/ItemsGridListNav';
import { SearchInput } from 'components/SearchInput'
import { useRouter } from 'next/router';
import { FiltersSidebar } from 'components/Sidebars';
import { setBrands } from "store/slices/brands-slice";
import { getBrands } from 'store/actions/brandsActions';


const brandsExampleData = [{
    text: "Chevrolet/GM",
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathname: '/shop/[slug]',
        query: { slug: "Chevrolet-GM" }
    }
}, {
    text: "Ford",
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathname: '/shop/[slug]',
        query: { slug: "Ford" }
    }
}, {
    text: "Freightliner",
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathname: '/shop/[slug]',
        query: { slug: "Freightliner" }
    }
}, {
    text: "Hino",
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathname: '/shop/[slug]',
        query: { slug: "Hino" }
    }
}, {
    text: "International",
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathname: '/shop/[slug]',
        query: { slug: "International" }
    }
}, {
    text: "Kenworth",
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathname: '/shop/[slug]',
        query: { slug: "Kenworth" }
    }
}, {
    text: "Mack",
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathname: '/shop/[slug]',
        query: { slug: "Mack" }
    }
}, {
    text: "Peterbilt",
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathname: '/shop/[slug]',
        query: { slug: "Peterbilt" }
    }
}, {
    text: "Sprinter",
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathname: '/shop/[slug]',
        query: { slug: "Sprinter" }
    }
}, {
    text: "Volvo/White",
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathname: '/shop/[slug]',
        query: { slug: "Volvo-White" }
    }
}, {
    text: "Western Star",
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathname: '/shop/[slug]',
        query: { slug: "Western-Star" }
    }
}]

const AllBrands = () => {
    const { products } = useSelector((state) => state.product);
    const { brands } = useSelector((state) => state.brands);
    const [layout, setLayout] = useState("grid");
    const [sortType, setSortType] = useState("");
    const [sortValue, setSortValue] = useState("");
    const [filterSortType, setFilterSortType] = useState("");
    const [filterSortValue, setFilterSortValue] = useState("");
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [items, setItems] = useState(brands);
    const [currentData, setCurrentData] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [shopTopFilterStatus, setShopTopFilterStatus] = useState(false);
    const router = useRouter();
    const { search } = router.query;
    const pageLimit = 12;
    const dispatch = useDispatch()

    const getLayout = (layout) => {
        setLayout(layout);
    };

    const getSortParams = (sortType, sortValue) => {
        setSortType(sortType);
        setSortValue(sortValue);
    };

    const getFilterSortParams = (sortType, sortValue) => {
        setFilterSortType(sortType);
        setFilterSortValue(sortValue);
    };

    useEffect(() => {
        //Aca hay que hacer el fetch
        dispatch(getBrands())
        // dispatch(setBrands(brandsExampleData));
    }, [dispatch]);

    useEffect(() => {
        setItems(brands)
    }, [brands])

    useEffect(() => {
        let sortedProducts = getSortedProducts(products, sortType, sortValue);
        const filterSortedProducts = getSortedProducts(
            sortedProducts,
            filterSortType,
            filterSortValue
        );
        sortedProducts = filterSortedProducts;
        setSortedProducts(sortedProducts);
        setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
    }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

    useEffect(() => {
        setItems(brands.filter(i => search ? i.text.toLowerCase().includes(search.toLowerCase()) : true))
    }, [search, brands]);

    return (
        <LayoutOne>
            <div className="shop-content space-pt--r100 space-pb--r100">
                <Container>
                    <Row>
                        <Col lg={9}>
                            {/* shop page header */}

                            <Breadcrumb crumbs={[
                                { href: "/", text: "Home" },
                                { text: "Browse by Brands" },
                            ]}
                                classNameContainer="shop-breadcrumb" />
                            <Disclaimer>
                                Browse by Brands is designed to be used as a guide and there could be multiple options used across different applications/years.
                                Please verify OEM reference numbers or fit before ordering. IceTruck is not responsible for incorrect identification.
                            </Disclaimer>

                            <SearchInput />

                            <ItemsGridListNav items={items} />

                            {/* <ShopHeader
                                getLayout={getLayout}
                                getFilterSortParams={getFilterSortParams}
                                shopTopFilterStatus={shopTopFilterStatus}
                                setShopTopFilterStatus={setShopTopFilterStatus}
                                layout={layout}
                            /> */}
                            {/* shop products */}
                            {/* <ShopProducts layout={layout} products={currentData} /> */}

                            {/* shop product pagination */}
                            {/* <div className="pagination pagination-style pagination-style--two justify-content-center">
                                <Paginator
                                    totalRecords={sortedProducts.length}
                                    pageLimit={pageLimit}
                                    pageNeighbours={2}
                                    setOffset={setOffset}
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                    pageContainerClass="mb-0 mt-0"
                                    pagePrevText="«"
                                    pageNextText="»"
                                />
                            </div> */}
                        </Col>
                        <Col lg={3} className="order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
                            <FiltersSidebar products={items} />
                            {/* sidebar */}
                            {/* <Sidebar products={products} getSortParams={getSortParams} /> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        </LayoutOne>
    );
};


export default memo(AllBrands)
