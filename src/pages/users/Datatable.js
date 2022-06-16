import React, {Component} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './datatable.scss'
import axios from 'axios';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Link } from 'react-router-dom';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name ', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    {field: 'sex', headerName: 'Genre',type: 'string',width: 190,},
    {field: 'cin', headerName: 'CIN',type: 'string',width: 190,},
    
  ];
  
  


class DataTable extends Component
{
    state = {
        employees :[] ,
        loading : true , 
    }


    
    async componentDidMount(){
        const res = await axios.get('http://127.0.0.1:8000/api/salaries') ; 
        console.log(res.data.success)
        if(res.data.success === true){
            this.setState({
                employees : res.data.employees , 
                loading : false , 
            })
        }
    }

    // handleDelete = (id) => {
    //   setData(data.filter((item) => item.id !== id));
    // };
  

    userColumns = [{
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="action">
            <Link to={`/users/${this.state.employees.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">Voir</div>
            </Link>
            <Link to="/users/update"  style={{ textDecoration: "none" }}>

            <div
              className="deleteButton"
              
              >
              Modifier
            </div>
              </Link>
          </div>
        );
      },
    }]
    
    render() {        
        // console.log(this.state.employees[0].id) ; 
          return(
            <div className='datatable'>
                <h1 className="datatableTitle">
                    Ajouter un nouveau employe
                    <Link to="/users/new" className="link">
                      <PersonAddAltIcon/>
                    </Link>
                </h1>
                <DataGrid
                  rows={this.state.employees}
                  columns={columns.concat(this.userColumns)}
                  pageSize={9}
                  rowsPerPageOptions={[9]}
                  checkboxSelection
                />
            </div>

          );
      }
    


  
}


export default DataTable ; 