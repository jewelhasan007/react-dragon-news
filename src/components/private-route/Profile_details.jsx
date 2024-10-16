import Navbar from "../Navbar/Navbar";


const Profile_details = ({ user}) => {
    const name = user.displayName;
    const email = user.email;
    const phone = user.phoneNumber
    const photo = user.photoURL
    console.log(user)
    return (
        <div >
            <Navbar></Navbar>
          <p><span className="font-bold">Name:</span> {name ? name : 'Name not found'}</p>
          <p><span className="font-bold">Email id:</span> {email}</p>
          <p><span className="font-bold">Phone:</span> {phone ? phone : 'Phone number not found'}</p>
          <p><span className="font-bold">Phone:</span> {photo ? photo : 'Photo not found'}</p>

        </div>
    );
};

export default Profile_details;