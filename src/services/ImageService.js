import axios from 'axios'
import { localApi, contentType } from '../contansts/config/api'
export default {
    async getImages(url) {
        let res = await axios({
            method: 'post',
            url: localApi,
            data: {
                url: url, // This is the body part
            },
            headers: contentType
        });
        if (res.status == 200)
            return res;
    },
}