import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Box, Heading, Spinner, Text, Badge, Stack } from "@chakra-ui/react"
import { getBlogsList } from "@/services/blogsList"
import { LuCalendar, LuUserPen, LuTags } from "react-icons/lu"

const BlogDetail = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchBlog = async () => {
            const { response } = await getBlogsList()
            if (response) {
                const found = response.data.find(item => item.id.toString() === id)
                setBlog(found)
            }
            setIsLoading(false)
        }

        fetchBlog()
    }, [id])

    if (isLoading) return <Spinner />

    if (!blog) return <Text>مقاله‌ای پیدا نشد</Text>

    return (
        <Box maxW="800px" mx="auto" py="8">
            <Heading mb="4">{blog.title}</Heading>
            <Stack direction="row" spacing="4" fontSize="sm" mb="4">
                <Text display="flex" alignItems="center" gap="1"><LuCalendar /> {new Date(blog.createdAt).toLocaleDateString("fa-IR")}</Text>
                <Text display="flex" alignItems="center" gap="1"><LuUserPen /> {blog.author}</Text>
            </Stack>
            <Text mb="6">{blog.description}</Text>
            <Box display="flex" alignItems="center" gap="2">
                <LuTags />
                {
                    blog.categories.map((category, index) => (
                        <Badge key={index}>{category}</Badge>
                    ))
                }
            </Box>
        </Box>
    )
}

export default BlogDetail
