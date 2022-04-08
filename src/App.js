import ChatHome from "./pages/ChatHome";
import "./sass/style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AuthProvider from "./context/AuthProvider";
import ModalProvider from "./context/ModalProvider";
import RoomProvider from "./context/RoomProvider";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ModalProvider>
          <RoomProvider>
            <Routes>
              <Route path="/" element={<ChatHome />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </RoomProvider>
        </ModalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
