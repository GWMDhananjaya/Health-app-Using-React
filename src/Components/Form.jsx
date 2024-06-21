import React, { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (fullName.length < 5 || !email.includes("@")) {
      setError("Por favor revisa tu información nuevamente");
      return;
    }

    // On success
    setSuccessMessage(
      `Gracias ${fullName}, Nos pondremos en contacto con usted por correo electrónico lo antes posible.`
    );
    setFullName("");
    setEmail("");
    setError("");
  };

  return (
    <div>
      <div className="flex items-center justify-center ">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full name"
              className=""
            />
          </label>
          <br />
          <label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </label>
          <br />
          <button
            className="px-20 py-2 mt-1 ml-1 text-black bg-gray-100 border-2 hover:bg-gray-200"
            type="submit"
          >
            Submit
          </button>
        </form>
        <br />
      </div>
      <div className="flex mt-4">
        {error && <p>{error}</p>}
        {successMessage && <p>{successMessage}</p>}
      </div>
    </div>
  );
};

export default Form;
