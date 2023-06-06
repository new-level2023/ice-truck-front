import { memo } from 'react'
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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

const items = [{
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
    const [layout, setLayout] = useState("grid");
    const [sortType, setSortType] = useState("");
    const [sortValue, setSortValue] = useState("");
    const [filterSortType, setFilterSortType] = useState("");
    const [filterSortValue, setFilterSortValue] = useState("");
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [shopTopFilterStatus, setShopTopFilterStatus] = useState(false);
    const router = useRouter();
    const [models, setModels] = useState(items);
    const { search } = router.query;

    const pageLimit = 12;

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
        setModels(items.filter(i => search ? i.text.includes(search) : true))
    }, [search, items]);

    return (
        <LayoutOne>
            <div className="shop-content space-pt--r100 space-pb--r100">
                <Container>
                    <Row>
                        <Col lg={9}>
                            {/* shop page header */}

                            <Breadcrumb crumbs={[
                                { href: "/", text: "Home" },
                                { text: "Browse by Make/Model" },
                            ]}
                                classNameContainer="shop-breadcrumb" />
                            <Disclaimer>
                                Browse by Make/Model is designed to be used as a guide and there could be multiple options used across different applications/years.
                                Please verify OEM reference numbers or fit before ordering. IceTruck is not responsible for incorrect identification.
                            </Disclaimer>

                            <SearchInput />

                            <ItemsGridListNav items={models} />

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
                            <FiltersSidebar products={models} />
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
