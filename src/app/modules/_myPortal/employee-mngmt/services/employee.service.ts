import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaderService } from 'src/app/modules/_core/components/_services/http-header.service';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient,private header:HttpHeaderService) { }

  getEmployeeList():Observable<Employee[]>{
    return this.http.get<Employee[]>(environment.getEmployee).pipe(
      map((response:Employee[])=>{
        
        for(let i in response){
          let totalExperience=0;
          response[i].action='';
          response[i].department=response[i].department.departmentName;
          response[i].designation=response[i].designation.designationName;
          response[i].location=response[i].branch.branchName;
          for(let j in response[i].employeeExperience){
             totalExperience=totalExperience+response[i].employeeExperience[j].noOfYears
          }
          (totalExperience==0 || totalExperience==1)?response[i].experienceLevel='1':(totalExperience==2 || totalExperience==3)?response[i].experienceLevel='2':(totalExperience==4 || totalExperience==5)?response[i].experienceLevel='3':response[i].experienceLevel='4';
          console.log(totalExperience)
          // response[i].document.fileUrl=BASE_URL+response[i].document.fileUrl.substring(2);
        }
        return response;
      })
    )
  }

}
