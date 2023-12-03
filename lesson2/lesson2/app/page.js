import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>this is home page</h1>
     <User />
     <User1 name="rojina"/>
    </main>
  )
}

const User=()=>{
  return(
<div>
  <h2>User name is shahadoth</h2>
</div>
  )
}

const User1=(props)=>{
  return(
    <div>
      <h2>{props.name}</h2>
    </div>
  )
}