import FooterSection from "./components/FooterSection";
import FormSection from "./components/FormSection";
import LandingSection from "./components/LandingSection";

function App() {
  return (
    <div className="md:max-w-5xl md:m-auto md:flex md:mt-15 md:pt-20">
      <LandingSection />
      <FormSection />
      <FooterSection />
    </div>
  );
}

export default App;
