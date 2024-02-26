import { RolePage } from "./role";
type EmployeeModelDataTypes={
    DEPARTMENT:string,
    DOB: string,
    EMAIL: string,
    EMPNO: string,
    JOINDT: string,
    JobTitle: string,
    LOCATION: string,
    Manager: string,
    MobileNumber: string,
    ProfilePic: string,
    Project: string,
    ROLE: string,
    STATUS: string,
    USER: string,
}
class Rolemodel {
    EmpName: string;
    Role: string;
    Department: string;
    Location: string;
    TotalEmployees: string;
    Description: string;
  
    constructor(
        empName: string,
        roleName: string,
        department: string,
        description: string,
        location: string
    ) {
        this.EmpName = empName;
        this.Role = roleName;
        this.Department = department;
        this.Description = description;
        this.Location = location;
        this.TotalEmployees = "+43";
    }
}
export class AddRole extends RolePage{
    customToast(){
        setTimeout(()=>{
            let toast:HTMLDivElement=document.querySelector(".toast-role")! as HTMLDivElement;
            toast.style.display = "none";
            this.showAddRolePage();
        },3000);
    }
    
    addRoleData(event:Event){
        event.preventDefault();
        var roleName:HTMLInputElement = document.getElementById("role-rolename")! as HTMLInputElement;
        var department:HTMLInputElement = document.getElementById("role-selectdepartment")! as HTMLInputElement;
        var description:HTMLTextAreaElement = document.getElementById("role-description")! as HTMLTextAreaElement;
        var location:HTMLSelectElement = document.getElementById("role-selectlocation")! as HTMLSelectElement;
        var empname:HTMLSpanElement=document.getElementById("searchPlaceholder")! as HTMLSpanElement;
        var RoleModel= new Rolemodel(empname.innerText,roleName.value,department.value,location.value,description
            .value);
        var NewRoleModel=[RoleModel];
        var existingData = localStorage.getItem("RoleData");
        if(existingData!== null)
        {
            var dataarray=JSON.parse(existingData);
            dataarray.push(RoleModel);
            var jsonString = JSON.stringify(dataarray);
            localStorage.setItem("RoleData",jsonString);
        }
        else{
            var jsonString=JSON.stringify(NewRoleModel);
            localStorage.setItem("RoleData",jsonString);
        }
    
        var existingempData:string = localStorage.getItem("EmployeeData")!;
        var empdataarray:any=JSON.parse(existingempData);
        for(let i in empdataarray)
        {
            let doc=empdataarray[i];
            console.log(doc);
            if(doc.USER == empname.innerText && doc.ROLE == "")
            {
            doc.ROLE=roleName.value;
            var jsonstring=JSON.stringify(empdataarray);
            localStorage.setItem("EmployeeData",jsonstring);
            }
        }
        let toast:HTMLDivElement=document.querySelector(".toast-role")! as HTMLDivElement;
        toast.style.display = "flex";
        this.customToast();
    }
}