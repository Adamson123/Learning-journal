import blog1Image from "/assets/blog/blog-1.png";
import blog2Image from "/assets/blog/blog-2.png";
import blog3Image from "/assets/blog/blog-3.png";
import blog4Image from "/assets/blog/blog-4.png";
import blog5Image from "/assets/blog/blog-5.png";
import blog6Image from "/assets/blog/blog-6.png";

const posts = [
    {
        id: 1,
        image: blog1Image,
        date: "JULY 23, 2022",
        title: "My new journey as a bootcamp student.",
        subtitle: `After several months of learning in the Frontend Developer Career Path, I've made the big
    jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet
    like-minded peers.`,
    },
    {
        id: 1,
        image: blog1Image,
        date: "JULY 23, 2022",
        title: "Blog one",
        subtitle: `I'm excited to start a new learning journey as a Scrimba
             Bootcamp student! After several months of learning in
             the Frontend Developer Career Path.`,
    },
    {
        id: 2,
        image: blog2Image,
        date: "JULY 23, 2022",
        title: "Blog two",
        subtitle: `I'm excited to start a new learning journey as a Scrimba
             Bootcamp student! After several months of learning in
             the Frontend Developer Career Path.`,
    },
    {
        id: 3,
        image: blog3Image,
        date: "JULY 23, 2022",
        title: "Blog three",
        subtitle: `I'm excited to start a new learning journey as a Scrimba
             Bootcamp student! After several months of learning in
             the Frontend Developer Career Path.`,
    },
    //
    {
        id: 4,
        image: blog4Image,
        date: "JULY 23, 2022",
        title: "Blog four",
        subtitle: `I'm excited to start a new learning journey as a Scrimba
             Bootcamp student! After several months of learning in
             the Frontend Developer Career Path.`,
    },
    {
        id: 5,
        image: blog5Image,
        date: "JULY 23, 2022",
        title: "Blog five",
        subtitle: `I'm excited to start a new learning journey as a Scrimba
             Bootcamp student! After several months of learning in
             the Frontend Developer Career Path.`,
    },
    {
        id: 6,
        image: blog6Image,
        date: "JULY 23, 2022",
        title: "Blog six",
        subtitle: `I'm excited to start a new learning journey as a Scrimba
             Bootcamp student! After several months of learning in
             the Frontend Developer Career Path.`,
    },
];

export type PostsTypes = typeof posts;
export type SinglePostTypes = PostsTypes[0];

export default posts;
