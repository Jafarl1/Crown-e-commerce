import React, { useState } from 'react'
import "./sign-up.styles.scss"

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils';

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

export default function SignUp() {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Password\'s don\'t match');
            return;
        };

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Can't create a user, email already in use");
            } else {
                console.error("User created error", error);
            }
        };

    }

    const handleChange = event => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }


    return (
        <>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">display name</label>
                <input type="text" name="displayName" onChange={handleChange} required value={displayName} />
                <label htmlFor="email">email</label>
                <input type="email" name="email" onChange={handleChange} required value={email} />
                <label htmlFor="password">password</label>
                <input type="password" name="password" onChange={handleChange} required value={password} />
                <label htmlFor="confirm">confirm password</label>
                <input type="password" name="confirmPassword" onChange={handleChange} required value={confirmPassword} />
                <button type="submit">sign up</button>
            </form>
        </>
    )
}
