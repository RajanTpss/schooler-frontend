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
                  return (<>

                    <th scope="col">{item}</th>
                   
                  </>
                  )
                })
                : null
            }
             <th scope="col">Actions</th>
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
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>Veiw Delete</td>
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