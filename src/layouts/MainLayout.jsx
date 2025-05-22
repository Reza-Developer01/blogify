import Header from "@/components/modules/Header"
import { Box, Container } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <>
            <Header />
            <Box as="main" marginY="10">
                <Container>
                    <Outlet />
                </Container>
            </Box>
        </>
    )
}

export default MainLayout