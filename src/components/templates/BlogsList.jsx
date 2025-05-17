import { getBlogsList } from "@/services/blogsList"
import { Badge, Box, Card, Heading, Spinner, Stack, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { LuCalendar, LuTags, LuUserPen } from "react-icons/lu"
import SearchAndFilter from "./SearchAndFilter"

const BlogsList = () => {
    const [allBlogs, setAllBlogs] = useState([])
    const [blogs, setBlogs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [search, setSearch] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const { response, error } = await getBlogsList();
            if (response) {
                setAllBlogs(response.data);
                setBlogs(response.data);
            }
            setIsLoading(false);
        }

        fetchData()
    }, [])

    useEffect(() => {
        const filtered = allBlogs.filter(blog =>
            blog.title.includes(search)
        )
        setBlogs(filtered)
    }, [search, allBlogs])

    return (
        <Box as="section">
            <Heading fontFamily="IranYekanX" mb="5">لیست مقالات</Heading>

            <SearchAndFilter search={search} setSearch={setSearch} />

            {
                isLoading ? <Spinner size="md" /> : <Stack direction="row" gap="6" flexWrap="wrap">
                    {
                        blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)
                    }
                </Stack>
            }
        </Box>
    )
}

export default BlogsList

export const BlogCard = ({ blog }) => {
    return (
        <Card.Root width="326px">
            <Card.Body gap="2">
                <Card.Title>{blog.title}</Card.Title>
                <Box display="flex" alignItems="center" gapX="2" fontSize="sm">
                    <Text display="flex" alignItems="center" gapX="1">
                        <LuCalendar />
                        {new Date(blog.createdAt).toLocaleDateString("fa-IR") || "تاریخ نامشخص"}
                    </Text>

                    <Text display="flex" alignItems="center" gapX="1">
                        <LuUserPen />
                        {blog.author}
                    </Text>
                </Box>
                <Card.Description lineClamp="2">
                    {blog.description}
                </Card.Description>
            </Card.Body>
            <Card.Footer>
                <LuTags />
                <Box display="flex" alignItems="center" gapX="2">
                    {
                        blog.categories.map((category, index) => <Badge size="sm" key={index}>{category}</Badge>)
                    }
                </Box>
            </Card.Footer>
        </Card.Root>
    )
}