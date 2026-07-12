import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts"
import Header from "../../Components/Header/Header"
import HeroSection from "../../Components/HeroSection.tsx/HeroSection"


function HomePage() {
    return (
        <>
            <div>
                <Header />

                <HeroSection />

                <FeaturedProducts/>

            </div>
        </>
    )
}

export default HomePage