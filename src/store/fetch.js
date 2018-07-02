import axios from 'axios'

import {API_ROOT} from '../config'

const Fetch = ({
  url,
  data,
  method = 'get',
  headers,
  params,
  withCredentials = true,
  responseType = 'json',
  successAction,
  errorAction
}) => {
  const response = axios({
    url: url.lastIndexOf('http') > 0 ? url : `${API_ROOT}${url}`,
    data,
    method,
    headers,
    params,
    withCredentials,
    responseType
  })
  response
    .then((res) => successAction(res.data))
    .catch((err) => errorAction(err))
}

export default Fetch
