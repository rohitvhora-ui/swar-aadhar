import axios from 'axios';
export default axios.create({
    baseURL: 'http://restapiservice-env.eba-hivxmetm.us-east-2.elasticbeanstalk.com/api/'
})