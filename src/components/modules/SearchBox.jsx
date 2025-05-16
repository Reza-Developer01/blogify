import { Input, InputGroup } from "@chakra-ui/react"
import { useState } from "react"
import { LuSearch } from "react-icons/lu"

const SearchBox = () => {
    const [search, setSearch] = useState("")

    return (
        <InputGroup startElement={<LuSearch />} width="4/12">
            <Input placeholder="جستجوی مقاله" value={search} onChange={e => setSearch(e.target.value)} />
        </InputGroup>
    )
}

export default SearchBox