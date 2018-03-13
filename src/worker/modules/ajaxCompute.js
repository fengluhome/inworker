import axios from 'axios';

export default {
    add() {
        return axios({
            url: "http://172.29.1.166:8080/citymonitor/scenic/top?cityName=北京&date=2018-02-25",
            method: "get",
            timeout: 60000,
        }).then(response => {
            return response.data.sort((a, b) => {
                return a.maxDevice - b.maxDevice;
            });
        })
    }
}