import React, { useEffect, createContext, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth, createUserProfileDocument } from '../firebase/firebase';

interface UserData {
  id: string;
  email?: string;
  displayName?: string;
  [key: string]: any;
}

interface UserContextType {
  user: UserData | null;
  loading: boolean;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  loading: true
});

interface Props {
  children: React.ReactNode;
}

const UserContextProvider: React.FC<Props> = ({ children }) => {
    const [user, setUser] = useState<UserData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                if (!userRef) return;

                userRef.onSnapshot(snapShot => {
                    setUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                    setLoading(false);
                });
            } else {
                setUser(null);
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    const userContext: UserContextType = { user, loading };
    
    if (loading) { return <div>Loading...</div> }
    return (
        <UserContext.Provider value={userContext}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;