import {getRequest,postRequestJSON,postRequestForm} from '../api/index';

export const getLogin=(url,params)=>postRequestJSON(url,params).then(res=>res.data);
