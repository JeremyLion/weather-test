import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/actions/user';
import { useNavigate } from 'react-router-dom';

/**
 * Props for the InputValue component.
 */
interface InputValue {
  email: string;
  password: string;
}

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<InputValue>({ email: "test@test.com", password: "password" });
  const { email, password } = inputValue;

  /**
   * Handles changes to the email and password input fields.
   * @param e - The input change event.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Handles the form submission.
   * @param e - The form submission event.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === 'test@test.com' && password === 'password') {
      dispatch(loginUser(email));
      navigate('/weather')
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <h1 className="text-center mb-4">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder={"Email"}
                name={"email"}
                value={email}
                onChange={handleChange}
                />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                placeholder={"Password"}
                className="form-control mb-3"
                name={"password"}
                value={password}
                onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
