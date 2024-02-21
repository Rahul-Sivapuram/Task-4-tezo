
import { EmployeeDetails } from "./employee";
import { RolePage } from "./role";
import { AddEmployee } from "./addemployee";
import { AddRole } from "./addrole";
import { Sidebar } from "./sidebar";

class App{
  obj1;
  obj2;
  obj3;
  obj4;
  obj5;
  constructor(){
    this.obj1=new EmployeeDetails();
    this.obj1.insertingempdom("employee.html",".employee-page-section");
    this.obj2=new RolePage();
    this.obj2.insertroledom("role.html",".roledetails-page-section");
    this.obj2.insertroledetailsdom("roledetails.html",".role-page-section");
    this.obj3=new AddEmployee();
    this.obj4=new AddRole();
    this.obj5=new Sidebar();
  }
}
const app=new App();