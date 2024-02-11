import yx1earphonesDesktop from "../assets/home/desktop/image-earphones-yx1.jpg";
import zx9SpeakerDesktop from "../assets/home/desktop/image-speaker-zx9.png";
import yx1earphonesMobile from "../assets/home/mobile/image-earphones-yx1.jpg";
import zx9SpeakerMobile from "../assets/home/mobile/image-speaker-zx9.png";
import yx1earphonesTablet from "../assets/home/tablet/image-earphones-yx1.jpg";
import zx9SpeakerTablet from "../assets/home/tablet/image-speaker-zx9.png";
import GearLocation from "../components/GearLocation";
import ProductButton from "../components/ProductButton";
import ShopLinks from "../components/ShopLinks";
import { MotionDiv, MotionMain } from "../libs/framer";

const HomePage: React.FC = () => {
  return (
    <MotionMain initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
      <section className="hero">
        <div className="hero-container container-img">
          <div className="hero-container-img">
            <div className="hero-container-text">
              <h2>NEW PRODUCT</h2>
              <h1 className="big-title">XX99 Mark II HeadphoneS</h1>
              <p className="text">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <ProductButton name="See Product" classname="btn btn-orange" />
            </div>
          </div>
        </div>
      </section>
      <section className="links">
        <ShopLinks />
      </section>
      <section className="homeProducts container">
        <MotionDiv
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="homeProducts-zx9"
        >
          <picture className="homeProducts-zx9-img">
            <source srcSet={zx9SpeakerDesktop} media="(min-width: 1024px)" />
            <source srcSet={zx9SpeakerTablet} media="(min-width: 768px)" />
            <img src={zx9SpeakerMobile} alt="Picture of the ZX9 speaker" />
          </picture>
          <div className="homeProducts-zx9-text">
            <h3 className="big-title">ZX9 SPEAKER</h3>
            <p className="text">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <ProductButton name="See Product" classname="btn btn-black" />
          </div>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="homeProducts-zx7"
        >
          <h3 className="homeProducts-title homeProducts-title-space">
            ZX7 SPEAKER
          </h3>
          <ProductButton name="See Product" classname="btn btn-transparent" />
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="homeProducts-yx1"
        >
          <picture className="homeProducts-yx1-img">
            <source srcSet={yx1earphonesDesktop} media="(min-width: 1024px)" />
            <source srcSet={yx1earphonesTablet} media="(min-width: 768px)" />
            <img src={yx1earphonesMobile} alt="Picture of the ZX9 speaker" />
          </picture>
          <div className="homeProducts-yx1-text">
            <h3 className="homeProducts-title homeProducts-title-space">
              YX1 EARPHONES
            </h3>
            <ProductButton name="See Product" classname="btn btn-transparent" />
          </div>
        </MotionDiv>
      </section>
      <GearLocation />
    </MotionMain>
  );
};

export default HomePage;
