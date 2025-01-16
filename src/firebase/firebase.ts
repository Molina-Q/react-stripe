import "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

interface AdditionalData {
    [key: string]: any;
}

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIRESTORE_API_KEY,
    authDomain: "react-stripe-fa0d9.firebaseapp.com",
    projectId: "react-stripe-fa0d9",
    storageBucket: "react-stripe-fa0d9.firebasestorage.app",
    messagingSenderId: "566117766748",
    appId: "1:566117766748:web:baaf07acf38e4ab77e3899"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const auth = firebase.auth();

const createUserProfileDocument = async (
    userAuth: firebase.User | null,
    additionalData?: AdditionalData
): Promise<firebase.firestore.DocumentReference | undefined> => {
    if (!userAuth) { return; }
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);  // Changed from userAuth.multiFactor.user.uid to userAuth.uid
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log('error creating user', (error as Error).message);
        }
    }
    return userRef;
};

export { firestore, createUserProfileDocument, auth };