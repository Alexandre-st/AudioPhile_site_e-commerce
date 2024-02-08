import gearImageDesktop from "../assets/shared/desktop/image-best-gear.jpg";
import gearImage from "../assets/shared/mobile/image-best-gear.jpg";
import gearImageTablet from "../assets/shared/tablet/image-best-gear.jpg";

const GearLocation = () => {
  return (
    <section className="gearLocation container">
      <div className="gearLocation-content">
        <picture className="gearLocation-content-img">
          <source srcSet={gearImageDesktop} media="(min-width: 1024px)" />
          <source srcSet={gearImageTablet} media="(min-width: 768px)" />
          <img
            src={gearImage}
            alt="Picture of someone trying the XX99 HeadPhones"
          />
        </picture>
        <div className="gearLocation-content-text">
          <h3 className="gearLocation-content-title">
            Bringing you the <span>best</span> audio gear
          </h3>
          <p className="text">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GearLocation;
