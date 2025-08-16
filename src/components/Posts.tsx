import { Link } from "react-router-dom";
import posts from "../data/posts";

const Posts = ({
    amount = posts.length,
    showViewMore = true,
    blogCardStyle,
}: {
    amount?: number;
    showViewMore?: boolean;
    blogCardStyle?: string;
}) => {
    return (
        <div className="flex flex-col gap-7 md:gap-[53px] items-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-[26px]">
                {posts.slice(0, amount).map((blog, i) => (
                    <div
                        key={i}
                        className={`flex flex-col gap-3 max-w-[500px] cursor-pointer hover-on-container ${blogCardStyle}`}
                    >
                        <img
                            src={blog.image}
                            alt="blog one"
                            className="object-cover rounded h-[234px] w-full"
                        />
                        <div className="flex flex-col gap-1.5">
                            <h2 className="text-sm">{blog.date}</h2>
                            <h3 className="font-bold text-[24px]">
                                {blog.title}
                            </h3>
                            <p className="text-base leading-[21px] text-[#505050]">
                                {blog.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {showViewMore && (
                <Link
                    to={"#"}
                    className="text-center text-base underline font-bold"
                >
                    View More
                </Link>
            )}
        </div>
    );
};

export default Posts;
