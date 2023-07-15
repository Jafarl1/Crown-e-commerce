/* eslint-disable no-unused-vars */
import React from 'react'
import { sigInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.utils"
import SignUp from '../../components/sign-up/sign-up.component';

export default function SignIn() {

    const logGoogleUser = async () => {
        const { user } = await sigInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <SignUp />
        </>
    )
}
