import React, { useState } from 'react';
import Layout from '../shared/layout';
import { Formik, FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';
import './sign-up.styles.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase';

interface SignUpValues {
    firstname: string;
    email: string;
    password: string;
}

const validate = (values: SignUpValues) => {
    const errors: Partial<SignUpValues> = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.firstname) { errors.firstname = 'Required' }
    if (!values.password) { errors.password = 'Required' }
    return errors;
}

const SignUp: React.FC = () => {
    const [error, setError] = useState<Error | null>(null);
    const navigate = useNavigate();
    const initialValues: SignUpValues = {
        firstname: '',
        email: '',
        password: '',
    }

    const handleSignUp = async (values: SignUpValues, { setSubmitting }: FormikHelpers<SignUpValues>) => {
        const { firstname, email, password } = values;

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName: firstname });
            navigate('/shop');
            setSubmitting(false);
        } catch (error) {
            console.log('error', error);
            setSubmitting(false);
            setError(error as Error);
        }
    }

    return (
        <Layout>
            <div className='sign-up'>
                <h1>Sign Up</h1>
                <div className='form-container'>
                    <Formik
                        initialValues={initialValues}
                        validate={validate}
                        onSubmit={handleSignUp}
                    >
                        {
                            ({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
                                const { firstname, email, password } = errors;
                                return (
                                    <form onSubmit={handleSubmit}>
                                        <div>
                                            <input
                                                type='text'
                                                name='firstname'
                                                onChange={handleChange}
                                                value={values.firstname}
                                                placeholder='First Name'
                                                className={'nomad-input ' + (firstname ? 'error' : '')}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type='email'
                                                name='email'
                                                onChange={handleChange}
                                                value={values.email}
                                                placeholder='Email'
                                                className={'nomad-input ' + (email ? 'error' : '')}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type='password'
                                                name='password'
                                                onChange={handleChange}
                                                value={values.password}
                                                placeholder='Password'
                                                className={'nomad-input ' + (password ? 'error' : '')}
                                            />
                                        </div>
                                        <div className='submit-btn'>
                                            <button
                                                type='submit'
                                                disabled={isSubmitting}
                                                className='button is-black nomad-btn submit'
                                            >
                                                Sign Up
                                            </button>
                                        </div>
                                        <div className='error-message'>
                                            {
                                                error && <p>{error.message}</p>
                                            }
                                        </div>
                                    </form>
                                );
                            }
                        }
                    </Formik>
                </div>
            </div>
        </Layout>
    );
}

export default SignUp;