import axios from "axios";
import { MainUrl } from "./mainUrl";

const axiosAPI = axios.create({
  baseURL: MainUrl,
  headers: {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    "Authorization": `Bearer ${localStorage.adminBearer}`
}});



export async function axiosPost(url, obj, callBack){
  try {
    const response = await axiosAPI.post(url, obj);
    const data = (response.data);
    callBack(data);

  } catch (error) {
    if (error.response) {
      console.log(
        "🚀 ~ file: axiosRequest.js ~ line 12 ~ axiosPOST ~ err.response",
        error.response.data
      );
      callBack(error?.response?.data);

    } else {
      callBack(error);

  }}
}


export async function axiosGet(url , callBack){

  try {
    const response = await axiosAPI.get(url);
    
    callBack(response.data);

  } catch (error) {
    if (error.response) {
      console.log(
        "🚀 ~ file: axiosRequest.js ~ line 34 ~ axiosGet ~ err.response",
        error.response.data
      );
      callBack(error?.response?.data);

    } else {
      callBack(error);

  }}
}

export async function axiosPut( url, obj, callBack) {

  try {
    const response = await axiosAPI.put( url, obj);
    const data= (response.data);
    callBack(data);

  } catch (error) {
    if (error.response) {
      console.log(
        "🚀 ~ file: axiosReuest.js ~ line 76 ~ axiosPUTCall ~ err.response",
        error.response.data
      );
      callBack(error?.response?.data);

    } else {
    callBack(error);
  }}};


export async function axiosDelete( url, callBack) {

  try {
    const response = await axiosAPI.delete(url);
    const data= (response.data);
    callBack(data);

  } catch (error) {
    if (error.response) {
      console.log(
        "🚀 ~ file: axiosReuest.js ~ line 66 ~ axiosPUTCall ~ err.response",
        error.response.data
      );
      callBack(error?.response?.data);

    } else {
    callBack(error);
  }}};
