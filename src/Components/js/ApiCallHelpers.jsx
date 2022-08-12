
export async function loginApicall(bodyObj) {
  let reqOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyObj)
    

  }
  console.log(reqOptions.body)
  const response = await fetch("https://personal-notes-diary.herokuapp.com/api/v1/user/login", reqOptions);
  const json = await response.json();
  return json;



  

}



























































// function getUserInfoFromApiCall() {
//     return(
//         {
//           userName: "christian",
//           userEmail: "cristiansando1@hogadsf.com",
//           userLastName: "sandoval",
//           userNotes: [{title: "mi nota 1", body: "cuerpo de la nota 1"}, {title: "nota 2", body: "cuerpo de la nota 2"},
//            {title: "not nota muy la si la hago uchiisimo kas larga de lo querga que pasaria a3", body: "body de la nota alkdsffla esternocleidomastoideo adfasdf asdfajsdf asdfjas dfjads k fajs dfadsdfas fdja dsfadsj ffd saf ads fasfadsfdas df df a sfd asd f jsdfasfldjask dfjkasflñajslñ kfjasjfklfasldjñ 3"} , {title: "nota4", body: "cuerpo de la nota 4"},
//             {title: "nota5", body: "cuerpo de las nota 5"}, {title: "nota6", body: "cuerpo de la nota 6"}] ,
//           userImgSrc: "https://res.cloudinary.com/nevado-trek/image/upload/c_scale,w_1200/v1657649635/Nevado/nevado11_bntklr.jpg"
            
//         }
//     )
// }



// async function userExistsOnDatabase(user) {
//   const user2 = "email2@gmail.com";
//   const user3 = "email5@gmail.com"
//  const response = await fetch("https://task-app-3c942-default-rtdb.firebaseio.com/users.json");
//  const json = await response.json();
//     if (json) {
//       const resArray = Object.entries(json)
//       //verificamos si hay algun usuario con el mismo email
     
//      const found =  resArray.find((userArray,i) => {
                     
//                       return(userArray[1].email === user)
//                     })
    
                  
//       return(found)
      
//     }
// }



// async function userDbCreate(user) {
//   const bodyUser = {email : user.email,
//                 name: user.given_name,
//                 picture: user.picture,
//                 notes:[]};

//   const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(bodyUser)
//   };

//   const response = await fetch("https://task-app-3c942-default-rtdb.firebaseio.com/users.json", requestOptions);
//   const res = await response.json()
//   return (res)
// }

// async function userDbCreateNote(note,userid) {
//   const bodyCreateNote = {
//     title: note.title,
//     body: note.body
//   }
//   const requestOptionsCreate = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(bodyCreateNote)
//   }

//   const response = await fetch(`https://task-app-3c942-default-rtdb.firebaseio.com/users/${userid}/notes.json`, requestOptionsCreate);
//   const res = await response.json();
//   return res;
// }




// async function getNotesFromApiCall(userid){
//   const response = await fetch(`https://task-app-3c942-default-rtdb.firebaseio.com/users/${userid}/notes.json`);
//   const res = await response.json();
//   console.log(res,"-----------------")
//   return res;

// }

// export {getUserInfoFromApiCall, userExistsOnDatabase,userDbCreate,userDbCreateNote,getNotesFromApiCall}