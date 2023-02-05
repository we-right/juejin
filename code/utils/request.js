import axios from "axios";
// import { ElMessage } from 'element-plus'
// import router from "../router/index"
const methods = ['get', 'post', 'delete']
const baseUrl = 'http://127.0.0.1:1337'
const contentTypes = ['application/json', 'multipart/form-data']
//0表示json，1表示formdata
export default function request(url, data, methodIndex, contentTypeIndex) {
    return new Promise((resolve, reject) => {
        axios({
            baseURL: baseUrl,
            url,
            method: methods[methodIndex],
            data,
            headers: {
                'Authorization': localStorage.getItem('Authorization') || null,
                'Content-Type': contentTypes[contentTypeIndex || 0]
            }
        }).then(res => {
            resolve(res.data)
            console.log(res.data);
        })
    })
}