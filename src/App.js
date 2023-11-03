import React from 'react';
import './style.css';
import HookForm from './Form';

export default function App() {
  return (
    <div>
      <h1>React Hook Form Example</h1>
      <p>
        React Hook Form is a library for managing form state and validation in
        React applications using hooks.
      </p>
      <HookForm></HookForm>
    </div>
  );
}
