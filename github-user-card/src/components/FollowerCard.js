import React from "react";

const FollwerCard = (props) => { 
    console.log("from followercard", props)
    return (
        <div className="followercontainer">
            hello from followercard!
            {props.people.map(person => { 
                console.log(person)
               return (
               <div className="followercard">
                   <h1>{person.login}</h1>
                   <img src={person.avatar_url}/>
               </div>
               )
            })}
        </div>
    )


}

export default FollwerCard;