import { useParams } from "react-router-dom";
import Posts from "../components/Posts";
import {
    filterPostsById,
    findPostBodyById,
    findPostById,
} from "../utils/postsUtils";

const Post = () => {
    const { id } = useParams();

    const posts = filterPostsById(id as string);
    const post = findPostById(id as string);
    const postBody = findPostBodyById(id as string);

    return (
        <main className="pt-[58px] md:pt-[154px] px-5 md:px-[53px] pb-[56px] text-[#151515] bg-[#f1f1f1b4]">
            <div className="flex flex-col gap-[40px] max-w-[1385px] mx-auto">
                {/* Head */}
                <div className="gap-3 flex flex-col pt-[31px]">
                    <h2 className="text-[12px] md:text-base">{post?.date}</h2>

                    <h3 className="font-bold text-[32px] md:text-4xl leading-[108%]">
                        {post?.title}
                    </h3>
                    <p className="text-base leading-[20px]">{post?.subtitle}</p>
                    <div className="h-[191px] md:h-[488px] relative mt-6">
                        <div className="absolute inset-0 bg-black/30 pointer-events-none z-2"></div>
                        <img
                            className="rounded scale-x-[-1] w-full h-full object-cover object-[position:30%_68%]"
                            src={post?.image}
                            alt="Post image"
                        />
                    </div>
                </div>
                {/* Body */}

                <div className="flex flex-col gap-4 [&>p]:leading-[130%] [&>h3]:font-bold md:text-xl md:pl-[48px]  md:max-w-7l">
                    {postBody?.body.map((block, i) => {
                        switch (block.type) {
                            case "p":
                                return <p key={i}>{block.content}</p>;
                            case "h3":
                                return <h3 key={i}>{block.content}</h3>;
                            default:
                                return null;
                        }
                    })}
                </div>
                {/* Posts */}
                <div className="flex flex-col gap-5">
                    <h3 className="font-bold text-center md:text-[24px]">
                        Recent posts
                    </h3>
                    <Posts
                        posts={posts.slice(0, 3)}
                        showViewMore={false}
                        blogCardStyle="max-w-full"
                    />
                </div>
            </div>
        </main>
    );
};

export default Post;
