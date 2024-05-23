import { useState } from 'react';

const useForm = (initialValues) => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormValues(initialValues);
  };

  return [formValues, handleChange, resetForm];
};

export default useForm;