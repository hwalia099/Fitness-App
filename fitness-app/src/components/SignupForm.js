import styled from 'styled-components';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../services/authService';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(253, 101, 133, 1) 0%,
    rgba(255, 211, 165, 1) 90%
  );
`;

const Card = styled.div`
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  width: 400px;
  height: 400px;
  background-color: #ffffff;
  padding: 10px 30px;
`;

const CardTitle = styled.div`
  text-align: center;
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: bold;
`;

const Form = styled.div`
  input {
    margin: 10px 0;
    width: 100%;
    background-color: #e2e2e2;
    border: none;
    outline: none;
    padding: 12px 20px;
    border-radius: 4px;
  }

  button {
    background-color: #4796ff;
    color: #ffffff;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    border: none;
    padding: 8px 15px;
    width: 100%;
  }
`;

const CardTerms = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  input[type="checkbox"] {
    background-color: #e2e2e2;
  }

  span {
    margin: 5px;
    font-size: 13px;
  }
`;

const CardLink = styled.a`
  color: #4796ff;
  text-decoration: none;
`;




const SignupForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userPhone: '',
        password: '',
    });
    const [signupMessage, setSignupMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signup(formData);
            console.log('Signup Successful', response);
            const userid = response.userId;
            setSignupMessage('User created successfully');
            navigate(`/userprofile/${userid}`);
        } catch (error) {
            console.error('Signup Failed', error);
            setSignupMessage('Signup failed. Please try again.');
        }
    };

    return (
        <Container>
            <Card>
                <CardTitle>
                    <Title>Create Account</Title>
                    <span>
                        Already have an account? <CardLink href="login">Sign In</CardLink>
                    </span>
                </CardTitle>
                <Form>
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                            name="userName"
                            placeholder="Name"
                            value={formData.userName}
                            onChange={handleInputChange} />

                        <input type="email"
                            name="userEmail"
                            placeholder="Email"
                            value={formData.userEmail}
                            onChange={handleInputChange} />
                        <input type="text"
                            name="userPhone"
                            placeholder="Phone"
                            value={formData.userPhone}
                            onChange={handleInputChange} />
                        <input type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange} />
                        <button  > Sign Up</button>
                    </form>
                </Form>
                <CardTerms>
                    <input type="checkbox" name="" id="terms" />
                    <span>
                        I have read and agree to the <CardLink href="">Terms of Service</CardLink>
                    </span>
                </CardTerms>
            </Card>
        </Container>
    );
};

export default SignupForm;
