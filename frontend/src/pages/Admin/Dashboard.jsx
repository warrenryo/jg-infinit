import { Link } from "react-router-dom"
import Card from "../../components/dashboard/Card"
import { useEffect, useState } from "react"
import axios from "axios"
import Search from "../../components/dashboard/Search"
import { Breadcrumbs } from "../../components/dashboard/Breadcrumbs"

 const AdminDashboard = ({setLoading, loading}) => {
    const hostServer = import.meta.env.VITE_HOSTSERVER
    const [search, setSearch] = useState("") 
    const [tables, setTables] = useState([])
    const getNumberTables = async () => {
        try {
          setLoading(true)
            const result = await axios.get(`${hostServer}/numtables`)
            const numTables = result.data
            console.log(numTables)
            setTables(numTables)
          setLoading(false)
        } catch (error) {
            console.log(error)
          setLoading(false)
        }

    }

    useEffect(()=>{
        getNumberTables()
    },[])

    return(<>
<>
        <Breadcrumbs title={"List Of Brands"}/>
      <Search setSearch={setSearch} search={search}/>
  {/* Card Section */}
  <div className="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-10 mx-auto">
    {/* Grid */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
        {/* Card */}
       

        {tables.filter((val, i)=>{
 return val.TABLE_NAME.includes(search)
}).map((val, i)=>{
    return(
        <Card key={val.TABLE_NAME} brand={val.TABLE_NAME.toUpperCase()} length={val.TABLE_ROWS}/>
    )
})}

      {/* End Card */}
    
    </div>
    {/* End Grid */}
    
  </div>

  {/* End Card Section */}
</>


    </>)
}

export default AdminDashboard