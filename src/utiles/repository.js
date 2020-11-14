import {api} from './baseUrl';

const postImage=async (data)=>{
    return await api.post('', data);
}
export const repository= {
    postImage,
}