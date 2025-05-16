import { Box } from "@chakra-ui/react"
import SearchBox from "../modules/SearchBox"
import SortByAscAndDesc from "../modules/SortByAscAndDesc"

const SearchAndFilter = () => {
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" mb="5">
            <SearchBox />

            <SortByAscAndDesc />
        </Box>
    )
}

export default SearchAndFilter