import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../NavBar";
import { MdPadding } from "react-icons/md";

const ViewPage = () => {
  const history = useHistory();

  const getParams = useParams();

  const getID = getParams.id;

  const getStorage = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  const getData = getStorage[getID];

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

      <div style={style}> {getData}</div>
    </>
  );
};

export default ViewPage;
