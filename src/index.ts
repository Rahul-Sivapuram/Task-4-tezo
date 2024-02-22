
import { EmployeeDetails } from "./employee";
import { RolePage } from "./role";
import { AddEmployee } from "./addemployee";
import { AddRole } from "./addrole";
import { Sidebar } from "./sidebar";

class App{
  employeeobject;
  rolepageobject;
  addemployeeobject;
  addroleobject;
  sidebar;
  constructor(){
    this.employeeobject=new EmployeeDetails();
    this.employeeobject.addDOMContentLoadedListener();
    this.rolepageobject=new RolePage();
    this.addemployeeobject=new AddEmployee();
    this.addroleobject=new AddRole();
    this.sidebar=new Sidebar();
  }
}
let app=new App();