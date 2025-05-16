import { Badge, Box, Card, Heading, Stack, Text } from "@chakra-ui/react"
import { useEffect } from "react"
import { LuCalendar, LuTags, LuUserPen } from "react-icons/lu"

const BlogsList = () => {
    useEffect(() => {
        
    }, [])

    return (
        <Box as="section">
            <Heading fontFamily="IranYekanX" mb="5">لیست مقالات</Heading>

            <Stack direction="row" gap="6" flexWrap="wrap">
                <Card.Root width="320px" flexGrow="1">
                    <Card.Body gap="2">
                        <Card.Title>این وبسایت چیست؟</Card.Title>
                        <Box display="flex" alignItems="center" gapX="2" fontSize="sm">
                            <Text display="flex" alignItems="center" gapX="1">
                                <LuCalendar />
                                1404/27/2
                            </Text>

                            <Text display="flex" alignItems="center" gapX="1">
                                <LuUserPen />
                                امیررضا رشوند
                            </Text>
                        </Box>
                        <Card.Description lineClamp="2">
                            یه سری توضیحات چرت و پرت و بی معنی فقط برای پر کردن یه فضا. یه سری توضیحات چرت و پرت و بی معنی فقط برای پر کردن یه فضا.
                        </Card.Description>
                    </Card.Body>
                    <Card.Footer>
                        <LuTags />
                        <Box display="flex" alignItems="center" gapX="2">
                            <Badge size="sm">ورزشی</Badge>
                            <Badge size="sm">علمی</Badge>
                            <Badge size="sm">تخیلی</Badge>
                        </Box>
                    </Card.Footer>
                </Card.Root>
                <Card.Root width="320px" flexGrow="1">
                    <Card.Body gap="2">
                        <Card.Title>این وبسایت چیست؟</Card.Title>
                        <Box display="flex" alignItems="center" gapX="2" fontSize="sm">
                            <Text display="flex" alignItems="center" gapX="1">
                                <LuCalendar />
                                1404/27/2
                            </Text>

                            <Text display="flex" alignItems="center" gapX="1">
                                <LuUserPen />
                                امیررضا رشوند
                            </Text>
                        </Box>
                        <Card.Description lineClamp="2">
                            یه سری توضیحات چرت و پرت و بی معنی فقط برای پر کردن یه فضا. یه سری توضیحات چرت و پرت و بی معنی فقط برای پر کردن یه فضا.
                        </Card.Description>
                    </Card.Body>
                    <Card.Footer>
                        <LuTags />
                        <Box display="flex" alignItems="center" gapX="2">
                            <Badge size="sm">ورزشی</Badge>
                            <Badge size="sm">علمی</Badge>
                            <Badge size="sm">تخیلی</Badge>
                        </Box>
                    </Card.Footer>
                </Card.Root>
                <Card.Root width="320px" flexGrow="1">
                    <Card.Body gap="2">
                        <Card.Title>این وبسایت چیست؟</Card.Title>
                        <Box display="flex" alignItems="center" gapX="2" fontSize="sm">
                            <Text display="flex" alignItems="center" gapX="1">
                                <LuCalendar />
                                1404/27/2
                            </Text>

                            <Text display="flex" alignItems="center" gapX="1">
                                <LuUserPen />
                                امیررضا رشوند
                            </Text>
                        </Box>
                        <Card.Description lineClamp="2">
                            یه سری توضیحات چرت و پرت و بی معنی فقط برای پر کردن یه فضا. یه سری توضیحات چرت و پرت و بی معنی فقط برای پر کردن یه فضا.
                        </Card.Description>
                    </Card.Body>
                    <Card.Footer>
                        <LuTags />
                        <Box display="flex" alignItems="center" gapX="2">
                            <Badge size="sm">ورزشی</Badge>
                            <Badge size="sm">علمی</Badge>
                            <Badge size="sm">تخیلی</Badge>
                        </Box>
                    </Card.Footer>
                </Card.Root>
                <Card.Root width="320px" flexGrow="1">
                    <Card.Body gap="2">
                        <Card.Title>این وبسایت چیست؟</Card.Title>
                        <Box display="flex" alignItems="center" gapX="2" fontSize="sm">
                            <Text display="flex" alignItems="center" gapX="1">
                                <LuCalendar />
                                1404/27/2
                            </Text>

                            <Text display="flex" alignItems="center" gapX="1">
                                <LuUserPen />
                                امیررضا رشوند
                            </Text>
                        </Box>
                        <Card.Description lineClamp="2">
                            یه سری توضیحات چرت و پرت و بی معنی فقط برای پر کردن یه فضا. یه سری توضیحات چرت و پرت و بی معنی فقط برای پر کردن یه فضا.
                        </Card.Description>
                    </Card.Body>
                    <Card.Footer>
                        <LuTags />
                        <Box display="flex" alignItems="center" gapX="2">
                            <Badge size="sm">ورزشی</Badge>
                            <Badge size="sm">علمی</Badge>
                            <Badge size="sm">تخیلی</Badge>
                        </Box>
                    </Card.Footer>
                </Card.Root>
            </Stack>
        </Box>
    )
}

export default BlogsList