import { Link } from "react-router-dom";
import dbxx99I from "../assets/products/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import mbxx99I from "../assets/products/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import tbxx99I from "../assets/products/product-xx99-mark-one-headphones/tablet/image-product.jpg";
import GearLocation from "../components/GearLocation";
import ShopLinks from "../components/ShopLinks";
import { MotionMain } from "../libs/framer";

const DetailProduct = () => {
  return (
    <MotionMain initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
      <section className="detail container">
        <Link className="goBack text" to="/headphones">
          Go Back
        </Link>

        <div className="detail-product">
          <picture className="detail-product-img">
            <source srcSet={dbxx99I} media="(min-width: 1024px)" />
            <source srcSet={tbxx99I} media="(min-width: 768px)" />
            <img src={mbxx99I} alt="" />
          </picture>
          <div className="detail-product-content">
            <h4 className="new-product">NEW PRODUCT</h4>
            <h2 className="mid-title">XX99 MARK II HEADPHONES</h2>
            <p className="text">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <p className="detail-product-content-price">$ 2,999</p>

            <div className="add-to-cart">
              <div className="add-to-cart-number">
                <button>-</button>
                <p>0</p>
                <button>+</button>
              </div>
              <button className="btn btn-orange">Add to cart</button>
            </div>
          </div>
        </div>
      </section>
      <ShopLinks />
      <GearLocation />
    </MotionMain>
  );
};

export default DetailProduct;
