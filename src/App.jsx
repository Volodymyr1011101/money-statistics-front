import { useState } from "react";
import Header from "./components/UserAcountLayout/Header/Header";
import RegistrationForm from "./components/UserAcountLayout/RegistrationForm/RegistrationForm";

function App() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className="App">
      <Header onLogoClick={toggleForm} />

      {showForm && (
        <div>
          <h2>Name</h2>
          <RegistrationForm />
        </div>
      )}

      {/* Інший контент сторінки */}
    </div>
  );
}

export default App;
