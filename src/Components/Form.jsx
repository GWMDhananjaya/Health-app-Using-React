// import React from "react";


// const Form = () => {
//   //Aqui deberan implementar el form completo con sus validaciones

//   return (
//     <div>
//       <form>
//       </form>
//     </div>
//   );
// };

// export default Form;
import React, { useState } from 'react';

const Form = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (fullName.length < 5 || !email.includes('@')) {
      setError('Please check your information again');
      return;
    }

    // On success
    setSuccessMessage(`Thank you ${fullName}, we will contact you via email as soon as possible.`);
    setFullName('');
    setEmail('');
    setError('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Form;
