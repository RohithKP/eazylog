import { HttpHeaders } from "@angular/common/http";

export const config: any = {
    API_URL: ''
};
export const httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Content-Type':  'application/json'
    })
  };