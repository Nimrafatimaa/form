import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
    reset();
  };

  return (
  <div>
      <div className="max-w-md h-screen mx-auto flex items-center justify-center">
      <form  className='w-full shadow-lg shadow-[#dfdfdf] bg-white p-4 rounded'  onSubmit={handleSubmit(onSubmit)}>
        <h1 className='font-[650] mb-6 text-4xl'>Form</h1>
        <hr className='mb-6' />
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700">First Name</label>
          <input
            type="text"
            id="firstName"
            {...register('firstName', { required: true })}
            className={`form-input mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-400 focus:outline-none`}
          />
          {errors.firstName && <span className="text-red-500">First Name is required</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
          <input
            type="text"
            id="lastName"
            {...register('lastName', { required: true })}
            className={`form-input mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-400 focus:outline-none`}
          />
          {errors.lastName && <span className="text-red-500">Last Name is required</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">E-mail</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            className={`form-input mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-400 focus:outline-none`}
          />
          {errors.email && <span className="text-red-500">Invalid email address</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">Phone</label>
          <input
            type="tel"
            id="phone"
            {...register('phone', { required: true, pattern: /^\d{11}$/ })}
            className={`form-input mt-1 block w-full rounded-md px-4 py-2 border border-gray-300 focus:border-blue-400 focus:outline-none`}
          />
          {errors.phone && <span className="text-red-500">Please enter a valid 11-digit phone number</span>}
        </div>
        <button
          type="submit"
          className="text-white  block w-full bg-[#051650] px-4 py-4 rounded-md hover:bg-blue-600"
        >
          BRING IT ON
        </button>
      </form>
       {/* Display success message after form submission */}
       {submitted && (
        <p className="text-green-500 mt-4">Form successfully submitted!</p>
      )}
    </div>
  </div>
  );
};

export default Form;
