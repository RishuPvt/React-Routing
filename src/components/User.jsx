import React, { useEffect, useState } from "react";
function User() {

const [data , setdata]=useState([])
  useEffect(() => {
    fetch("https://api.github.com/users/RishuPvt")
      .then((Response) => {
          return Response.json();
       
      })
      .then((data) => {
        setdata(data)
      })
      

      
  }) 
  return (
    <>
      <div  className="flex gap-3.5 justify-center items-center">
        <div className="w-[300px]">
      <img src={data.avatar_url} alt="github_profileIMG"/>
      </div>
      <div className="text-lg font-extralight  ">
        <h1>Name:{data.name}</h1>
        <br/>
       <h1> Github followers:{data.followers}</h1>
       <br/>
       <h2> Bio:{data.bio}</h2>
       <br/>
       <h2>Repository:{data.public_repos}</h2>
        </div>

      </div> 
     


    </>
  )
}

export default User;
