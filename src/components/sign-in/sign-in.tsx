import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../shared/layout';
import { Formik, FormikHelpers } from 'formik';
import { auth } from '../../firebase';
import '../sign-up/sign-up.styles.scss';

interface SignInValues {
  email: string;
  password: string;
}

const validate = (values: SignInValues) => {
  const errors: Partial<SignInValues> = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
}

const SignIn: React.FC = () => {
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();
  const initialValues: SignInValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values: SignInValues, { setSubmitting }: FormikHelpers<SignInValues>) => {
    console.log('values', values);
    const { email, password } = values;
    try {
      //signin with firebase
      await auth.signInWithEmailAndPassword(email, password);
      setSubmitting(false);
      navigate('/shop');
      
    } catch (error) {
      console.log('error', error);
      setSubmitting(false);
      setError(error as Error);
    }
  }

  return (
    <Layout>
      <div className='sign-up'>
        <h1>Sign In</h1>
        <div className='form-container'>
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSubmit}>
            {({ 
                values, 
                errors, 
                handleChange, 
                handleSubmit, 
                isSubmitting
              }) => {
                const { email } = errors;
                return (
                <form onSubmit={handleSubmit} >
                  <div>
                    <input 
                      type='email'
                      name='email'
                      onChange={handleChange}
                      value={values.email}
                      placeholder='Email'
                      className={'nomad-input email ' + (email ? 'error' : '')}
                    />
                  </div>
                  <div>
                    <input 
                      type='password'
                      name='password'
                      onChange={handleChange}
                      value={values.password}
                      placeholder='Password'
                      className='nomad-input password'
                    />
                  </div>
                  <div className='submit-btn'>
                    <button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="button is-black nomad-btn submit">
                      Submit
                    </button>
                  </div>
                  <div className='error-message'>
                    {
                      error && <p>{error.message}</p>
                    }
                  </div>
                </form>
                )
              }
            }
          </Formik>
        </div>
      </div>
    </Layout>
  );
}

export default SignIn;