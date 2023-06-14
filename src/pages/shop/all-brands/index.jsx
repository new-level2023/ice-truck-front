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
    text: "Chevrolet/GM",
    category: ["Chevrolet/GM"],
    tag: ["Chevrolet/GM"],
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathnameToAdd: '/[brand]',
        queryToAdd: { brand: "Chevrolet-GM" }
    }
}, {
    text: "Ford",
    category: ["Ford"],
    tag: ["Ford"],
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathnameToAdd: '/[brand]',
        queryToAdd: { brand: "Ford" }
    }
}, {
    text: "Freightliner",
    category: ["Freightliner"],
    tag: ["Freightliner"],
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathnameToAdd: '/[brand]',
        queryToAdd: { brand: "Freightliner" }
    }
}, {
    text: "Hino",
    category: ["Hino"],
    tag: ["Hino"],
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathnameToAdd: '/[brand]',
        queryToAdd: { brand: "Hino" }
    }
}, {
    text: "International",
    category: ["International"],
    tag: ["International"],
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathnameToAdd: '/[brand]',
        queryToAdd: { brand: "International" }
    }
}, {
    text: "Kenworth",
    category: ["Kenworth"],
    tag: ["Kenworth"],
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathnameToAdd: '/[brand]',
        queryToAdd: { brand: "Kenworth" }
    }
}, {
    text: "Mack",
    category: ["Mack"],
    tag: ["Mack"],
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathnameToAdd: '/[brand]',
        queryToAdd: { brand: "Mack" }
    }
}, {
    text: "Peterbilt",
    category: ["Peterbilt"],
    tag: ["Peterbilt"],
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathnameToAdd: '/[brand]',
        queryToAdd: { brand: "Peterbilt" }
    }
}, {
    text: "Sprinter",
    category: ["Sprinter"],
    tag: ["Sprinter"],
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathnameToAdd: '/[brand]',
        queryToAdd: { brand: "Sprinter" }
    }
}, {
    text: "Volvo/White",
    category: ["Volvo/White"],
    tag: ["Volvo/White"],
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathnameToAdd: '/[brand]',
        queryToAdd: { brand: "Volvo-White" }
    }
}, {
    text: "Western Star",
    category: ["Western Star"],
    tag: ["Western Star"],
    img: "/assets/images/models/Model_Sprinter.webp",
    href: {
        pathnameToAdd: '/[brand]',
        queryToAdd: { brand: "Western-Star" }
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
    }, [brands, brandsExampleData])

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
        <LayoutBrowseItem browseBy="Brands" items={items} mainPathname="/shop" />
    );
};


export default memo(AllBrands)
