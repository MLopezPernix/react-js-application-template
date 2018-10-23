import axios from 'axios'

export function getAllUsersRequest() {
 return axios.get(
    'https://jsonplaceholder.typicode.com/users', {
    //  headers: {
    //    Authorization: authToken,
    //    contentType: 'application/json'
    //  }
   }
 ).then(response => response.data)
}