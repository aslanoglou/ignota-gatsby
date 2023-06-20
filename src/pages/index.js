import * as React from "react"
import Header from "../components/header";
import HomepageHero from "../components/HomepageHero";
import Services from "../components/Services";
import ClientPortfolio from "../components/ClientPortfolio";
import NewsletterForm from "../components/NewsletterForm";

const IndexPage = () => {
  return (
    <div className="bg-ignota-black text-ignota-white px-4 md:px-[36px] leading-normal overflow-x-hidden">
      <Header></Header>
      <main className="2xl:container 2xl:mx-auto">
        <HomepageHero></HomepageHero>
        <section className="md:mb-[256px] mb-[181px]">
          <p className="xl:max-w-[840px] text-md mb-12">
            We help accelerate your digital transformation journenpm instally by delivering customer-centric experiences
            that are designed to maximize your revenue
          </p>
        </section>
        <section className="md:mb-[256px] mb-[181px] pb-[56.25%] relative">
          <iframe className="absolute top-0 left-0 w-[100%] h-[100%]" title="Ignota"
                  src="https://player.vimeo.com/video/836512442?h=fce1e11985" width="1600" height="900" frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture" allowFullScreen>Ignota</iframe>
        </section>
        <Services></Services>
        <ClientPortfolio></ClientPortfolio>
        <NewsletterForm></NewsletterForm>
      </main>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
