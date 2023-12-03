import Feed from "@components/Feed"


const Home = () => {
  return (
   <section className="w-full flex-center flex-col">
<h1 className="head_text text-center">Discover and share
<br className="max-md:hidden"/>
<span className="orange_gradient text-center">AI-Powered Promts</span>

</h1>
<p className="desc text-center">
    Gubergren et dolores aliquyam amet magna accusam 
    dolor est dolor, sanctus justo sea dolor gubergren, 
    takimata eirmod aliquyam duo sadipscing.
</p>
<Feed />
   </section>
  )
}

export default Home
