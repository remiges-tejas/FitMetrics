import LogoText from "./LogoText";
const Hero = () => {
  return (
    <section className=" text-black py-12">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <LogoText/>
        <p className="text-lg text-charcoalGray md:text-xl mb-8 mt-2 font-sans">
          Easily calculate your Body Mass Index (BMI) and understand your health
          better.
        </p>
        <div className="w-full max-w-md">
    

        </div>
        <button className="bg-coral text-white font-semibold py-2 px-4 rounded shadow hover:bg-teal-700 transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
