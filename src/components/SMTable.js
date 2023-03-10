
function SMTable(props) {
    const { arr } = props

    let keys = Object.keys(arr[0]);


    return (
        <table>
            <thead>
                <tr>
                    {
                        keys.map((e, i) => {    
                            return <th key={i}>{e}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    arr.map((e,i)=>{
                         return <tr key={i}>
                            {
                                keys.map((x,id)=>{
                                    return <td key={id}>{e[x]}</td>
                                })
                            }
                        </tr>
                    })
                }
            </tbody>

        </table>
    )
}
export default SMTable;