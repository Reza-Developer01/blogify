import Header from "@/components/modules/Header"
import { Box } from "@chakra-ui/react"

const MainLayout = ({ children }) => {
    return (
        <Box as="main">
            <Header />
            {children}
        </Box>
    )
}

export default MainLayout