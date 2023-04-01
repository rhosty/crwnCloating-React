 import { initializeApp } from 'firebase/app'
 import {getAuth, signInWithRedirect, signInWithPopup,
   GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
 import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'
 import { UserContext } from "../../contexts/user.ctx";
 import { collection, writeBatch, query, getDocs } from 'firebase/firestore';


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


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
   await batch.commit();
   console.log('done')
}

export const getCategorisAndDocs = async () => {
  const categoriesRef = collection(db, 'categories');
const q = query(categoriesRef);
const querySnapshot = await getDocs(q);
const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
  const { title, items } = docSnapshot.data();
  acc[title.toLowerCase()] = items;
  return acc;
}, {});

return categoryMap;

}

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

export const createAuthUserWithEmailAndPassword = async (email, password, displayName) => {
  if (!email || !password || !displayName) return;
  return await createUserWithEmailAndPassword(auth, email, password, displayName);
};

export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};



export const signoutUser = async () => {
   await signOut(auth);
  
}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback );


// const firebaseConfig = {
//   apiKey: 'AIzaSyDDU4V-_QV3M8GyhC9SVieRTDM4dbiT0Yk',
//   authDomain: 'crwn-clothing-db-98d4d.firebaseapp.com',
//   projectId: 'crwn-clothing-db-98d4d',
//   storageBucket: 'crwn-clothing-db-98d4d.appspot.com',
//   messagingSenderId: '626766232035',
//   appId: '1:626766232035:web:506621582dab103a4d08d6',
// };

// const firebaseApp = initializeApp(firebaseConfig);

// const googleProvider = new GoogleAuthProvider();

// googleProvider.setCustomParameters({
//   prompt: 'select_account',
// });

// export const auth = getAuth();
// export const signInWithGooglePopup = () =>
//   signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

// export const db = getFirestore();

// export const createUserDocumentFromAuth = async (
//   userAuth,
//   additionalInformation = {}
// ) => {
//   if (!userAuth) return;

//   const userDocRef = doc(db, 'users', userAuth.uid);

//   const userSnapshot = await getDoc(userDocRef);

//   if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createdAt,
//         ...additionalInformation,
//       });
//     } catch (error) {
//       console.log('error creating the user', error.message);
//     }
//   }

//   return userDocRef;
// };

// export const createAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;

//   return await createUserWithEmailAndPassword(auth, email, password);
// };