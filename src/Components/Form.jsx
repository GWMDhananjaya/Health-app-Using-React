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
    <div className='flex items-center justify-center '>
     <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder='Full name'
          className=''
        />
      </label>
      <br />
      <label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
        />
      </label>
      <br />
      <button className='px-20 py-2 ml-1 text-black bg-gray-100 border-2 hover:bg-gray-200' type="submit">Submit</button>
    </form>
    <br />
    </div>
   <div className='flex items-center justify-center mt-4'>
   {error && <p>{error}</p>}
   {successMessage && <p>{successMessage}</p>}
   </div>
   </div>
     
    
  );
};

export default Form;
