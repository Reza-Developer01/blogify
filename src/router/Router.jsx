import MainLayout from "@/layouts/MainLayout";
import BlogDetail from "@/pages/BlogDetail";
import HomePage from "@/pages/HomePage";
import { Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/blogs/:id" element={<BlogDetail />} />
            </Route>
        </Routes>
    )
}

export default Router