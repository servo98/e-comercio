import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const { data } = await getProductDetail(productId);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getData();
  // }, []);

  return <div>ProductDetail</div>;
};

export default ProductDetail;
