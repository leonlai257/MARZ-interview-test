import { useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem";
import Spinner from "../../components/Spinner/Spinner";
import { Product } from "../../components/interfaces";
import { getProductsData } from "../ApiHelper";
import PageWrapper from "../PageWrapper";

const DATA_STATES = {
  waiting: "WAITING",
  loaded: "LOADED",
  error: "ERROR",
};

const ProductsPage = () => {
  const [loadingState, setLoadingState] = useState(DATA_STATES.waiting);
  const [data, setData] = useState([] as Product[]);

  const getProducts = async () => {
    setLoadingState(DATA_STATES.waiting);
    const { productData, errorOccured } = await getProductsData();
    setData(productData);
    setLoadingState(errorOccured ? DATA_STATES.error : DATA_STATES.loaded);
  };

  const titles = [
    "Product ID",
    "Product Name",
    "Product Photo",
    "Product Status",
  ];

  useEffect(() => {
    getProducts();
  }, []);

  let content;
  if (loadingState === DATA_STATES.waiting)
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4"
        data-testid="loading-spinner-container"
      >
        <Spinner />
      </div>
    );
  else if (loadingState === DATA_STATES.loaded)
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4 flex-col"
        data-testid="pipeline-container"
      >
        <h1 className="text-3xl font-bold text-white">Products</h1>
        <div className="flex flex-row justify-between w-full p-3 ">
          {titles.map((title, index) => (
            <span key={index} className="basis-1/4 text-white font-bold">
              {title}
            </span>
          ))}
        </div>
        {data.length > 0 ? (
          data.map((product, index) => {
            return <ProductItem product={product} key={index} />;
          })
        ) : (
          <div className="flex flex-row justify-center w-full pt-4 text-3xl font-bold text-white">
            No products found!
          </div>
        )}
      </div>
    );
  else
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4 text-3xl font-bold text-white"
        data-testid="error-container"
      >
        An error occured fetching the data!
      </div>
    );

  return <PageWrapper>{content}</PageWrapper>;
};

export default ProductsPage;
