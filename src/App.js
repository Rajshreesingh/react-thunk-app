import "./App.css";

import { userAction } from "./redux/actions/userAction";
import User from "./components/User";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  useEffect(() => {
    dispatch(userAction);
  }, [dispatch]);
  return (
    <div className="App">
      <h1>Redux thunk App</h1>
      {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <User users={users} />
      )}
    </div>
  );
}

export default App;
