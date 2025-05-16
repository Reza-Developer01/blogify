import Header from "@/components/modules/Header"
import BlogsList from "@/components/templates/BlogsList"
import MainLayout from "@/layouts/MainLayout"

const HomePage = () => {
    return (
        <MainLayout>
            <BlogsList />
        </MainLayout>
    )
}

export default HomePage