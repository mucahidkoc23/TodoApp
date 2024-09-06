import ListHeader from "./components/ListHeader";
import { useEffect, useState } from "react";
import LıstItem from "./components/ListItem";
import Auth from "./components/Auth";
import {useCookies} from "react-cookie";

const App = () => {
  const [tasks, setTask] = useState(null);
  const[cookies, setCookie, removeCookie] = useCookies(null);
  const authToken = cookies.AuthToken;
  const userEmail = cookies.Email;

  const getDate = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`
      );
      const json = await response.json();
      setTask(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (authToken) {
      getDate();
    }
  }, []);
  console.log(tasks);

  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="app">
      {!authToken && <Auth />}
      {authToken && (
        <>
          <ListHeader listName={"⛳ Holiday tick list"} getData={getDate} />
          <p className="user-email">Welcome back {userEmail}</p>
          {sortedTasks?.map((task) => (
            <LıstItem key={task.id} task={task} getData={getDate} />
          ))}
        </>
      )}
      <p className="copyright">© Creative Coding mucahidkoc</p>
    </div>
  );
};

export default App;
