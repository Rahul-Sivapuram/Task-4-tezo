import { EmployeeDetails } from "./employee";

class Employee {
    ProfilePic: string;
    USER: string;
    LOCATION: string;
    DEPARTMENT: string;
    ROLE: string;
    EMPNO: string;
    STATUS: string;
    JOINDT: string;
    EMAIL: string;
    DOB: string;
    MobileNumber: string;
    JobTitle: string;
    Manager: string;
    Project: string;
  
    constructor(
        profilePic: string,
        user: string,
        location: string,
        department: string,
        role: string,
        empNo: string,
        status: string,
        joinDt: string,
        email: string,
        dob: string,
        mobileNumber: string,
        jobTitle: string,
        manager: string,
        project: string
    ) {
        this.ProfilePic = profilePic;
        this.USER = user;
        this.LOCATION = location;
        this.DEPARTMENT = department;
        this.ROLE = role;
        this.EMPNO = empNo;
        this.STATUS = status;
        this.JOINDT = joinDt;
        this.EMAIL = email;
        this.DOB = dob;
        this.MobileNumber = mobileNumber;
        this.JobTitle = jobTitle;
        this.Manager = manager;
        this.Project = project;
    }
}

export class AddEmployee extends EmployeeDetails{
    customtoast(){
        setTimeout(()=>{
        let toast:HTMLDivElement=document.querySelector(".toast-employee")! as HTMLDivElement;
        toast.style.display = "none";
        this.showAddEmployeePage();
        },3000);
    }
      
    addEmployeeData(event:Event):void{
        event.preventDefault();
        const empNumber: string = (document.getElementById("emp-number") as HTMLInputElement).value;
        const firstName: string = (document.getElementById("first-name") as HTMLInputElement).value;
        const lastName: string = (document.getElementById("last-name") as HTMLInputElement).value;
        const dob: string = (document.getElementById("dob") as HTMLInputElement).value;
        const emailId: string = (document.getElementById("email-id") as HTMLInputElement).value;
        const mobileNo: string = (document.getElementById("mobile-no") as HTMLInputElement).value;
        const joiningDate: string = (document.getElementById("joining-date") as HTMLInputElement).value;
        const location: string = (document.getElementById("add-select-loc") as HTMLSelectElement).value;
        const jobTitle: string = (document.getElementById("add-select-jobtitle") as HTMLSelectElement).value;
        const department: string = (document.getElementById("add-select-department") as HTMLSelectElement).value;
        const assignManager: string = (document.getElementById("managers") as HTMLSelectElement).value;
        const assignProject: string = (document.getElementById("projects") as HTMLSelectElement).value;
        var EmpModel=new Employee(
          this.fileUrl,
          firstName + lastName,
          location,
          department,
          "",
          empNumber,
          "Inactive",
          joiningDate,
          emailId,
          dob,
          mobileNo,
          jobTitle,
          assignManager,
          assignProject
        );
        var NewEmpModel = [EmpModel];
        var existingData = localStorage.getItem("EmployeeData");
        if(mobileNo.length <10 || mobileNo.length>10){
          alert("Mobile Number should be 10 digits");
        }
        else
        {
          if(existingData !== null)
          {
            var dataarray=JSON.parse(existingData);
            dataarray.push(EmpModel);
            var jsonString = JSON.stringify(dataarray);
            localStorage.setItem("EmployeeData",jsonString);
          }
          else{
            var jsonString=JSON.stringify(NewEmpModel);
            localStorage.setItem("EmployeeData",jsonString);
          }
          let toast:HTMLDivElement=document.querySelector(".toast-employee")! as HTMLDivElement;
          toast.style.display = "flex";
          this.customtoast();
          this.fileUrl="";
        }
    }
}