import axios from 'axios'

const TaskService = {
  getAll: async () => {
    const response = await axios.get('http://localhost:4000/task')
    const result = response.data
    return result
  },
  create: async (titleTask) => {
    const response = await axios.post('http://localhost:4000/task', {
      title_task: titleTask
    })
    const result = response.data
    return result
  },
  delete: async (id) => {
    const response = await axios.delete(`http://localhost:4000/task/${id}`)
    const result = response.data
    return result
  }
}

export default TaskService
