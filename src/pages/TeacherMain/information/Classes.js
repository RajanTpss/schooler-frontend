import React from 'react'
import CustomPaggination from '../../../Components/CustomPaggination';
import CustomTable from '../../../Components/CustomTable'

function Classes() {
    const tableHeading=["sahil","Ridham","Bhateja"];
    const tableData=[{id:"1"},{id:"8"},{id:"45"}];
  return (
   <>
   <CustomTable tableHeading={tableHeading} tableData={tableData}/>
   <div id="container">
   <CustomPaggination itemsPerPage={4} />
   </div>
   </>
  )
}

export default Classes