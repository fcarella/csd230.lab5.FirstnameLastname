
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Book from "./Book.jsx";
import UserDataFetcher from "./UserFetcher.jsx";
import MyApp from "./MyApp.jsx";
import BookList from "./BookList.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            {/*<Route path="/" element={<App />} />*/}
            <Route path="/book" element={<Book />} />
            <Route path="/" element={<MyApp />} />
            <Route path="/oldIndex" element={<App />} />
            <Route path="/userDataFetcher" element={<UserDataFetcher/>} />
            <Route path="/bookList" element={<BookList/>} />
        </Routes>
    </BrowserRouter>
);

