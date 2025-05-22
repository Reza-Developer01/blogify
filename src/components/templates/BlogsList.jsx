import { getBlogsList } from "@/services/blogsList"
import { Badge, Box, Card, Heading, Spinner, Stack, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { LuCalendar, LuTags, LuUserPen } from "react-icons/lu"
import SearchAndFilter from "./SearchAndFilter"
import PaginationBlogs from "./PaginationBlogs"
import { Link } from "react-router-dom"

const BlogsList = () => {
    const [allBlogs, setAllBlogs] = useState([])
    const [blogs, setBlogs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [search, setSearch] = useState("")
    const [sortOrder, setSortOrder] = useState("desc")

    const [currentPage, setCurrentPage] = useState(1)
    const blogsPerPage = 8

    useEffect(() => {
        const fetchData = async () => {
            const { response } = await getBlogsList();
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
            blog.title.toLowerCase().includes(search.toLowerCase())
        )
        setBlogs(filtered)
        setCurrentPage(1)
    }, [search, allBlogs])

    const sortedBlogs = [...blogs].sort((a, b) => {
        return sortOrder === "asc"
            ? new Date(a.createdAt) - new Date(b.createdAt)
            : new Date(b.createdAt) - new Date(a.createdAt)
    })

    const startIndex = (currentPage - 1) * blogsPerPage
    const endIndex = startIndex + blogsPerPage
    const paginatedBlogs = sortedBlogs.slice(startIndex, endIndex)

    return (
        <Box as="section">
            <Heading fontFamily="IranYekanX" mb="5">لیست مقالات</Heading>

            <SearchAndFilter
                search={search}
                setSearch={setSearch}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
            />

            {isLoading ? (
                <Spinner size="md" mb="5" />
            ) : (
                <Stack direction="row" gap="6" flexWrap="wrap" mb="5">
                    {paginatedBlogs.map(blog => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </Stack>
            )}

            <PaginationBlogs total={blogs.length} currentPage={currentPage} onPageChange={setCurrentPage} blogsPerPage={blogsPerPage} />
        </Box>
    )
}

export default BlogsList

export const BlogCard = ({ blog }) => {
    return (
        <Card.Root width="326px">
            <Card.Body gap="2">
                <Card.Title as={Link} to={`/blogs/${blog.id}`}>{blog.title}</Card.Title>
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
                        blog.categories.map((category, index) => (
                            <Badge size="sm" key={index}>{category}</Badge>
                        ))
                    }
                </Box>
            </Card.Footer>
        </Card.Root>
    )
}
