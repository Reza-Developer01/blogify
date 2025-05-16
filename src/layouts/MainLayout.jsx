import Header from "@/components/modules/Header"
import { Box, Container } from "@chakra-ui/react"

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Box as="main" marginY="10">
                <Container>
                    {children}
                </Container>
            </Box>
        </>
    )
}

export default MainLayout