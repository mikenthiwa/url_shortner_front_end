import axios from "axios";
import { toast } from 'react-toastify';
import {APIResponse} from "../types";

const url: string | any = process.env.REACT_APP_BASE_URL

export const fetchLinks = async (): Promise<any> => {
  try {
    const { data : { data: shortUrls} }: {data: APIResponse} = await axios.get(url);
    return shortUrls
  } catch (error: APIResponse | any) {
    return toast.error(error.message)
  }
}

export const createLink = async (link: string) => {
  try {
    const { data }: APIResponse = await axios.post(`${url}/create`, {link});
    return data;
  } catch (error) {
    const { response: {data} }: any = error
    if(data.code === 409) {
      toast.error(data.errorMessage)
    }else {
      toast.error('Something went wrong')
    }
  }
}


