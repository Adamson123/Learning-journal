import Posts from "../components/Posts";
import bloggerImage from "/blogger.png";

const About = () => {
    return (
        <main className="pt-[85px] md:pt-[173px] pb-[56px] px-5 md:px-[53px] xl:px-40  text-[#151515] bg-[#f1f1f1b4]">
            <div className="flex flex-col gap-[50px]  max-w-[1385px] mx-auto">
                {/* Head */}
                <div className="flex flex-col md:flex-row md:items-center  gap-y-[27px] md:gap-x-[33px]">
                    <img
                        className="size-[182px]"
                        src={bloggerImage}
                        alt="Blogger image"
                    />
                    <div className="flex flex-col gap-y-4">
                        <h2 className="text-[34.84px] font-bold leading-[108%] md:max-w-3xl">
                            Hi there! My name is Roku and welcome to my
                            {/* <br className="hidden md:inline" /> */} learning
                            journal.
                        </h2>
                        <p className="text-base leading-[130%] md:max-w-5xl">
                            After several months of learning in the Frontend
                            Developer Career Path, I've made the big jump over
                            to the
                            {/* <br className="hidden md:inline" /> */}
                            Bootcamp to get expert code reviews of my Solo
                            Projects projects and meet like-minded peers.
                        </p>
                    </div>
                </div>
                {/* Body */}
                <div className="flex flex-col gap-4 [&>p]:leading-[130%] [&>h3]:font-bold md:text-xl md:pl-[48px]  md:max-w-7l">
                    <h3>How I stay commited to learning</h3>
                    <p>
                        I like to think of myself as a lifelong learner. I used
                        to spend hours and hours learning, then try to create
                        simple projects using what I learned or work new
                        techniques into existing projects.
                    </p>
                    <p>
                        While that was fun, I felt like it would be helpful to
                        share what I was learning and most things about my
                        journey with the world.
                    </p>
                    <h3>How I got started</h3>
                    <p>
                        I started simple and gradually grew my learning journal
                        site. I would take notes about what I was learning.
                        After each learning session, I'd use my notes to not
                        only reflect on what I learned but also write short
                        summaries of what I learned using my own words.
                    </p>
                    <p>
                        That helped me grok what I was learning, and I realized
                        that posting my learning summaries was also helping
                        others learn and stay motivated.
                    </p>
                </div>
                {/* Posts */}
                <div className="flex flex-col gap-5">
                    <h3 className="font-bold text-center md:text-[24px]">
                        Recent posts
                    </h3>
                    <Posts
                        amount={3}
                        showViewMore={false}
                        blogCardStyle="max-w-full"
                    />
                </div>
            </div>
        </main>
    );
};

export default About;
