import { ButtonGroup, IconButton } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

const PaginationBlogs = ({ total, currentPage, onPageChange, blogsPerPage }) => {
    const totalPages = Math.ceil(total / blogsPerPage)

    const getPageNumbers = () => {
        const pages = []
        const maxPagesToShow = 5
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2))
        let endPage = startPage + maxPagesToShow - 1

        if (endPage > totalPages) {
            endPage = totalPages
            startPage = Math.max(1, endPage - maxPagesToShow + 1)
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i)
        }

        return pages
    }

    return (
        <ButtonGroup variant="ghost" size="sm" justifyContent="center" width="100%" display="flex" alignItems="center" gap="1" mt="4">

            {getPageNumbers().map(page => (
                <IconButton key={page} aria-label={`رفتن به صفحه ${page}`} variant={page === currentPage ? "outline" : "ghost"} onClick={() => onPageChange(page)}>
                    {page}
                </IconButton>
            ))}
        </ButtonGroup>
    )
}

export default PaginationBlogs
