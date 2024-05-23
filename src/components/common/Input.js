import React from 'react';

const Input = ({ label, type, id, value, onChange, ...rest }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...rest}
      />
    </div>
  );
};

export default Input;