import { Button, Menu, Portal } from "@chakra-ui/react"
import { useState } from "react"
import { HiSortAscending } from "react-icons/hi"

const items = [
    { label: "قدیمی ترین", value: "asc" },
    { label: "جدیدترین", value: "desc" },
]

const SortByAscAndDesc = () => {
    const [value, setValue] = useState("asc")

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm">
                    مرتب سازی بر اساس<HiSortAscending />
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner dir="rtl">
                    <Menu.Content minW="10rem">
                        <Menu.RadioItemGroup value={value} onValueChange={(e) => setValue(e.value)}>
                            {items.map((item) => (
                                <Menu.RadioItem key={item.value} value={item.value} dir="rtl" p="2">
                                    <Menu.ItemIndicator />
                                    {item.label}
                                </Menu.RadioItem>
                            ))}
                        </Menu.RadioItemGroup>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default SortByAscAndDesc