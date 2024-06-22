import {
  Link,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../NavBar";
import AuthCheckBoolean from "../../middleware/AuthCheckBoolean";

const ViewPage = () => {
  const history = useHistory();

  // From params.
  // const getParams = useParams();

  // const getID = getParams.id;

  // From query.
  const getLocation = useLocation();

  const getURLParams = new URLSearchParams(getLocation.search);

  const getID = getURLParams.get("id");

  const getStorage = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  const getData = getStorage[getID];

  const onDeleteHandler = () => {
    getStorage.splice(getID, 1);
    localStorage.setItem("todo", JSON.stringify(getStorage));

    history.replace("/");
  };

  const style = {
    background: "#e7e7e7",
    padding: "20px",
    fontSize: "18px",
    margin: "20px",
  };

  const goBack = () => {
    history.push("/");
  };
  return (
    <>
      <NavBar />
      <div className="todo_container">
        <button
          onClick={goBack}
          style={{ background: "#e7e7e7", color: "#666" }}
        >
          Go back
        </button>
      </div>

      <div style={style}>{getData}</div>

      {AuthCheckBoolean() ? (
        <>
          {" "}
          <button onClick={onDeleteHandler} style={{ background: "red" }}>
            {" "}
            Delete To-Do
          </button>
        </>
      ) : (
        <>
          {" "}
          Login to see more options <Link to="/login">Login Here</Link>{" "}
        </>
      )}
    </>
  );
};

export default ViewPage;
