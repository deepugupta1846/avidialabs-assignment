import { useEffect } from "react";
import "../css/App.css";
import { useDispatch } from "react-redux";
import { getUserData } from "../redux/userSlice";
import { Profile } from "./Profile";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
  }, []);
  return (
    <>
      <div className="App">
        <Profile />
      </div>
    </>
  );
}

export default App;
