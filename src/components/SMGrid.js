import { Box } from "@mui/material";
import SMSearch from "./SMSearch";


function SMGrid(props) {
    const { Loading, columns, info } = props

    return (
        <div>

            <Box>
                <SMSearch list={columns.filter((x) => x.searchItem)}
                    onSearch={(key, val) => {
                        let data = info.filter((x) =>(x[key].includes(val)));
                        console.log(data);
                    }} />
            </Box>
            {Loading ? (
                <img
                    width="40%"
                    src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif"
                    alt="Loading..."
                />
            ) : columns && Array.isArray(columns) && columns.length < 1 ? (
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/016/026/432/small/user-not-found-account-not-register-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
                    width="40%"
                    alt="No Data Found :("
                />
            ) : (
                <table>
                    <thead>
                        <tr>

                            {
                                columns && Array.isArray(columns) && columns.length > 0 ?
                                    columns.map((x, i) => <th key={i}>{x.displayName}</th>)
                                    : null
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            info && Array.isArray(info) && info.length > 0 ?
                                info.map((e, i) => (<tr key={i}>
                                    {
                                        columns.map((a, b) => (<td key={b}>
                                            {a.displayField ? a.displayField(e) : e[a.name]}</td>))
                                    }
                                </tr>)) : null
                        }
                    </tbody>
                </table>
            )
            }
        </div>
    )
}

export default SMGrid;