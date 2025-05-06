import Navbar from '../navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile_details = ({ user}) => {
    const name = user.displayName;
    const email = user.email;
    const phone = user.phoneNumber
    const photo = user.photoURL
    console.log(user)

    
    const toastSuccessful = () =>{
        toast('Succesfully submitted the Registration');
      }
    
    return (
        <div >
            <Navbar></Navbar>
          <p><span className="font-bold">Name:</span> {name ? name : 'Name not found'}</p>
          <p><span className="font-bold">Email id:</span> {email}</p>
          <p><span className="font-bold">Phone:</span> {phone ? phone : 'Phone number not found'}</p>
          <p><span className="font-bold">Phone:</span> {photo ? photo : 'Photo not found'}</p>
          <button className="btn btn-primary" onClick={toastSuccessful}>Toast Button</button>
          <ToastContainer />
        </div>
    );
};

export default Profile_details;