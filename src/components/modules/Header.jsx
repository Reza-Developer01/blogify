import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"
import { LuMoon, LuSun } from "react-icons/lu"

import { Box, Text, Container } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Header = () => {
    const { toggleColorMode, colorMode } = useColorMode()

    return (
        <Box as="header" display="flex" alignItems="center" height="16" borderBottomWidth="1px">
            <Container display="flex" alignItems="center" justifyContent="space-between">
                <Text fontWeight="bold" fontSize="2xl">
                    <Link to="/">بلاگیفای</Link>
                </Text>

                <Box>
                    <ClientOnly fallback={<Skeleton boxSize="8" />}>
                        <IconButton onClick={toggleColorMode} variant="outline" size="sm">
                            {colorMode === "light" ? <LuMoon /> : <LuSun />}
                        </IconButton>
                    </ClientOnly>
                </Box>
            </Container>
        </Box>
    )
}

export default Header