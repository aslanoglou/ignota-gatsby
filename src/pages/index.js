import * as React from "react"
import {useInView} from "react-intersection-observer";
import Header from "../components/Header";
import HomepageHero from "../components/HomepageHero";
import Services from "../components/Services";
import ClientPortfolio from "../components/ClientPortfolio";
import NewsletterForm from "../components/NewsletterForm";
import Follow from "../components/Follow";
import BehancePorfolio from "../components/BehancePorfolio";
import Footer from "../components/Footer"

const IndexPage = () => {
  const { ref, inView } = useInView({triggerOnce: true});
  return (
    <div className="bg-ignota-black text-ignota-white px-4 md:px-[36px] leading-normal overflow-x-hidden">
      <Header></Header>
      <main className="2xl:container 2xl:mx-auto">
        <HomepageHero></HomepageHero>
        <section className="md:mb-[256px] mb-[181px]"  ref={ref}>
          <p className="xl:max-w-[784px] text-md mb-12 data-[inviewport=false]:invisible data-[inviewport=false]:opacity-0 data-[inviewport=false]:tranform data-[inviewport=false]:translate-y-20 transition ease-in-out duration-700 delay-300" data-inviewport={inView.toString()}>
            We help accelerate your digital transformation journey by delivering customer-centric experiences that are designed to maximize your revenue
          </p>
        </section>
        <section className="md:mb-[256px] mb-[181px] pb-[56.25%] relative">
          <iframe className="absolute top-0 left-0 w-[100%] h-[100%] data-[inviewport=false]:invisible data-[inviewport=false]:opacity-0 data-[inviewport=false]:tranform data-[inviewport=false]:translate-y-20 transition ease-in-out duration-700 delay-300" title="Ignota"
                  src="https://player.vimeo.com/video/836512442?h=fce1e11985" width="1600" height="900" frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture" allowFullScreen data-inviewport={inView.toString()}>Ignota</iframe>
        </section>
        <Services></Services>
        <ClientPortfolio></ClientPortfolio>
        <NewsletterForm></NewsletterForm>
        <div className="md:mb-[256px] mb-[181px] grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-20">
          <Follow></Follow>
          <BehancePorfolio></BehancePorfolio>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
