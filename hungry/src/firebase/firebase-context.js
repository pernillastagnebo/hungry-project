import React, { createContext } from 'react';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {

    const config = {
        apiKey: "AIzaSyB7V9GpUyOAWWN5h65Cd5aictsou6GNggg",
        authDomain: "hungry-project-2944f.firebaseapp.com",
        projectId: "hungry-project-2944f",
        storageBucket: "hungry-project-2944f.appspot.com",
        messagingSenderId: "556853467669",
        appId: "1:556853467669:web:5215197a787ff883224c1c",
        measurementId: "G-C8TGWLQMLL"
    };

    if (!app.apps.length) {
        app.initializeApp(config);
    }

    return <FirebaseContext.Provider value={app}>{children}</FirebaseContext.Provider>;
}