import './AllPosts.css'
import React from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode';
import { useState, useEffect } from 'react';

export default function AllPosts() {
    useEffect(() => {
        getAllContent()
      }, [])

    const[userPosts, setUserPostsList] = useState({})
    let token = localStorage.getItem("token");
    let decodedToken  = jwt_decode(token)
//     const storeHandler = () => {
//     try{
//       let token = localStorage.getItem("token");
//       let decodedToken  = jwt_decode(token)
//       let userId = decodedToken.id;
//       return userId
//     }
//     catch(err){
//       console.log("Please, signin!")
//     }
//   }

  /*This function is designed to fetch the API that login the user into their account.
    @Parameters:
      -user: this para. holds the user obj that contains the user details.
    @Return:
      -This is a void function designed to respond to the clicking the submit button.  
  */ 
    const getAllContent = () => {
        axios.get("http://localhost:4000/all/user/posts")
        .then(res =>{ 
          console.log(res.data)
          return setUserPostsList(res.data)})
        .catch(err => console.log(err))
    }

    return (
        <div className='parent_container'>
            < div className='container'>
            {userPosts.length ? userPosts.map(user => 
                user.content.length ? user.content.map(content =>
                    content.creator_id === decodedToken.user.id ?
                        <div className='posts'>
                            <div>
                            {content.updatedAt}
                            </div>
                            {content.content}
                        </div>
                        : null
                    ) : null
            )
            : null}
            </div>
        </div>
  )
}





// < div className='container'>
//                 {userPosts.length ? userPosts.map(user => 
//                 {if(user._id === storeHandler()){
//                 <div  className='PublicUsers'>
//                     {user.content.length ? user.content.map(content =>
//                         <div>
//                             {content.content}
//                         </div>
//                     ) : null}
//                 </div>
//                 }})
//             : null}
//             </div>