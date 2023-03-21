 import { initializeApp } from 'firebase/app'
 import {getAuth, signInWithRedirect, signInWithPopup,
   GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
 import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'
 import { UserContext } from "../../contexts/user.ctx";


const firebaseConfig = {
  apiKey: "AIzaSyA0nP6YNQgCZH6UsJ4oNNBwp6DAHPG8D98",
  authDomain: "crwncloathing.firebaseapp.com",
  projectId: "crwncloathing",
  storageBucket: "crwncloathing.appspot.com",
  messagingSenderId: "733259425498",
  appId: "1:733259425498:web:cbdec54188e81cb919e7e3"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect  = () => signInWithRedirect(auth, provider);
export const db = getFirestore()

export const createUserDocFromAuth = async(
  userAuth,
  additionalInfo={}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  
  const userSnapshot = await getDoc(userDocRef)
  
  
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createAt = new Date();

  try{
    await setDoc(userDocRef, {
      displayName,
      email,
      createAt,
      ... additionalInfo,
    });
  } catch(error){
    console.log("User error")
  }
return userDocRef;
  }


}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};



export const signoutUser = async () => {
   await signOut(auth);
  
}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback );