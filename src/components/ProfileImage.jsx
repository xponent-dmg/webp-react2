// const ProfileImage = ({ imageUrl }) => {
//   return (
//     <div className="profile-image">
//       <img src={imageUrl} alt="Profile" />
//     </div>
//   );
// };

// export default ProfileImage;

const Avatar = ({ avatarUrl }) => {
  return <img src={avatarUrl} alt="User Avatar" className="avatar-img" />;
};

export default Avatar;
