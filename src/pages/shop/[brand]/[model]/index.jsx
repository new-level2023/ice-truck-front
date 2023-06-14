import { memo } from 'react'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paginator from "react-hooks-paginator";
import { Sidebar, ShopHeader, ShopProducts } from "components/Shop";
import { getSortedProducts } from "lib/product";
import { useRouter } from 'next/router';
import { setBrands } from "store/slices/brands-slice";
import { getBrands } from 'store/actions/brandsActions';
import { LayoutBrowseItem } from 'layouts';

const brandsExampleData = [{
    text: "Product N 1",
    category: ["Ford"],
    tag: ["Ford"],
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathnameToAdd: '/[part]',
        queryToAdd: { part: "Body & Cabin" }
    }
}, {
    text: "Product N 2",
    category: ["Ford"],
    tag: ["Ford"],
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathnameToAdd: '/[part]',
        queryToAdd: { part: "Cooling" }
    }
}, {
    text: "Product N 3",
    category: ["Ford"],
    tag: ["Ford"],
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathnameToAdd: '/[part]',
        queryToAdd: { part: "Lighting" }
    }
}, {
    text: "Product N 4",
    category: ["Ford"],
    tag: ["Ford"],
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathnameToAdd: '/[part]',
        queryToAdd: { part: "Air Springs" }
    }
}, {
    text: "Product N 5",
    category: ["Ford"],
    tag: ["Ford"],
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathnameToAdd: '/[part]',
        queryToAdd: { part: "Shocks" }
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
        dispatch(getBrands())
    }, [dispatch]);

    useEffect(() => {
        if (brands.length) {
            setItems(brands)
            //el else de abajo tendria que ser eliminado cuando ya haya data en la db
        } else {
        }
        dispatch(setBrands(brandsExampleData));
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
        <LayoutBrowseItem browseBy="Parts" items={items} />
    );
};


export default memo(AllBrands)
