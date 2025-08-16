import heroImage from "/assets/hero.png";
import blog2Image from "/assets/blog/blog-2.png";
import blog3Image from "/assets/blog/blog-3.png";
import blog4Image from "/assets/blog/blog-4.png";
import blog5Image from "/assets/blog/blog-5.png";
import blog6Image from "/assets/blog/blog-6.png";
import blog7Image from "/assets/blog/blog-7.png";

const posts = [
    {
        id: "1",
        image: heroImage,
        date: "JULY 23, 2022",
        title: "My new journey as a bootcamp student.",
        subtitle: `After several months of learning in the Frontend Developer Career Path, I've made the big
    jump over to the Bootcamp to get expert code reviews of my Solo Projects and meet
    like-minded peers.`,
    },
    {
        id: "2",
        image: blog2Image,
        date: "AUGUST 5, 2022",
        title: "Overcoming challenges in coding.",
        subtitle: `Learning to code has its ups and downs. In this post, I share how I tackled some of the
    toughest challenges and what kept me motivated.`,
    },
    {
        id: "3",
        image: blog3Image,
        date: "SEPTEMBER 10, 2022",
        title: "The importance of building projects.",
        subtitle: `Building projects has been the most effective way for me to learn. Here are some of the
    projects I've worked on and what I learned from them.`,
    },
    {
        id: "4",
        image: blog4Image,
        date: "OCTOBER 15, 2022",
        title: "How to stay consistent while learning to code.",
        subtitle: `Consistency is key when learning to code. In this post, I share tips and strategies that
    have helped me stay on track.`,
    },
    {
        id: "5",
        image: blog5Image,
        date: "NOVEMBER 20, 2022",
        title: "Networking as a developer.",
        subtitle: `Connecting with other developers has been a game-changer for me. Here's how I started
    networking and the benefits I've experienced.`,
    },
    {
        id: "6",
        image: blog6Image,
        date: "DECEMBER 25, 2022",
        title: "Reflecting on my coding journey.",
        subtitle: `As the year comes to an end, I look back on my progress, the lessons I've learned, and
    my goals for the future.`,
    },
    {
        id: "7",
        image: blog7Image,
        date: "JANUARY 10, 2023",
        title: "Setting goals for the new year.",
        subtitle: `The start of a new year is the perfect time to set goals. In this post, I share my coding
        goals for the year and how I plan to achieve them.`,
    },
];

