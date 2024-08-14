import { useSelector, useDispatch } from "react-redux";
import { logOut, selectCurrentUser } from "../../redux/AuthReducer";
import { closeDropDown } from "../../redux/ModalReducer";
import GuestProfileModal from "./guestProfileModal";
import AuthProfileModal from "./AuthProfileModal";

const ProfileModal = (props) => {
  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    dispatch(closeDropDown());
    localStorage.removeItem("jwtToken");
  };
  return currentUser ? (
    <AuthProfileModal handleLogout={handleLogout} />
  ) : (
    <GuestProfileModal />
  );
};

export default ProfileModal;
