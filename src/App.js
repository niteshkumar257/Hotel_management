import Login from "./login";
import Reservation from "./reservation";
import Landing from "./landing";
import MainPage from "./mainPage";
import { Route, Routes } from "react-router-dom";
import Analytics from "./Analytics";
import Staff from "./Staff";
import Room from "./Room";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/booking" element={<Reservation />} />
      <Route path="/mainPage">
      <Route index element={<MainPage />} />
         <Route path="analysis" element={<Analytics/>}/>
         <Route path="staff" element={<Staff/>}/>
         <Route path="room" element={<Room/>}/>

      </Route>
    
    </Routes>
  );
}

export default App;
