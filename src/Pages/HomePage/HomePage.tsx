import AiroSection from "../../Components/AiroSection/AiroSection"
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts"
import Header from "../../Components/Header/Header"
import HeroSection from "../../Components/HeroSection.tsx/HeroSection"
import TemplateSection from "../../Components/TemplateSection/TemplateSection"
import WebsiteMarketing from "../../Components/WebsiteMarketing/WebsiteMarketing"


function HomePage() {
    return (
        <>
            <div>
                <Header />

                <HeroSection />

                <FeaturedProducts/>

                <WebsiteMarketing/>

                <TemplateSection/>

                <AiroSection/>

            </div>
        </>
    )
}

export default HomePage