import Header from "./components/Header";
import PrincipalCard from "./templates/PrincipalCard";
import CarouselSection from "./templates/CarouselSection";
import DescriptionSection from "./templates/DescriptionSection";
import FormSection from "./templates/FormSection";
import Footer from "./components/Footer";

import dataUf from "./data/estados.json";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAxios } from "./hooks/useAxios";

type Estado = {
  nome: string,
  sigla: string,
};

function App() {
  const [uf, setUf] = useState([]);
  const [error, setError] = useState(null);

  const { data } = useAxios(dataUf);

  // console.log(dataUf.data);

  return (
    <div className="App">
      <Header />
      <ul>
        {data?.map((uf) => {
          return (
            <li key={uf.sigla}>
              <strong>{uf.nome}</strong>
            </li>
          );
        })}
      </ul>
      {/* TODO: verificar alinhamento e as fontes */}
      <PrincipalCard />
      <CarouselSection />
      <DescriptionSection />
      <FormSection uf={dataUf.data} />
      <Footer />
    </div>
  );
}

export default App;
