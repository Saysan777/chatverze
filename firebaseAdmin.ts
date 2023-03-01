import admin from 'firebase-admin'
import { getApps } from 'firebase-admin/app';

// setup firebase-admin in project settings of firebase -> select service accounts from tabs -> select Nodejs -> Generate new key- > drag the downloaded file in your code and rename
//  .. we have it as servieAccountKey

// We use FirebaseAdmin.ts to authenticate our backend code to firestore
//  we can only use FirebaseAdmin.ts file to authenticate both but it affects in security reason so we verify with different approaches.  
//  we are providing admin level permission, so we can just do what the hell we want.

const serviceAccountKey = JSON.parse(
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
);

if(!getApps().length){
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccountKey)
    });
}

const adminDb = admin.firestore()

export { adminDb };

