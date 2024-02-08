import { Link } from "react-router-dom";
import arrowLink from "../assets/shared/desktop/icon-arrow-right.svg";
import earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";

const ShopLinks = () => {
  return (
    <section className="shopLink container">
      <Link className="shopLink-content" to="/headphones">
        <img
          className="shopLink-content-img"
          src={headphones}
          alt="Link to headphones"
        />
        <div className="shopLink-content-text">
          <h3 className="shopLink-content-title">HEADPHONES</h3>
          <div className="shopLink-content-text-link">
            <p>Shop</p>
            <img src={arrowLink} alt="Arrow to the shop" />
          </div>
        </div>
      </Link>
      <Link className="shopLink-content" to="/speakers">
        <img
          className="shopLink-content-img"
          src={speakers}
          alt="Link to speakers"
        />
        <div className="shopLink-content-text">
          <h3 className="shopLink-content-title">SPEAKERS</h3>
          <div className="shopLink-content-text-link">
            <p>Shop</p>
            <img src={arrowLink} alt="Arrow to the shop" />
          </div>
        </div>
      </Link>
      <Link className="shopLink-content" to="/earphones">
        <img
          className="shopLink-content-img"
          src={earphones}
          alt="Link to earphones"
        />
        <div className="shopLink-content-text">
          <h3 className="shopLink-content-title">EARPHONES</h3>
          <div className="shopLink-content-text-link" to="/earphones">
            <p>Shop</p>
            <img src={arrowLink} alt="Arrow to the shop" />
          </div>
        </div>
      </Link>
    </section>
  );
};

export default ShopLinks;
