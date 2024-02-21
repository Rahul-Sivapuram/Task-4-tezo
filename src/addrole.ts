import { RolePage } from "./role";

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
            var empname:HTMLInputElement=document.getElementById("searchPlaceholder")! as HTMLInputElement;
            var RoleModel= new Rolemodel(empname.value,roleName.value,department.value,location.value,description
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
            var empdataarray=JSON.parse(existingempData);
            for(let i in empdataarray)
            {
                let doc=empdataarray[i];
                if(doc.USER == empname && doc.ROLE == "")
                {
                doc.ROLE=roleName;
                var jsonstring=JSON.stringify(empdataarray);
                localStorage.setItem("EmployeeData",jsonstring);
                }
            }
            let toast:HTMLDivElement=document.querySelector(".toast-role")! as HTMLDivElement;
            toast.style.display = "flex";
            this.customToast();
        }
}