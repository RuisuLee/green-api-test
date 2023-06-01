import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateChat } from "./components/CreateChat/CreateChat";
import { Chat } from "./components/Chat/Chat";
import { Login } from "./components/Login/Login";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="create-chat" element={<CreateChat />} />
        <Route path="chat/:chatId" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
