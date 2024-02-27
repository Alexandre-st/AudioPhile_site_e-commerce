import { Link } from "react-router-dom";
import dbxx59 from "../assets/products/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import mbxx59 from "../assets/products/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import tbxx59 from "../assets/products/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import dbxx99I from "../assets/products/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import mbxx99I from "../assets/products/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import tbxx99I from "../assets/products/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import dbxx99II from "../assets/products/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import mbxx99II from "../assets/products/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import tbxx99II from "../assets/products/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import GearLocation from "../components/GearLocation";
import ShopLinks from "../components/ShopLinks";
import { MotionMain } from "../libs/framer";

const HeadPhones = () => {
  return (
    <MotionMain initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
      <section className="hero-title">
        <h1>HEADPHONES</h1>
      </section>
      <section className="container">
        <div className="category">
          <div className="category-article new-product">
            <picture className="category-article-img">
              <source srcSet={dbxx99II} media="(min-width: 1024px)" />
              <source srcSet={tbxx99II} media="(min-width: 768px)" />
              <img src={mbxx99II} alt="" />
            </picture>
            <div className="category-article-content">
              <h4 className="new-product">NEW PRODUCT</h4>
              <Link to="xx99">
                <h2 className="mid-title">XX99 MARK II HEADPHONES</h2>
              </Link>
              <p className="text">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <Link to="xx99" className="btn btn-orange">
                SEE PRODUCT
              </Link>
            </div>
          </div>
          <div className="category-article category-article-reverse">
            <picture className="category-article-img">
              <source srcSet={dbxx99I} media="(min-width: 1024px)" />
              <source srcSet={tbxx99I} media="(min-width: 768px)" />
              <img src={mbxx99I} alt="" />
            </picture>
            <div className="category-article-content">
              <h2 className="mid-title">XX99 MARK I HEADPHONES</h2>
              <p className="text">
                Experience natural, lifelike audio made for the passionate music
                enthusiast.
              </p>
              <button className="btn btn-orange">SEE PRODUCT</button>
            </div>
          </div>
          <div className="category-article">
            <picture className="category-article-img">
              <source srcSet={dbxx59} media="(min-width: 1024px)" />
              <source srcSet={tbxx59} media="(min-width: 768px)" />
              <img src={mbxx59} alt="" />
            </picture>
            <div className="category-article-content">
              <h2 className="mid-title">XX59 HEADPHONES</h2>
              <p className="text">
                Experience natural, lifelike audio made for the passionate music
                enthusiast.
              </p>
              <button className="btn btn-orange">SEE PRODUCT</button>
            </div>
          </div>
        </div>
      </section>
      <ShopLinks />
      <GearLocation />
    </MotionMain>
  );
};

export default HeadPhones;
