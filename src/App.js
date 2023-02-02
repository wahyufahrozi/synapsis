import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";

import { Container } from "@material-ui/core";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PostDetail from "./components/PostDetail";
import User from "./components/User";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
