import axios from 'axios';

const url = "http://localhost:5000";

export const addUser = async (data) => {
     try {
          return await axios.post(`${url}/api/add`,data)
     }catch(err) {
          console.log('Error while calling addUser api',err);
     }
}

export const getUsers = async() => {
	try {
          let resp = await axios.get(`${url}/api/users`);
          console.log(resp);
          return resp.data;
	} catch (err) {
		console.log("Error while calling getUsers api", err);
	}
};

export const setConvo = async (data) => {
     try {
          await axios.post(`${url}/api/convo/add`,data)
     }catch(err) {
          console.log('Error while calling setConvo api',err);
     }
}

export const getConvo = async (users) => {
     try {
          let resp = await axios.get(`${url}/api/convo/get`, users)
          return resp;
     }catch(err) {
          console.log('Error while calling getConvo api',err);
     }
}

export const newMsg = async (data) => {
     try {
          return await axios.post(`${url}/api/msg/add`,data)
     }catch(err) {
          console.log('Error while calling newMsg api',err);
     }
}