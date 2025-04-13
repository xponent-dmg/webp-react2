// import ProfileImage from "./ProfileImage";
// import UserInfo from "./UserInfo";
// import UserPosts from "./UserPosts";
// import "/src/css/ProfilePage.css";

// const ProfilePage = () => {
//   const user = {
//     imageUrl: "/public/images/profile-pic.jpg",
//     name: "Harishankar",
//     email: "hari@gmail.com",
//     bio: "A passionate web developer and musician.",
//     posts: [
//       "How to learn React",
//       "What are RESTful APIs",
//       "Laptop buying guide 2025",
//     ],
//   };

//   return (
//     <div className="profile-page">
//       <ProfileImage imageUrl={user.imageUrl} />
//       <UserInfo name={user.name} email={user.email} bio={user.bio} />
//       <UserPosts posts={user.posts} />
//     </div>
//   );
// };

// export default ProfilePage;

import Avatar from "./ProfileImage";
import Details from "./UserInfo";
import PostsList from "./UserPosts";
import "/src/css/ProfilePage.css";

const ProfileScreen = () => {
  const profile = {
    avatarUrl: "/public/images/profile-pic-icon.png",
    fullName: "Abhishek S",
    contact: "shek@gmail.com",
    about: "webp enthusiast & music lover.",
    articles: [
      "Mastering JavaScript",
      "Understanding GraphQL",
      "Learning Piano",
    ],
  };

  return (
    <div className="profile-container">
      <Avatar avatarUrl={profile.avatarUrl} />
      <Details
        fullName={profile.fullName}
        contact={profile.contact}
        about={profile.about}
      />
      <PostsList articles={profile.articles} />
    </div>
  );
};

export default ProfileScreen;
