import { useContext, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import RootLayout from "../Layouts/RootLayout";
import Pagination from "../componenets/Pagination";
import axios from "../api/axios";
import Card from "../componenets/Card";
import Footer from "../componenets/Footer";

export default function Home() {

    // for products
    const { auth } = useAuth();
    const { products, setProducts } = useAuth();
    const { categories, setCategories } = useAuth();
    const [selectedCategory, setSelectedCategory] = useState(null);

    // for pagination
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage] = useState(15);

    useEffect(() => {

        const fetchProducts = async () => {

            setLoading(true);
            try {
                const productsInfo = await axios.get('/products');
                const categoriesInfo = await axios.get('/products/categories');
                setProducts(productsInfo?.data?.products || []);
                setCategories(categoriesInfo?.data || []);
                setLoading(false);

            } catch (err) {
                console.log(`error : ${err.message}`);
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    const filteredProducts = selectedCategory ? products.filter((product) => product.category === selectedCategory) : products;

    const [priceRange, setPriceRange] = useState(null);

    const handlePriceRangeChange = (min, max) => {
        setPriceRange({ min, max });
        setCurrentPage(1);
    };

    const filterProductsByPrice = (product) => {
        if (!priceRange) return true; // If no price range is selected, show all products

        return product.price >= priceRange.min && product.price < priceRange.max;
    };

    // const filteredProducts = selectedCategory
    //     ? products.filter((product) => product.category === selectedCategory)
    //     : priceRange ? products.filter(product => filterProductsByPrice(product))
    //         : products;

    // get current products
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = pageNumber => setCurrentPage(pageNumber);


    if (loading) {
        return (
            <>
                <RootLayout />
                <h2 className="text-4xl mx-auto ">Loading...</h2>
            </>)
    }

    return (

        <div className="container">
            <RootLayout />
            {auth.accessToken ?
                (<>
                    <section className="grid grid-cols-5 text-holder h-full">

                        <div className="left-nav h-full col-span-1 bg-[#555555] text-white">
                            <ul className="my-4">
                                {/* <li className=" text-center text-4xl my-2">Categories</li> */}
                                <li
                                    key="all"
                                    onClick={() => {
                                        setSelectedCategory(null);
                                        handlePriceRangeChange(null, null);
                                    }}
                                    className="text-end mr-4 my-2px text-xl" >
                                    All Products
                                </li>
                                {categories.map((category, index) => (
                                    <li
                                        key={index}
                                        onClick={() => setSelectedCategory(category)}
                                        className="text-end mr-4 my-2px text-xl"
                                    >{category}</li>
                                ))}

                                {/* <hr className="text-white my-4" />
                                    <h2 className="text-2xl my-2">Based on price</h2>

                                    <li className="price-sort text-start ml-4 my-2px text-xl"
                                        onClick={() => handlePriceRangeChange(1, 250)}>
                                        less than 250
                                    </li>
                                    <li className="price-sort text-start ml-4 my-2px text-xl"
                                        onClick={() => handlePriceRangeChange(250, 1000)}>
                                        250-1000
                                    </li>
                                    <li className="price-sort text-start ml-4 mb-4 my-2px text-xl"
                                        onClick={() => handlePriceRangeChange(1000, 5000)}>
                                        greater than 1000
                                    </li> */}
                            </ul>
                        </div>

                        <div className="ml-4 mb-4 col-span-4">
                            <div className="grid grid-cols-4">
                                {currentProducts.map(product => (
                                    <Card
                                        id={product.id}
                                        title={product.title}
                                        price={product.price}
                                        images={product.thumbnail} />
                                ))}

                            </div>
                            <Pagination
                                productPerPage={productPerPage}
                                totalProducts={filteredProducts.length}
                                paginate={paginate} />
                        </div>
                    </section>
                    < Footer />


                </>)

                :

                (<>

                    <div className="text-holder w-full mx-auto mt-24">
                        <h1 className="text-6xl text-center">Please <strong>Login</strong> to continue</h1>
                        <h2 className="mt-2 text-5xl text-center">If not a User then Please <strong>Register</strong></h2>
                    </div>

                </>)

            }
        </div>
    )
};