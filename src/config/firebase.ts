// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app'
import {
	updateProfile,
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from 'firebase/auth'

import { getFirestore } from 'firebase/firestore'
const googleProvider = new GoogleAuthProvider()
console.log()

const firebaseConfig = {
	apiKey: 'AIzaSyBusmlby-23Ej8g5p6B-2jGbAzP8Mj8JFA',
	authDomain: 'youtub-clone-app-nex-js.firebaseapp.com',
	projectId: 'youtub-clone-app-nex-js',
	storageBucket: 'youtub-clone-app-nex-js.firebasestorage.app',
	messagingSenderId: '158493669018',
	appId: '1:158493669018:web:1c036836f93b7f37bd5123',
}

// Initialize Firebase
export const app =
	getApps().length > 0 ? getApps() : initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore()

export {
	auth,
	db,
	GoogleAuthProvider,
	googleProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
	updateProfile,
}
