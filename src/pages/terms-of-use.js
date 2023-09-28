import * as React from "react"
import Header from "../components/Header";
import Footer from "../components/Footer"
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import Arrow from "../images/arrow-left.svg";

const IndexPage = () => {
    return (
        <div className="bg-ignota-black text-ignota-white px-4 md:px-[36px] leading-normal overflow-x-hidden">
            <Header></Header>
            <main className="2xl:container 2xl:mx-auto">
                <StaticImage src="../images/inner-hero-1.svg" alt="Terms and conditions" className="mb-[66px]"></StaticImage>
                <div className="md:flex">
                    <div className="md:flex-[25%] md:flex-grow-0 md:flex-shrink-0">
                        <Link to="/" className='rounded-full border-2 px-8 py-4 text-[24px] inline-flex items-center hover:text-ignota-hover hover:border-ignota-hover mb-[40px]'>
                            <Arrow className="mr-4"></Arrow>
                            Back</Link>
                    </div>
                    <div className="md:flex-auto mb-[61px]">
                        <h1 className="text-lg md:text-[40px] mb-[48px]">Terms and conditions</h1>
                        <h2 className="text-[18px] mb-6 font-semibold">Lorem ipsum dolor sit amet, consectetur</h2>
                        <p className="leading-6 mb-[48px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non auctor diam. Maecenas ac
                            egestas lectus. Ut imperdiet justo vel nisi lobortis varius. Mauris sit amet maximus neque.
                            In semper sagittis ante, eu viverra risus finibus vitae. Pellentesque ut neque blandit,
                            placerat est et, commodo dui. Sed sagittis eros non porttitor tristique.
                            In quis dolor lacus. Integer a interdum turpis. Nam vitae justo feugiat, lacinia nisi nec,
                            pharetra libero. Vivamus a placerat massa. Suspendisse eleifend vulputate purus, ac viverra
                            ex convallis semper. Phasellus ultrices sem ut nibh aliquet feugiat. Vestibulum in tempus
                            justo. Proin porta condimentum efficitur. Mauris sit amet feugiat sapien, eu condimentum
                            sem. Proin euismod varius massa nec euismod. Vestibulum vitae malesuada nulla, a mollis
                            ante. Ut maximus dapibus lorem id maximus.
                            Duis auctor ornare risus vitae imperdiet. Nunc in bibendum massa. Interdum et malesuada
                            fames ac ante ipsum primis in faucibus. Aliquam mollis mollis lacinia. Morbi libero arcu,
                            imperdiet eu arcu in, tristique cursus magna. Vestibulum vitae elit urna. Nulla et neque
                            pretium, auctor nisl nec, molestie leo.
                            Nullam accumsan ultricies nibh, sit amet pulvinar lectus commodo quis. Aenean suscipit
                            lectus eu ullamcorper fermentum. Praesent suscipit lacus nec lorem ornare imperdiet.
                            Pellentesque a sollicitudin eros. Fusce sed massa id mi tempus mollis. Nulla efficitur
                            pretium lectus, non egestas dolor aliquet ac. Maecenas lectus ex, scelerisque tincidunt
                            pulvinar eu, congue nec diam. Vestibulum volutpat gravida elementum. Praesent ac est eget
                            sapien condimentum tempus vitae et orci. Sed facilisis turpis eu ultrices fermentum. Quisque
                            eu posuere elit. Vestibulum ac felis porta, euismod libero eu, pellentesque dui.
                            Maecenas pharetra, ante et finibus blandit, nibh ante gravida nisl, efficitur finibus velit
                            risus pharetra lectus. Quisque efficitur enim erat, in vulputate justo varius a. Curabitur
                            ullamcorper metus eget cursus malesuada. Nullam non est egestas, elementum augue eu, maximus
                            massa. Nam scelerisque semper sem vel pellentesque. Sed sed mi convallis, auctor odio vitae,
                            convallis elit. Nullam cursus porta cursus. Aenean mattis elit at neque commodo, non feugiat
                            lacus lacinia. Vestibulum eget tincidunt quam.
                        </p>
                        <h2 className="text-[18px] mb-6 font-semibold">Lorem ipsum dolor sit amet, consectetur</h2>
                        <p className="leading-6 mb-[48px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non auctor diam. Maecenas ac
                            egestas lectus. Ut imperdiet justo vel nisi lobortis varius. Mauris sit amet maximus neque.
                            In semper sagittis ante, eu viverra risus finibus vitae. Pellentesque ut neque blandit,
                            placerat est et, commodo dui. Sed sagittis eros non porttitor tristique. nibh aliquet
                            feugiat. Vestibulum in tempus justo. Proin porta condimentum efficitur. ntesque a
                            sollicitudin eros. Fusce sed massa id mi tempus mollis. Nulla efficitur pretium lectus, non
                            egestas dolor aliquet ac. Maecenas lectus ex, scelerisque tincidunt pulvinar eu, congue nec
                            diam. Vestibulum volutpat gravida elementum. Praesent ac est eget sapien condimentum tempus
                            vitae et orci. Sed facilisis turpis eu ultrices fermentum. Quisque eu posuere elit.
                            Vestibulum ac felis porta, euismod libero eu, pellentesque dui.
                            Maecenas pharetra, ante et finibus blandit, nibh ante gravida nisl, efficitur finibus velit
                            risus pharetra lectus. Quisque efficitur enim erat, in vulputate justo varius a. Curabitur
                            ullamcorper metus eget cursus malesuada. Nullam non est egestas, elementum augue eu, maximus
                            massa. Nam scelerisque semper sem vel pellentesque. Sed sed mi convallis, auctor odio vitae,
                            convallis elit. Nullam cursus porta cursus. Aenean mattis elit at neque commodo, non feugiat
                            lacus lacinia. Vestibulum eget tincidunt quam.
                        </p>
                        <h2 className="text-[18px] mb-6 font-semibold">Lorem ipsum dolor sit amet, consectetur</h2>
                        <p className="leading-6 mb-[48px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non auctor diam. Maecenas ac
                            egestas lectus. Ut imperdiet justo vel nisi lobortis varius. Mauris sit amet maximus neque.
                            In semper sagittis ante, eu viverra risus finibus vitae. Pellentesque ut neque blandit,
                            placerat est et, commodo dui. Sed sagittis eros non porttitor tristique. nibh aliquet
                            feugiat. Vestibulum in tempus justo. Proin porta condimentum efficitur. ntesque a
                            sollicitudin eros. Fusce sed massa id mi tempus mollis. Nulla efficitur pretium lectus, non
                            egestas dolor aliquet ac. Maecenas lectus ex, scelerisque tincidunt pulvinar eu, congue nec
                            diam. Vestibulum volutpat gravida elementum. Praesent ac est eget sapien condimentum tempus
                            vitae et orci. Sed facilisis turpis eu ultrices fermentum. Quisque eu posuere elit.
                            Vestibulum ac felis porta, euismod libero eu, pellentesque dui.
                            Maecenas pharetra, ante et finibus blandit, nibh ante gravida nisl, efficitur finibus velit
                            risus pharetra lectus. Quisque efficitur enim erat, in vulputate justo varius a. Curabitur
                            ullamcorper metus eget cursus malesuada. Nullam non est egestas, elementum augue eu, maximus
                            massa. Nam scelerisque semper Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            non auctor diam. Maecenas ac egestas lectus. Ut imperdiet justo vel nisi lobortis varius.
                            Mauris sit amet maximus neque. In semper sagittis ante, eu viverra risus finibus vitae.
                            Pellentesque ut neque blandit, placerat est et, commodo dui. Sed sagittis eros non porttitor
                            tristique.</p>
                        <p className="leading-6 mb-[48px]">In quis dolor lacus. Integer a interdum turpis. Nam vitae justo feugiat, lacinia nisi nec,
                            pharetra libero. Vivamus a placerat massa. Suspendisse eleifend vulputate purus, ac viverra
                            ex convallis semper. Phasellus ultrices sem ut nibh aliquet feugiat. Vestibulum in tempus
                            justo. Proin porta condimentum efficitur. Mauris sit amet feugiat sapien, eu condimentum
                            sem. Proin euismod varius massa nec euismod. Vestibulum vitae malesuada nulla, a mollis
                            ante. Ut maximus dapibus lorem id maximus.
                            Duis auctor ornare risus vitae imperdiet. Nunc in bibendum massa. Interdum et malesuada
                            fames ac ante ipsum primis in faucibus. Aliquam mollis mollis lacinia. Morbi libero arcu,
                            imperdiet eu arcu in, tristique cursus magna. Vestibulum vitae elit urna. Nulla et neque
                            pretium, auctor nisl nec, molestie leo.Nullam accumsan ultricies nibh, sit amet pulvinar
                            lectus commodo quis. Aenean suscipit lectus eu ullamcorper fermentum. Praesent suscipit
                            lacus nec lorem ornare imperdiet. Pellentesque a sollicitudin eros. Fusce sed massa id mi
                            tempus mollis. Nulla efficitur pretium lectus, non egestas dolor aliquet ac. Maecenas lectus
                            ex, scelerisque tincidunt pulvinar eu, congue nec diam. Vestibulum volutpat gravida
                            elementum. Praesent ac est eget sapien condimentum tempus vitae et orci. Sed facilisis
                            turpis eu ultrices fermentum. Quisque eu posuere elit. Vestibulum ac felis porta, euismod
                            libero eu, pellentesque dui.</p>
                        <p className="leading-6 mb-[48px]"> Maecenas pharetra, ante et finibus blandit, nibh ante gravida nisl, efficitur finibus velit
                            risus pharetra lectus. Quisque efficitur enim erat, in vulputate justo varius a. Curabitur
                            ullamcorper metus eget cursus malesuada. Nullam non est egestas, elementum augue eu, maximus
                            massa. Nam scelerisque semper sem vel pellentesque. Sed sed mi convallis, auctor odio vitae,
                            convallis elit. Nullam cursus porta cursus. Aenean mattis elit at neque commodo, non feugiat
                            lacus lacinia. Vestibulum eget tincidunt quam.
                            sem vel pellentesque. Sed sed mi convallis, auctor odio vitae, convallis elit. Nullam cursus
                            porta cursus. Aenean mattis elit at neque commodo, non feugiat lacus lacinia. Vestibulum
                            eget tincidunt quam.
                        </p>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default IndexPage

export const Head = () => <title>Terms of use</title>
