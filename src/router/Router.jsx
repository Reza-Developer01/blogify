import HomePage from "@/pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}

export default Router