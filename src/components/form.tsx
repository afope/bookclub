import { useState } from 'react';

export const Form = () => {
  // states for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // states for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // handling the name change
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setSubmitted(false);
  };

  // handle email change
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setSubmitted(false);
  };

  // handle password change
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setSubmitted(false);
  };

  // handle form submission
  const handleFormSubmission = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (name === '' || (email === '' && password === '')) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(true);
    }
  };

  // showing success message
  const showSuccessMessage = () => {
    return (
      <div className="success" style={{ display: submitted ? '' : 'none' }}>
        <h1>User {name} successfully registered.</h1>
      </div>
    );
  };

  // showing success message
  const showErrorMessage = () => {
    return (
      <div className="error" style={{ display: error ? '' : 'none' }}>
        <h1>Please enter all fields</h1>
      </div>
    );
  };

  return (
    <div>
      <h1>User Registration</h1>

      <div className="messages">
        {showErrorMessage()}
        {showSuccessMessage()}
      </div>

      <form action="" className="form">
        <label className="label" htmlFor="">
          Name
        </label>
        <input
          type="text"
          className="input"
          onChange={handleNameChange}
          value={name}
        />

        <label htmlFor="" className="label">
          Email
        </label>
        <input
          type="text"
          className="input"
          onChange={handleEmailChange}
          value={email}
        />

        <label htmlFor="" className="label">
          Password
        </label>
        <input
          type="text"
          className="input"
          onChange={handlePasswordChange}
          value={password}
        />

        <button onClick={handleFormSubmission} className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
