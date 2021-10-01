import React from "react"
import { showTable } from "./api"
import TableContainer from "./components/TableContainer/TableContainer"

function App() {
  const [table, setTable] = React.useState([])

  React.useEffect(() => {
    showTable().then((res) => {
      console.log(res.data.results)
      setTable(res.data.results)
    })
  }, [])

  return (
    <div className="App">
      <TableContainer table={table} />
    </div>
  );
}

export default App;
