import { motion } from "framer-motion";
import LogoText from "./LogoText";

const HeroX = () => {
  return (
    <section className="text-black  py-12">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <LogoText />
        </motion.div>
        <motion.p
          className="text-lg text-charcoalGray md:text-xl mb-8 mt-2 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Easily calculate your Body Mass Index (BMI) and understand your health better.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-coral text-white font-semibold py-2 px-4 rounded shadow hover:bg-teal-700 transition duration-300"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

const HowItWorks = () => {
    return (
      <section className="py-12 bg-bglight">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-teal-800 mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-softGold">Step 1: Upload CSV</h3>
              <p className="text-charcoalGray">
                Upload a CSV file containing the height and weight of multiple individuals. Our system
                will process the data for further analysis.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-softGold">Step 2: Data Analysis</h3>
              <p className="text-charcoalGray">
                Once the file is uploaded, we analyze the data to calculate the Body Mass Index (BMI)
                for each individual based on the provided height and weight.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-softGold">Step 3: View Results</h3>
              <p className="text-charcoalGray">
                After analysis, the BMI and corresponding health status (underweight, healthy, overweight, etc.)
                are displayed in a clear, organized table format for easy review.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
  
const CTASection = () => {
  return (
    <section className="py-12 bg-teal-700 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Take Control of Your Health Today</h2>
        <p className="text-lg mb-6">
          Start tracking your health metrics and make informed decisions about your fitness journey.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-softGold text-black font-semibold py-2 px-4 rounded shadow hover:bg-yellow-600 transition duration-300"
        >
          Coming Soon
        </motion.button>
      </div>
    </section>
  );
};


const FitMetricsPage = () => {
  return (
    <>
      <HeroX />
      <HowItWorks />
      <CTASection />
    </>
  );
};

export default FitMetricsPage;
