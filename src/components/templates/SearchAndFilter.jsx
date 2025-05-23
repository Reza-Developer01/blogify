import { Box } from "@chakra-ui/react"
import SearchBox from "../modules/SearchBox"
import SortByAscAndDesc from "../modules/SortByAscAndDesc"

const SearchAndFilter = ({ search, setSearch, sortOrder, setSortOrder }) => {
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" mb="5">
            <SearchBox search={search} setSearch={setSearch} />

            <SortByAscAndDesc sortOrder={sortOrder} setSortOrder={setSortOrder} />
        </Box>
    )
}

export default SearchAndFilter