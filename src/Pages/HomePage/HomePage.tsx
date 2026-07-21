import AiroSection from "../../Components/AiroSection/AiroSection"
import Contact from "../../Components/Contact/Contact"
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import HeroSection from "../../Components/HeroSection.tsx/HeroSection"
import TemplateSection from "../../Components/TemplateSection/TemplateSection"
// import WebsiteMarketing from "../../Components/WebsiteMarketing/WebsiteMarketing"
// import WhyWork from "../../Components/WhyWork/WhyWork"


function HomePage() {
    return (
        <>
            <div>
                <Header />

                <HeroSection />

                <FeaturedProducts />

                {/* <WebsiteMarketing /> */}

                <TemplateSection />

                <AiroSection />

                {/* <WhyWork /> */}

                <Footer />

                <Contact />

            </div>
        </>
    )
}

export default HomePage