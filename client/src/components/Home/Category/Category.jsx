import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ categories }) => {
    const navigate = useNavigate();

    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories?.data?.map((category) => {
                    const categoryTitle = category?.attributes?.title;
                    const imageUrl = process.env.REACT_APP_STRAPI_DEV_URL+category?.attributes?.img?.data?.attributes?.url;

                    return (
                        <div
                            key={category.id}
                            className="category"
                            onClick={() => navigate(`/category/${category.id}`)}
                        >
                            <img src={imageUrl} alt={categoryTitle} />
                            <h2>{categoryTitle}</h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Category;

