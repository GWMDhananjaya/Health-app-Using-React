import React,{ useContext }  from 'react';
import Form from '../Components/Form';
import { GlobalContext } from '../Components/utils/global.context';


const Contact = () => {
  const { state } = useContext(GlobalContext);
  return (
    <div className={`favs-container ${state.theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
    <div>
     
      <h1 className="font-bold text-1xl ">Want to know more?</h1>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
    </div>
  );
};

export default Contact;
