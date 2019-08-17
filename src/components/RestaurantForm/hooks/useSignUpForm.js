import { useState } from "react";

const useSignUpForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setInputs(initialValues);
    callback();
  };
  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };
  const handleSelectChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      time: event.target.value
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    handleSelectChange,
    inputs
  };
};

export default useSignUpForm;
