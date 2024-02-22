import { EmployeeDetails } from "./employee";
export class Sidebar extends EmployeeDetails{

    showSidebar(){
        const sidebar:HTMLDivElement = document.querySelector(".sidebar")!;
        const navbarpages:HTMLDivElement=document.querySelector(".navbar-pages")!;
        const sidebarsmallsidebar:HTMLDivElement=document.querySelector(".sidebar-smallsidebar")!;
        const smallsidebar:HTMLDivElement=document.querySelector(".small-sidebar")!;
        smallsidebar.style.display="none";
        sidebar.style.display = "flex";
        sidebarsmallsidebar.style.width="16%";
        navbarpages.style.width="84%";
    }
    
    hideSidebar(){
        const sidebar:HTMLDivElement = document.querySelector(".sidebar")!;
        const navbarpages:HTMLDivElement=document.querySelector(".navbar-pages")!;
        const sidebarsmallsidebar:HTMLDivElement=document.querySelector(".sidebar-smallsidebar")!;
        const smallsidebar:HTMLDivElement=document.querySelector(".small-sidebar")!;
        sidebar.style.display = "none";
        smallsidebar.style.display = "flex";
        sidebarsmallsidebar.style.width="3%";
        sidebarsmallsidebar.style.height="100%";
        navbarpages.style.width="95%";
    }

    showDropDown(){
        var arrow:HTMLImageElement=document.querySelector(".arrow")!;
        var dropdown:HTMLDivElement=document.querySelector(".userstatus-menu")!;
        arrow.src="assets/svg/arrowdown.svg";
        if(!dropdown.style.display ||dropdown.style.display == "none"){
            dropdown.style.display="block";
        }
        else if(dropdown.style.display="block"){
            arrow.src="assets/svg/arrowforward.svg"
            dropdown.style.display="none";
        }
    }
        
    showEmp(){
        this.showTableRows()
        var employeepage:HTMLElement = document.querySelector(".employee-page")! as HTMLElement;
        var roledetailspage:HTMLElement=document.querySelector(".roledetails-page")! as HTMLElement;
        if(!employeepage.style.display || employeepage.style.display == "none"){
            employeepage.style.display = "block";
            roledetailspage.style.display="none";
        }
        else{
            employeepage.style.display = "none";
        }
    }
    
    showEmptyDisplay(){
        let emppage:HTMLElement=document.querySelector(".employee-page")! as HTMLElement;
        let roledetailspage:HTMLElement=document.querySelector(".roledetails-page")! as HTMLElement; 
        let rolepage:HTMLElement=document.querySelector(".role-page")! as HTMLElement;
        if(rolepage.style.display == "block" || roledetailspage.style.display == "block" || emppage.style.display == "block"){
          rolepage.style.display  = "none"; 
          roledetailspage.style.display = "none";
          emppage.style.display = "none";
        }
    }
}