import GearLocation from "../components/GearLocation";
import ShopLinks from "../components/ShopLinks";
import { MotionMain } from "../libs/framer";

const HeadPhones = () => {
  return (
    <MotionMain initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
      <section className="hero-title">
        <h1>HEADPHONES</h1>
      </section>
      <section className="category container">
        <div className="category-article new-product">
          <h4>NEW PRODUCT</h4>
          <h2>XX99 MARK II HEADPHONES</h2>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button>SEE PRODUCT</button>
        </div>
        <div className="category-article-reverse">
          <h2>XX99 MARK I HEADPHONES</h2>
          <p>
            Experience natural, lifelike audio made for the passionate music
            enthusiast.
          </p>
          <button>SEE PRODUCT</button>
        </div>
        <div className="category-article">
          <h2>XX59 HEADPHONES</h2>
          <p>
            Experience natural, lifelike audio made for the passionate music
            enthusiast.
          </p>
          <button>SEE PRODUCT</button>
        </div>
      </section>
      <ShopLinks />
      <GearLocation />
    </MotionMain>
  );
};

export default HeadPhones;
