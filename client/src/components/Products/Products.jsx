import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
    return (
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className={`products ${innerPage ? "innerPage" : ""}`}>
                {products?.data?.map((item) => {
                    // Prepare image URL
                    const imageUrl = process.env.REACT_APP_STRAPI_DEV_URL+item?.attributes?.img?.data[0]?.attributes?.url;

                    // Prepare the modified product data
                    const modifiedData = {
                        ...item?.attributes,
                        imageUrl,
                    };

                    return (
                        <Product
                            key={item?.id}
                            id={item?.id}
                            data={modifiedData} // Pass the modified data
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Products;

