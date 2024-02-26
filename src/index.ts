
import { EmployeeDetails } from "./employee";
import { RolePage } from "./role";
import { AddEmployee } from "./addemployee";
import { AddRole } from "./addrole";
import { Sidebar } from "./sidebar";

class App{
  employeeobject;
  constructor(){
    this.employeeobject=new EmployeeDetails();
    this.employeeobject.onload();
  }
  
  rolepageobject=new RolePage();
  addemployeeobject=new AddEmployee();
  addroleobject=new AddRole();
  sidebar=new Sidebar();
}

let app=new App();
(window as any).app=app;
