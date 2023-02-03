
import HeroPage from "./components/HeroPage";
import Service from "./components/Service";
import WhyChooseUs from "./components/WhyChooseUs";
import marketing from "../src/images/marketing.png"
import ServiceFlexBox from "./components/ServiceFlexBox";
import ServicePage from "./components/ServicePage";
import "../src/components/style.css"
function App() {
  return (
    <div className="bg-[#fefefe]  scroll">
      <div className="">
        <HeroPage/>
      </div>
      <div className="absolute top-[120vh] w-[100%] overflow-hidden scroll-smooth">
        <div >
          <Service/>
        </div>
        <div className="px-[20px] overflow-hidden scroll-smooth">
          <WhyChooseUs/>
        </div>
        <div>
          <img src={marketing} alt=""/>
          <ServiceFlexBox/>
          <ServicePage/>
        </div>
      </div>
    </div>

  
  );
}

export default App;
