import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts"
import Header from "../../Components/Header/Header"
import HeroSection from "../../Components/HeroSection.tsx/HeroSection"
import WebsiteMarketing from "../../Components/WebsiteMarketing/WebsiteMarketing"


function HomePage() {
    return (
        <>
            <div>
                <Header />

                <HeroSection />

                <FeaturedProducts/>

                <WebsiteMarketing/>

            </div>
        </>
    )
}

export default HomePage