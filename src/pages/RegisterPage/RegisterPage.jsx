import RegistrationForm from "../../components/UserAcountLayout/RegistrationForm/RegistrationForm";

const RegisterPage = () => {
  return (
    <div>
      <h1>Registration</h1>
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;

// import { useState } from 'react';
// import RegistrationForm from './RegistrationForm';

// function Page() {
//   const [showForm, setShowForm] = useState(false);

//   const handleClick = () => {
//     setShowForm(true);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Показати форму реєстрації</button>

//       {showForm && (
//         <div>
//           <h2>Name</h2>
//           <RegistrationForm />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Page;
