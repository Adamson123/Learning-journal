import Hero from "../components/Hero";
import Posts from "../components/Posts";

const Home = () => {
    return (
        <main className="text-2xl pt-[58px] md:pt-[84.06px] ">
            <Hero />
            <div className="px-5 md:px-[53px] py-8 md:py-[53px] bg-[#f1f1f1b4]">
                <Posts />
            </div>
        </main>
    );
};

export default Home;
