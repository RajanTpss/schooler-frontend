import React, { useEffect, useState } from 'react'
import CustomPaggination from '../../../Components/CustomPaggination';
import CustomTable from '../../../Components/CustomTable'
import SearchBox from '../../../Components/SearchBox';
import Http from '../../../services/http.services';

function Classes() {
    const tableHeading=["Id","Name","Description"];
    const [tableData,setTableData]=useState([])

    useEffect(()=>{
      data();
    },[])

    const data =()=>{
      Http.getAPI(`admin/subject?isActive=null`)
      .then((res)=>{
        console.log("res",res.data.data);
        setTableData(res.data.data);
      })
    }


    const submitData = (e) => {
      console.log("Data:");
  }

  return (
   <>
   <SearchBox OptionData={[0,1]} submitData={submitData}/>
   <CustomTable tableHeading={tableHeading} tableData={tableData}/>
   <div id="container">
   <CustomPaggination itemsPerPage={4} />
   </div>
   </>
  )
}

export default Classes