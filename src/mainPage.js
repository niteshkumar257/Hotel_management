import Navbar from "./navbar";
import { Link } from "react-router-dom";

const mainPage = () => {
    return (
        <>
            <Navbar />
            <div className="main">
                <div className="box">
                  <Link to="/mainPage/room">Rooms</Link>
                </div>
                <div className="box">
                    <Link to="/mainPage/staff" >Housekepping</Link>
                </div>
                <div className="box">
                    <Link to="/mainPage/analysis" >Analysis</Link>
                </div>
            </div>
        </>
    );
}

export default mainPage;