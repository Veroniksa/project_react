import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import { signOut } from "../../services/firebase";

import { ThemeContext } from "../utils/ThemeContext";
import { selectProfileCheckBox } from "../../store/profile/selectors";
import { checkBoxOff, onLogout } from "../../store/profile/action";
import { ProfileTop } from "../ProfileTop";
import { ProfileForm } from "../ProfileForm";

const withContext = (Component) => {
  return (...props) => {
    const theme = useContext(ThemeContext);

    return <Component {...props} theme={theme} />;
  };
};

export const Profile = ({ theme }) => {
  const checkBox = useSelector(selectProfileCheckBox);
  const dispatchBox = useDispatch();
  const dispatch = useDispatch();

  const onChange = () => {
    dispatchBox(checkBoxOff);
  };

  const handleLogout = () => {
    dispatch(onLogout);
  };

  return (
    <>
      <ProfileTop theme={theme} />
      <button onClick={handleLogout}>Logaut</button>

      <ProfileForm />

      <Checkbox value={checkBox} onChange={onChange}></Checkbox>
      {checkBox && <div>Check box is on</div>}
    </>
  );
};

export const ThemeProfile = withContext(Profile);
