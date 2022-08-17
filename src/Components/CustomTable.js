import React from 'react'

const CustomTable = ({ tableHeading, tableData }) => {
  // console.log(tableHeading)
  return (
    <>
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            {
              tableHeading.length > 0
                ?
                tableHeading.map((item) => {
                  return (
                    <th scope="col">{item}</th>
                  )
                })
                : null
            }
          </tr>
        </thead>
        <tbody>
          {
            tableData.length > 0
              ?
              tableData.map((item) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </>
                )
              })
              : null
          }
        </tbody>
      </table>
    </>
  )
}

export default CustomTable