import AboutMeSection from "@templates/about-me-section";
import HomeSection from "@templates/home-section";
import ProjectSection from "@templates/project-section";
import ServiceSection from "@templates/service-section";

const LandingPage = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <HomeSection />
            <div className="w-full laptop:w-[100%] desktop:w-[98%] flex flex-col px-8 desktop:px-20 py-16 desktop:gap-24 gap-12">
                <AboutMeSection />
                <ServiceSection />
                <ProjectSection />
            </div>
        </div>
    );
}

export default LandingPage;