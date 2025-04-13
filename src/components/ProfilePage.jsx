import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";
import "/src/css/ProfilePage.css";

const ProfilePage = () => {
  const user = {
    imageUrl: "/public/images/profile-pic.jpg",
    name: "Harishankar",
    email: "hari@gmail.com",
    bio: "A passionate web developer and musician.",
    posts: [
      "How to learn React",
      "What are RESTful APIs",
      "Laptop buying guide 2025",
    ],
  };

  return (
    <div className="profile-page">
      <ProfileImage imageUrl={user.imageUrl} />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
      <UserPosts posts={user.posts} />
    </div>
  );
};

export default ProfilePage;
