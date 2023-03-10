import { Box } from "@mui/material";
import { useState } from "react";

function SMSearch(props) {
    const { list, onSearch } = props
    const [selected, setSelected] = useState();

    console.log(list)
    let searching = (e) => {
        onSearch(selected, e);
    }

    return (
        <Box>
            <input type="text" onChange={(e) => searching(e.target.value)} />
            <select onChange={(e) => setSelected(e.target.value)}>
                <option value="">Select</option>
                {list.map((x, i) => (
                    <option key={i} value={x.key}>
                        {x.displayName}
                    </option>
                ))}
            </select>
        </Box>
    )
}

export default SMSearch;