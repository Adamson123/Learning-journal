import Posts from "../components/Posts";
import heroImage from "/assets/hero.png";

const Post = () => {
    return (
        <main className="pt-[58px] md:pt-[154px] px-5 md:px-[53px] pb-[56px] text-[#151515] bg-[#f1f1f1b4]">
            <div className="flex flex-col gap-[40px] max-w-[1385px] mx-auto">
                {/* Head */}
                <div className="gap-3 flex flex-col pt-[31px]">
                    <h2 className="text-[12px] md:text-base">JULY 23, 2022</h2>

                    <h3 className="font-bold text-[32px] md:text-4xl leading-[108%]">
                        My new journey as a bootcamp student.
                    </h3>
                    <p className="text-base leading-[20px]">
                        After several months of learning in the Frontend
                        Developer Career Path, I've made the big jump over to
                        the Bootcamp to get expert code reviews of my Solo
                        Projects projects and meet like-minded peers.
                    </p>
                    <div className="h-[191px] md:h-[488px] relative mt-6">
                        <div className="absolute inset-0 bg-black/30 pointer-events-none z-2"></div>
                        <img
                            className="rounded scale-x-[-1] w-full h-full object-cover object-[position:30%_68%]"
                            src={heroImage}
                            alt="Post image"
                        />
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

export default Post;
