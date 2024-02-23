import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import "./Category.scss";

const Category = () => {
    const { id } = useParams();
    const { data } = useFetch(`/api/subcategories`);

    console.log(data);

    // Adjust how you access the data based on the response structure
    const products = data?.data;
    const categoryTitle = products?.[0]?.attributes?.subcategories?.data?.[0]?.attributes?.name;

    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">{categoryTitle}</div>
                <Products innerPage={true} products={products} />
            </div>
        </div>
    );
};

export default Category;
