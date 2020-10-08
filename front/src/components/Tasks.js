import React from 'react';
import {Button} from 'react-bootstrap';
import TaskService from '../services/TaskService';

export default class Tasks extends React.Component{
   constructor(props) {
       super(props);
       this.state = {
           tasks: [],
           value: ''
       }

       this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.fetchTasks = this.fetchTasks.bind(this);
   };
   handleDelete = async (task) => {
    await TaskService.delete(task.id_task)
    this.fetchTasks();
   }
   
   handleChange(event) {    this.setState({value: event.target.value});  }

   handleCreate = async (event) => {
        event.preventDefault();

        await TaskService.create(this.state.value)
        this.fetchTasks();
    
    }

    async componentDidMount (){
        this.fetchTasks();
    }

    fetchTasks = async() => {
        this.setState({tasks: await TaskService.getAll()});
    }


   render(){
       let content;
       if(this.state.tasks.length == 0)
           content = (<h2>No tasks</h2>)
       else
           content = (
               <div className="col-md-6">
               <table style={{"marginTop":"2%"}} className="table table-hover">
                   <thead>
                       <tr>
                           <th scope="col">#</th>
                           <th scope="col">Title</th>
                       </tr>
                   </thead>
                   <tbody>
                           {
                           this.state.tasks.map((task, index) => {
                           return(
                               <tr key={index}>
                                       <td>{index+1}</td>
                                       <td>{task.title_task}</td>
                                       <td>
                                           <Button variant="outline-danger" size="sm"
                                               type="button"
                                               onClick={()=>this.handleDelete(task)}
                                               >Delete
                                           </Button>
                                       </td>
                               </tr>
                           )})
                           }
                       </tbody>

               </table>
               </div>   
           );

        return(
            <div>
                <form onSubmit={this.handleCreate}>
                    <label>
                    Task title :
                    <input type="text" onChange={this.handleChange} />        </label>
                    <input type="submit" value="Submit" />
                </form>
                {
                    content
                }
            </div>
        )
   }
}