import profilePic from "@/assets/pictures/profiles/12.jpg";

import profile5 from "@/assets/pictures/profiles/5.jpg";
import profile6 from "@/assets/pictures/profiles/6.jpg";
import profile7 from "@/assets/pictures/profiles/7.jpg";

import post1 from "@/assets/pictures/posts/1.jpg";
import post2 from "@/assets/pictures/posts/2.jpg";
import post3 from "@/assets/pictures/posts/3.jpg";
import post4 from "@/assets/pictures/posts/4.jpg";
import post5 from "@/assets/pictures/posts/5.jpg";
import post6 from "@/assets/pictures/posts/6.jpg";
import post7 from "@/assets/pictures/posts/7.jpg";

export const myProfile = {
  profilePic,
  username: "cristiano",
  verified: true,
  fullName: "Cristiano Ronaldo",
  totalPosts: "3,821",
  totalFollowers: "648M",
  following: 591,
  description: "5x Ballon d'Or | 5x UCL | Portugal National Team 🇵🇹",
  biolink: "https://www.cristianoronaldo.com/",

  followersPreviews: [profile5, profile6, profile7],
  followersPreviewsName: ["leomessi", "neymarjr", "55 others"],

  posts: [
    post1,
    [post2, post3], // Carousel post
    post4,
    post5,
    post6,
    post7,
  ],
};
