import Header from "./components/Header";
import PrincipalCard from "./templates/PrincipalCard";
import CarouselSection from "./templates/CarouselSection";
import DescriptionSection from "./templates/DescriptionSection";
import FormSection from "./templates/FormSection";
import Footer from "./components/Footer";

import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  const [uf, setUf] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_IBGE_API_ESTADOS).then((response) => {
      setUf(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      {/* TODO: verificar alinhamento e as fontes */}
      <PrincipalCard />
      <CarouselSection />
      <DescriptionSection />
      <FormSection uf={uf} />
      <Footer />
    </div>
  );
}

export default App;
