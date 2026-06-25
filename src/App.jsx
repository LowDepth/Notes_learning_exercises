import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Example1 from "./pages/Example1";
import Example2 from "./pages/Example2";
import Example3 from "./pages/Example3";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />

          <main>
            <Routes>
              <Route path="/Example1" element={<Example1 />} />
              <Route path="/Example2" element={<Example2 />} />
              <Route path="/Example3" element={<Example3 />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
