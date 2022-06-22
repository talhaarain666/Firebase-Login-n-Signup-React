import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from "./firebaseconfig";
import { getDatabase, ref, set, push, onValue, get, child, update, remove } from "firebase/database";

// Authentication Methods
const auth = getAuth(app);
const database = getDatabase(app);

// SignUp User
let signUpUser = (obj) => {
  return createUserWithEmailAndPassword(auth, obj.email, obj.password);

}
// LOGIN USER
let logInUser = (obj) => {
  return signInWithEmailAndPassword(auth, obj.email, obj.password)

}

// let logOutUser = () => {
//     const auth = getAuth();
//     signOut(auth).then(() => {
//         // Sign-out successful.
//     }).catch((error) => {
//         // An error happened.
//     });
// }

// let checkAuthUser = () => {
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//             // User is signed in, see docs for a list of available properties
//             // https://firebase.google.com/docs/reference/js/firebase.User
//             const uid = user.uid;
//             // ...
//         } else {
//             // User is signed out
//             // ...
//         }
//     });
// }


// .................Firebase Methods..................

// SEND DATA
let sendData = (obj, nodeName, id) => {
  if (!id) {
    // for id/key start
    let postListRef = ref(database, nodeName);
    obj.id = push(postListRef).key;
    console.log(obj.id);
    // for id/key end
  }
  let newpostListRef = ref(database, `${nodeName}/${id ? id : obj.id}`);
  return set(newpostListRef, obj);
};

// GET DATA
let getData = (nodeName) => {

  const dbRef = ref(database, nodeName);
  return onValue
    (dbRef,
      (snapshot) => {
        const todoLists = [];
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          // console.log(childData)
          todoLists.push(childData)
          // ...
        });
        console.log(todoLists)
      }, {
      onlyOnce: false,
    });
}


// ?????????????????????????????????????????????????????????????????????????????????
// //////////////////////  READ AND WRITE DATA   /////////////////////////////////

// INSERT DATA (SEND DATA)

let insertMethod = (name, rollno, section) => {
  set(ref(database, 'Students/' + rollno), {
    Username: name,
    Rollno: rollno,
    Section: section,

  }).then(() => {
    console.log("Saved successfully")
  }).catch((err) => {
    console.log(err)
  });
}

// SELECT DATA (RENDERING DATA)

let selectMethod = (rollno) => {
 const nameOfUser = document.getElementById("nameOfUser")
 const rollNumOfUser = document.getElementById("rollNumOfUser")
 const sectionOfUser = document.getElementById("sectionOfUser")

  const dbRef = ref(database);
  get(child(dbRef, "Students/" + rollno))
    .then((snapshot) => {
      if (snapshot.exists()) {
        
        nameOfUser.value = snapshot.val().Username;
        rollNumOfUser.value = snapshot.val().Rollno;
        sectionOfUser.value = snapshot.val().Section;

        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.log(error);
    });
}

// UPDATE DATA

let updateMethod = (name, rollno, section) => {
  update(ref(database, 'Students/' + rollno), {
    Username: name,
    Section: section,

  }).then(() => {
    console.log("Updated successfully")
  }).catch((err) => {
    console.log(err)
  });
}

// let updateData = (obj,nodeName,id)=>{
//   let newpostListRef = ref(database, `${nodeName}/${id ? id : obj.id}`);
//   return update(newpostListRef, obj);
// }


// DELETE DATA

let deleteMethod = (rollno) => {
  remove(ref(database, 'Students/' + rollno)).then(() => {
    console.log("Deleted successfully")
  }).catch((err) => {
    console.log(err)
  });
}


export { signUpUser, logInUser, sendData, getData, insertMethod, selectMethod,updateMethod,deleteMethod };