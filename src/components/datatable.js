import * as React from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootstrap from 'react-bootstrap';
const {useState, useEffect} = React;
export default function Datatable({data}){
    const [employee, setEmployee] = useState([]);
    const[loading, setLoading] = useState(false);
    const getUserData = async () => {
        try{
            const data = await axios.get(
                "https://6096be38116f3f00174b38a5.mockapi.io/employee/add"
            );

                setEmployee(data.data);
                setLoading(true);
        } catch (e) {
            console.log(e)
        }
    };
    const columns = [
        {dataField: "name", text:"User Name"},
        {dataField: "email" ,text:"User Email"},
        {dataField: "position" ,text:"User Position"}
    ]
    let allQuotes = Number(data.length);
    const options = {
        paginationSize: 5,
        pageStartIndex: 1,
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        sizePerPageList: [{
          text: 'show 5', value: 5
        }, {
          text: 'show 10', value: 10
        }, {
          text: 'Show all', value: allQuotes
        }]
      };
    useEffect(() => {
        getUserData();
    })

	return (
        <div>
            {loading ? (  <BootstrapTable 
            keyField = "name"
            data={employee}
            columns={columns}
            pagination={paginationFactory(options)}
            />) : (
                <ReactBootstrap.Spinner animation="border" />
            )}
          
        </div>
    )
}