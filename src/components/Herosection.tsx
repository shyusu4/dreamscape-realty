import HeroImage from '../assets/hero-house.jpg';

const Herosection = () => {
  return (
    <section>
      <div>
        <img
          src={HeroImage}
          alt="modern house"
          className="rounded-xl opacity-90 w-full h-[580px] object-cover"
        />
      </div>
    </section>
  );
};

export default Herosection;
