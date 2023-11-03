import React from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container">
      <div class="mb-3">
        <input
          type="text"
          placeholder="First name"
          {...register('First name', { required: true, maxLength: 80 })}
          className={
            errors['First name'] ? 'form-control is-invalid' : 'form-control'
          }
        />
      </div>
      <div class="mb-3">
        <input
          type="text"
          placeholder="Last name"
          {...register('Last name', { required: true, maxLength: 100 })}
          className={
            errors['Last name'] ? 'form-control is-invalid' : 'form-control'
          }
        />
      </div>
      <div class="mb-3">
        <input
          type="text"
          placeholder="Email"
          {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
          className={
            errors['Email'] ? 'form-control is-invalid' : 'form-control'
          }
        />
      </div>
      <div class="mb-3">
        <input
          type="tel"
          placeholder="Mobile number"
          {...register('Mobile number', {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
          className={
            errors['Mobile number'] ? 'form-control is-invalid' : 'form-control'
          }
        />
      </div>
      <div class="mb-3">
        <select
          {...register('Title', { required: true })}
          className={
            errors['Title'] ? 'form-control is-invalid' : 'form-control'
          }
        >
          <option disabled selected value="">
            Select
          </option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
      </div>
      <div class="mb-3">
        <label
          for=""
          className={
            (errors['Developer'] ? ' is-invalid ' : '') +
            'form-control d-flex justify-content-between'
          }
        >
          Accept
          <label for="Yes">
            Yes
            <input
              id="Yes"
              {...register('Developer', { required: true })}
              type="radio"
              value="Yes"
            />
          </label>
          <label for="No">
            No
            <input
              id="No"
              {...register('Developer', { required: true })}
              type="radio"
              value="No"
            />
          </label>
        </label>
      </div>

      <input class="btn btn-primary" type="submit" />
    </form>
  );
}
