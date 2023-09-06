import React, { useContext, useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';

const Table = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:8080/");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);


    const columns = [
        { headerName: "ID", field: "RowID", checkboxSelection: true },
        { headerName: "Order ID", field: "OrderID"},
        { headerName: "Order Date", field: "Order_Date"},
        { headerName: "Ship Date", field: "Ship_Date"},
        { headerName: "Ship Mode", field: "Ship_Mode"},
        { headerName: "Customer ID", field: "CustomerID"},
        { headerName: "Customer Name", field: "Customer_Name"},
        { headerName: "Segment", field: "Segment"},
        { headerName: "Country", field: "Country"},
        { headerName: "City", field: "City"},
        { headerName: "State", field: "State"},
        { headerName: "Postal Code", field: "Postal_Code"},
        { headerName: "Region", field: "Region"},
        { headerName: "Product ID", field: "ProductID"},
        { headerName: "Category", field: "Category"},
        { headerName: "Product Name", field: "Product_Name"},
        { headerName: "Sales", field: "Sales"},
        { headerName: "Quantity", field: "Quantity"},
        { headerName: "Discount", field: "Discount"},
        { headerName: "Profit", field: "Profit"},


    ]

    const defaultCondef = {
        sortable: true, filter: true, floatingFilter: true, flex: 1,
    }

    return (
        <div className="ag-theme-alpine" style={{ margin: "auto", width: 3000, height: 600 }}>

            <AgGridReact
                rowData={data}
                columnDefs={columns}
                defaultColDef={defaultCondef}
            />
        </div>
    )
}

export default Table;