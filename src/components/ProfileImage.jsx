const ProfileImage = ({ imageUrl }) => {
  return (
    <div className="profile-image">
      <img src={imageUrl} alt="Profile" />
    </div>
  );
};

export default ProfileImage;
