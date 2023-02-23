export default function timeFormat(timestamp) {

    let data = new Date(timestamp)
    // console.log(data.getTime());
    return data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + data.getDate() + ' ' + (data.getHours() - 8) + ':' + data.getMinutes() + ':' + data.getSeconds()
    // date = date.toJSON();

    // date = date.substring(0, 19).replace('T', ' ')

    // return timestamp

}   
