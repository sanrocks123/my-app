import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RestAPIs } from "./RestAPIs.service";

/** 
 * Service class for data access layer
 * 
*/

@Injectable()
export class EmployeeService {

    constructor(private http: HttpClient) {
        console.log('httpClient injected');
    }

    /** 
     * return employees
     * 
    */
    public listEmployees() {
        return this.http.get(RestAPIs.TODOs);
    }
}