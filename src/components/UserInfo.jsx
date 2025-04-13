// const UserInfo = ({ name, email, bio }) => {
//   return (
//     <div className="user-info">
//       <h2>{name}</h2>
//       <p>Email: {email}</p>
//       <p>{bio}</p>
//     </div>
//   );
// };

// export default UserInfo;

const Details = ({ fullName, contact, about }) => {
  return (
    <div className="user-details">
      <h2>{fullName}</h2>
      <p>Email: {contact}</p>
      <p>{about}</p>
    </div>
  );
};

export default Details;
