import posts, { postsBody } from "../data/posts";

export const filterPostsById = (id: string) => {
    return posts.filter((post) => post.id !== id);
};

export const findPostById = (id: string) => {
    return posts.find((post) => post.id === id);
};

export const findPostBodyById = (id: string) => {
    return postsBody.find((post) => post.id === id);
};
