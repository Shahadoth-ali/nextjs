"use client";

import { useState } from "react";

export default function Home() {

const apple=()=>{
alert("hi");
}

const apple1=(item)=>{
alert(item);
}

const [name,setName]=useState("Roji");
const checkState=()=>{
setName("Rubayet");
}

//state component er vitor use hoy and component
//re-render hoy.but variable re-render hoyna
//state component er vitor use hoy
//state er duita parameter thake
//[] er vitor state er name likhte hoy
//and setState o likhte hoy


const InnerComponent=()=>{
return(
  <h1>hi i am inner component</h1>
)
}


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>Code for client Component</h1>
     <button onClick={apple}>click me</button>
     <button onClick={()=>apple1("fruit")}>click here</button>
     <button onClick={checkState}>change this name--{name}</button>
<InnerComponent />
    </main>
  )
}
