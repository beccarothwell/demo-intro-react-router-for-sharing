import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();

  return (
    <section className="content has-text-centered">
      <p>Welcome to the page for product: {params.productId}</p>
      <p>
        <strong className="is-size-1"> {params.productId} </strong>
      </p>
    </section>
  );
};

export default Product;
