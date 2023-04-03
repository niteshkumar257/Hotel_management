import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


export default function DataTable({columns,rows}) {
  console.log("dataTable,",rows);
  return (
    <Box sx={{ height:"auto", width: '100%' ,display:"flex",
    justifyContent:"center",alignItems:"center"}}>
      <DataGrid
      sx={{
        "& .MuiDataGrid-columnHeaders": {
            // color:"#009df1;",
           
            backgroundColor:"skyblue",
            color:"white",
             
            fontSize:"17px",
            // fontWeight:900
          },
          height:"100vh",width :"90vw",
          "& .MuiDataGrid-footerContainer": {
            color:"white",
            borderTop: "none",
            backgroundColor:"skyblue",
          },
      }}
     
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection={false}
        disableRowSelectionOnClick
        autoHeight={true}
      />
    </Box>
  );
}