export const postsBody = [
    {
        id: "1",
        body: [
            {
                type: "h3",
                content: "How I stay committed to learning",
            },
            {
                type: "p",
                content:
                    "I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.",
            },
            {
                type: "p",
                content:
                    "While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.",
            },
            {
                type: "h3",
                content: "Dealing with distractions",
            },
            {
                type: "p",
                content:
                    "Distractions are everywhere, especially online. To stay committed, I learned how to focus by setting clear study sessions and cutting out noise like endless scrolling.",
            },
            {
                type: "h3",
                content: "How I got started",
            },
            {
                type: "p",
                content:
                    "I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.",
            },
            {
                type: "p",
                content:
                    "That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.",
            },
            {
                type: "h3",
                content: "Why sharing helped me grow faster",
            },
            {
                type: "p",
                content:
                    "When you teach something, you understand it better. Sharing my learning process forced me to simplify concepts, which deepened my understanding.",
            },
        ],
    },
    {
        id: "2",
        body: [
            {
                type: "h3",
                content: "Facing challenges head-on",
            },
            {
                type: "p",
                content:
                    "Coding can be tough, and I've faced my fair share of challenges. Debugging errors, understanding complex concepts, and staying motivated were some of the hurdles I encountered.",
            },
            {
                type: "h3",
                content: "My debugging strategy",
            },
            {
                type: "p",
                content:
                    "I treat debugging like detective work. Instead of panicking, I step back, gather clues, isolate the issue, and test possible fixes.",
            },
            {
                type: "p",
                content:
                    "To overcome challenges, I broke problems into smaller pieces, sought help from the community, and celebrated small wins along the way.",
            },
            {
                type: "h3",
                content: "Staying motivated when things get tough",
            },
            {
                type: "p",
                content:
                    "On days I feel stuck, I remind myself of past wins, or I take a break and return with a fresh mind. Motivation isn’t always natural — sometimes you have to manufacture it.",
            },
        ],
    },
    {
        id: "3",
        body: [
            {
                type: "h3",
                content: "Why projects matter",
            },
            {
                type: "p",
                content:
                    "Building projects has been the cornerstone of my learning journey. It allows me to apply what I've learned and see how concepts work in real-world scenarios.",
            },
            {
                type: "h3",
                content: "Small projects, big lessons",
            },
            {
                type: "p",
                content:
                    "Even small apps — like a to-do list or weather app — taught me how to think about user experience, performance, and code structure.",
            },
            {
                type: "h3",
                content: "Scaling up",
            },
            {
                type: "p",
                content:
                    "From small apps to larger projects, each one has taught me something new and boosted my confidence as a developer.",
            },
            {
                type: "p",
                content:
                    "Projects are not just code. They’re stories of persistence, failure, and eventual success.",
            },
        ],
    },
    {
        id: "4",
        body: [
            {
                type: "h3",
                content: "Staying consistent",
            },
            {
                type: "p",
                content:
                    "Consistency is key when learning to code. I set aside dedicated time each day to practice and learn, even if it's just for 30 minutes.",
            },
            {
                type: "h3",
                content: "Building a daily routine",
            },
            {
                type: "p",
                content:
                    "I pair coding with habits I already do daily, like having coffee. That way, it feels natural instead of forced.",
            },
            {
                type: "p",
                content:
                    "Having a routine and tracking my progress has helped me stay on track and avoid burnout.",
            },
            {
                type: "h3",
                content: "The long-term payoff",
            },
            {
                type: "p",
                content:
                    "Consistency doesn’t mean massive results right away. But over time, those 30 minutes add up to hours, then months of growth.",
            },
        ],
    },
    {
        id: "5",
        body: [
            {
                type: "h3",
                content: "The power of networking",
            },
            {
                type: "p",
                content:
                    "Networking has opened up so many opportunities for me. By connecting with other developers, I've learned new skills, received valuable feedback, and even found mentors.",
            },
            {
                type: "h3",
                content: "Where I found my tribe",
            },
            {
                type: "p",
                content:
                    "Attending meetups, joining online communities, and participating in hackathons are some of the ways I've expanded my network.",
            },
            {
                type: "h3",
                content: "Giving back",
            },
            {
                type: "p",
                content:
                    "Networking isn’t just about taking; it’s about giving too. Sharing resources, answering questions, or encouraging others creates stronger connections.",
            },
        ],
    },
    {
        id: "6",
        body: [
            {
                type: "h3",
                content: "Reflecting on progress",
            },
            {
                type: "p",
                content:
                    "Looking back on my journey, I'm proud of how far I've come. Each challenge and success has shaped me into the developer I am today.",
            },
            {
                type: "h3",
                content: "What reflection taught me",
            },
            {
                type: "p",
                content:
                    "Reflection helps me identify areas for improvement and set new goals for the future.",
            },
            {
                type: "h3",
                content: "Celebrating milestones",
            },
            {
                type: "p",
                content:
                    "It’s easy to forget the small wins, but reflecting reminds me that every step counts.",
            },
        ],
    },
    {
        id: "7",
        body: [
            {
                type: "h3",
                content: "Setting goals for the year",
            },
            {
                type: "p",
                content:
                    "The start of a new year is the perfect time to set goals. This year, I plan to focus on mastering advanced concepts, contributing to open source, and building more impactful projects.",
            },
            {
                type: "h3",
                content: "Breaking it down",
            },
            {
                type: "p",
                content:
                    "Breaking these goals into smaller, actionable steps will help me stay on track and measure my progress.",
            },
            {
                type: "h3",
                content: "Focusing on habits",
            },
            {
                type: "p",
                content:
                    "I’ve learned that goals shouldn’t just be about outcomes, but also about building habits that lead to long-term growth.",
            },
        ],
    },
];

export type PostsTypes = typeof posts;
export type SinglePostTypes = PostsTypes[0];

export default posts;
