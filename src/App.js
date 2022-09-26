import Header from "./components/Header";
import SessionMain from "./templates/SessionMain";
import SessionOne from "./templates/SessionOne";
import SessionTwo from "./templates/SessionTwo";
import SessionThree from "./templates/SessionThree";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* TODO: verificar alinhamento e as fontes */}

      <SessionMain />

      <SessionOne />

      <SessionTwo />

      <SessionThree />

      <Footer />
    </div>
  );
}

export default App;
