import * as React from "react"
import Header from "../components/Header";
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <div className="bg-ignota-black text-ignota-white px-4 md:px-[36px] leading-normal overflow-x-hidden">
      <Header></Header>
      <main className="2xl:container 2xl:mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate eligendi inventore, ipsam minima minus nam odit quos sit vitae! Ab, cumque eius facere harum incidunt maxime non optio vel!
      </main>
      <Footer></Footer>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
