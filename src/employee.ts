
type FilterMultiSelectDropDownModel={
    filterDisplayName: string;
    checkboxItems: {label: string,value: string,id: string,name: string}[];
}
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
export class EmployeeDetails{
    fileUrl:string = "";
    statusArray:string[] = [];
    departmentArray:string[] = [];
    locationArray:string[] = [];
    itCount:number = 0;
    peCount:number = 0;
    uiuxCount:number = 0;
    filterAlphabet: string = "";
    filterDropdownModel = {
        filterDisplayName: "Status",
        checkboxItems: [
            { label: "Active", value: "Active", id: "status",name: "filter-status"},
            { label: "Inactive", value: "Inactive", id: "status",name:"filter-status"}
        ]
    };
    filterDropdownModel2 = {
        filterDisplayName: "Department",
        checkboxItems: [
            { label: "Product Engg", value: "ProductEngg", id: "departments", name: "filter-department" },
            { label: "UIUX", value: "UIUX", id: "departments", name: "filter-department" },
            { label: "IT", value: "IT", id: "departments", name: "filter-department" }
        ]
    };
    filterDropdownModel3 = {
        filterDisplayName: "Location",
        checkboxItems: [
            { label: "Hyderabad", value: "Hyderabad", id: "location", name: "filter-location" },
            { label: "Mumbai", value: "Mumbai", id: "location", name: "filter-location" },
            { label: "Pune", value: "Pune", id: "location", name: "filter-location" },
            { label: "Delhi", value: "Delhi", id: "location", name: "filter-location" }
        ]
    };

    insertPagesIntoContainer():void {
      let pageContainer:HTMLDivElement = document.querySelector('.employee-page-section')! as HTMLDivElement;
      fetch('../employee.html')
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.text();
          })
          .then(html => {
              pageContainer.innerHTML += html;
          })
          .catch(error => console.error('Error fetching content:', error));
  
      fetch('../role.html')
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.text();
          })
          .then(html => {
              pageContainer.innerHTML += html;
          })
          .catch(error => console.error('Error fetching content:', error));
  
      fetch('../roledetails.html')
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.text();
          })
          .then(html => {
              pageContainer.innerHTML += html;
          })
          .catch(error => console.error('Error fetching content:', error));
    }

    addDOMContentLoadedListener():void{
      document.addEventListener("DOMContentLoaded", () => {
          this.insertPagesIntoContainer();
      });
    }
    
    handleFileInputChange():void{
      let fileInput:HTMLInputElement=document.getElementById("addFilePicker")! as HTMLInputElement;
      var profilepic:HTMLImageElement=document.querySelector(".profilepic")!;
      fileInput.addEventListener('change',()=>{
          const fr=new FileReader();
          fr.readAsDataURL(fileInput.files![0]);
          fr.addEventListener('load',()=>{
          this.fileUrl!=fr.result;
          profilepic.src=this.fileUrl;
          console.log(this.fileUrl);
          });
      });
      profilepic.src="assets/images/profile-user.png";
      this.fileUrl="";
    }
    
    alphabetStateChange(){
      var containers = document.querySelectorAll(".alphabet");
      var previousContainer:any = null;
      var clickTimer:any;
      containers.forEach((container) =>{
          container.addEventListener("click", (event) => {
              var spanValue = container.querySelector("span");
              if (clickTimer) {
                  clearTimeout(clickTimer);
                  clickTimer = null;
                  container.classList.remove("change-alphabet");
                  this.filterAlphabet="";
                  this.showTableRows();
              } else {
                  clickTimer = setTimeout(()=> {
                      clickTimer = null;
                      if (previousContainer !== null) {
                          previousContainer.classList.remove("change-alphabet");
                      }
                      container.classList.add("change-alphabet");
                      this.filterAlphabet=spanValue?.textContent || "";
                      previousContainer = container;
                  }, 300); 
              }
          });
      });
    }

    createMultiSelectDropDown():void{
      let filterleft: HTMLDivElement = document.querySelector(".filter-left")! as HTMLDivElement;
      let dropone: HTMLElement = this.createFilterDropdown(this.filterDropdownModel, "filter-dropdown-1", "filter-display1", "filtercheckbox-dropdownlist", this.showFilterStatusDropdown);
      filterleft.appendChild(dropone);
      let droptwo: HTMLElement = this.createFilterDropdown(this.filterDropdownModel2, "filter-dropdown-2", "filter-display2", "filtercheckbox-dropdownlist2", this.showFilterDepartmentDropdown);
      filterleft.appendChild(droptwo);
      let dropthree: HTMLElement = this.createFilterDropdown(this.filterDropdownModel3, "filter-dropdown-3", "filter-display3", "filtercheckbox-dropdownlist3", this.showFilterLocationDropdown);
      filterleft.appendChild(dropthree);
    }

    createFilterDropdown(model:FilterMultiSelectDropDownModel, divId:string,spanId:string,dropDownId:string,callback:Function):HTMLDivElement {
      var filterDropdownContainer = document.createElement("div");
      filterDropdownContainer.classList.add(divId);
      filterDropdownContainer.onclick=function(){
          callback();
      };
      var filterDisplaySpan = document.createElement("span");
      filterDisplaySpan.id = spanId;
      filterDisplaySpan.textContent = model.filterDisplayName;
      filterDropdownContainer.appendChild(filterDisplaySpan);
      var arrowImg = document.createElement("img");
      arrowImg.src = "assets/images/arrowdown.png";
      arrowImg.alt = "Arrowdown symbol";
      arrowImg.width = 10;
      arrowImg.height = 10;
      filterDropdownContainer.appendChild(arrowImg);
      var dropdownListContainer = document.createElement("div");
      dropdownListContainer.classList.add(dropDownId);
      model.checkboxItems.forEach(function(item) {
          var checkboxItem = document.createElement("div");
          checkboxItem.classList.add("checkbox-items");
      
          var span = document.createElement("span");
          span.textContent = item.label;
          checkboxItem.appendChild(span);
      
          var input = document.createElement("input");
          input.type = "checkbox";
          input.value = item.value;
          input.name = item.name;
          input.id = item.id;
          checkboxItem.appendChild(input);
          dropdownListContainer.appendChild(checkboxItem);
    });
    filterDropdownContainer.appendChild(dropdownListContainer);
    return filterDropdownContainer;
    }

    getDepartmentCount(cat1:string,cat2:string,cat3:string):void{
      let existingdata:string=localStorage.getItem("EmployeeData")!;
      let array:EmployeeModelDataTypes[]=JSON.parse(existingdata);
      array.filter((val:EmployeeModelDataTypes)=>{
          if(val.DEPARTMENT == cat1){
          this.uiuxCount += 1;
          }
          else if(val.DEPARTMENT == cat2){
          this.itCount += 1;
          }
          else if(val.DEPARTMENT == cat3 || val.DEPARTMENT == "Product Engg"){
          this.peCount += 1;
          }
          let itBox:HTMLDivElement=document.querySelector(".department-button-square-one")!;
          let uiuxBox:HTMLDivElement=document.querySelector(".department-button-square-two")!;
          let peBox:HTMLDivElement=document.querySelector(".department-button-square-three")!;
          itBox!.textContent=this.itCount.toString();
          uiuxBox!.textContent=this.uiuxCount.toString();
          peBox!.textContent=this.peCount.toString();
      })
    }

    createUserRow(data:EmployeeModelDataTypes):HTMLTableRowElement{
    var tableRow = document.createElement('tr') ;
    var radioCell = document.createElement('td');
    var radioInput = document.createElement('input');
    let deletebutton:HTMLButtonElement=document.querySelector(".delete-button")!;
    radioInput.setAttribute('type', 'checkbox');
    radioInput.setAttribute('name', 'checkbox4');
    radioInput.setAttribute('id', 'checkbox4');
    radioInput.onchange=(e)=>{
        const checkinput=e.target as HTMLInputElement;
        if(checkinput.checked){
        deletebutton.classList.add("checked-delete-button");
        }
        else{
        deletebutton.classList.remove("checked-delete-button");
        }
    }
    var labelForRadio = document.createElement('label');
    labelForRadio.setAttribute('for', 'sample');
    radioCell.appendChild(radioInput);
    radioCell.appendChild(labelForRadio);
    tableRow.appendChild(radioCell);
    // Create user profile cell
    var userProfileCell = document.createElement('td');
    userProfileCell.classList.add('user-profile-box');
    // Create user avatar image
    var avatarImage = document.createElement('img');
    if(data.ProfilePic != "" && "ProfilePic" in data){
        avatarImage.setAttribute('src', data.ProfilePic);
        avatarImage.setAttribute('alt', 'Human Avatar');
    }
    else{
        avatarImage.setAttribute('src', 'assets/images/man.png');
        avatarImage.setAttribute('alt', 'Human Avatar');
    }
    userProfileCell.appendChild(avatarImage);
    // Create user details span
    var userDetailsSpan = document.createElement('span');
    userDetailsSpan.classList.add('span-outside-userprofilebox');
    // Add user name and email to details span
    userDetailsSpan.innerHTML = `${data.USER}<br><span class="span-inside-userprofilebox">${data.EMAIL}</span>`;
    userProfileCell.appendChild(userDetailsSpan);
    // Add user profile cell to the table row
    tableRow.appendChild(userProfileCell);
    // Create and add other cells to the table row
    var locationCell = document.createElement('td');
    locationCell.textContent = data.LOCATION;
    tableRow.appendChild(locationCell);
    var departmentCell = document.createElement('td');
    departmentCell.textContent = data.DEPARTMENT;
    tableRow.appendChild(departmentCell);
    var roleCell = document.createElement('td');
    roleCell.textContent = data.ROLE;
    tableRow.appendChild(roleCell);
    var empNoCell = document.createElement('td');
    empNoCell.textContent = data.EMPNO;
    tableRow.appendChild(empNoCell);
    var statusCell = document.createElement('td');
    var activeButton = document.createElement('div');
    activeButton.classList.add('active-button');
    activeButton.innerHTML = `<span>${data.STATUS}</span>`;
    statusCell.appendChild(activeButton);
    tableRow.appendChild(statusCell);
    var joinDateCell = document.createElement('td');
    joinDateCell.textContent = data.JOINDT;
    tableRow.appendChild(joinDateCell);
    var dotsCell = document.createElement('td');
    var dotsImage = document.createElement('img');
    dotsImage.setAttribute('src', 'assets/svg/threedots.svg');
    dotsImage.setAttribute('alt', 'Threedots symbol');
    dotsImage.classList.add("own-model-button")
    dotsImage.onclick = (event) => {
        const target = event.target as HTMLElement;
        const ownModalDiv = target.nextElementSibling as HTMLDivElement;
        if (ownModalDiv) {
            ownModalDiv.style.display = (ownModalDiv.style.display === 'block') ? 'none' : 'block';
        }
    };
    var ownModalDiv = document.createElement('div');
    ownModalDiv.classList.add("own-model");
    var viewParagraph = document.createElement('p');
    viewParagraph.textContent = 'View';
    ownModalDiv.appendChild(viewParagraph);
    var editParagraph = document.createElement('p');
    editParagraph.textContent = 'Edit';
    ownModalDiv.appendChild(editParagraph);
    var deleteParagraph = document.createElement('p');
    deleteParagraph.textContent = 'Delete';
    ownModalDiv.appendChild(deleteParagraph);
    viewParagraph.classList.add("own-model-p");
    editParagraph.classList.add("own-model-p");
    deleteParagraph.classList.add("own-model-p");

    dotsCell.appendChild(dotsImage);
    dotsCell.appendChild(ownModalDiv);
    tableRow.appendChild(dotsCell);
    return tableRow;
    }

    showFilterStatusDropdown():void{
    var list:HTMLDivElement = document.querySelector(".filtercheckbox-dropdownlist")! as HTMLDivElement;
    var placeholder:HTMLDivElement = document.getElementById("filter-display1")! as HTMLDivElement;
    var chk:NodeListOf<HTMLInputElement>=document.querySelectorAll('input[type="checkbox"][name="filter-status"]');
    if (!list.style.display || list.style.display === "none") {
        list.style.display = "flex";
    } else {
        list.style.display = "none";
    }
    let arr:string[]=[];
    chk.forEach((event)=>{
        event.addEventListener("click",()=>{
            let v=event.value;
            if(event.checked){
            arr.push(v);
            }
            else{
            const index = arr.indexOf(v);
            if (index !== -1) {
                arr.splice(index, 1);
            }
            }
            this.statusArray=arr;
            placeholder.innerText=arr.length +" "+ "Selected";
        });
    });
    }

    showFilterDepartmentDropdown():void{
    var list:HTMLDivElement = document.querySelector(".filtercheckbox-dropdownlist2")! as HTMLDivElement;
    var placeholder:HTMLDivElement = document.getElementById("filter-display2")! as HTMLDivElement;
    var chk:NodeListOf<HTMLInputElement>=document.querySelectorAll('input[type="checkbox"][name="filter-department"]');
    if (!list.style.display || list.style.display === "none") {
        list.style.display = "flex";
    } else {
        list.style.display = "none";
    }
    let arr:string[]=[]
    chk.forEach((event)=>{
        event.addEventListener("click",()=>{
            let v=event.value;
            if(event.checked){
            arr.push(v);
            }
            else{
            const index = arr.indexOf(v);
            if (index !== -1) {
                arr.splice(index, 1);
            }
            }
            this.departmentArray=arr;
            console.log(this.departmentArray);
            placeholder.innerText=arr.length +" "+ "Selected";
        });
    });
    }

    showFilterLocationDropdown():void{
      var list:HTMLDivElement = document.querySelector(".filtercheckbox-dropdownlist3")! as HTMLDivElement;
      var placeholder:HTMLDivElement = document.getElementById("filter-display3") as HTMLDivElement;
      var chk:NodeListOf<HTMLInputElement>=document.querySelectorAll('input[type="checkbox"][name="filter-location"]');
      if (!list.style.display || list.style.display === "none") {
          list.style.display = "flex";
      } else {
          list.style.display = "none";
      }
      let arr:string[]=[];
      chk.forEach((event)=>{
          event.addEventListener("click",()=>{
              let v=event.value;
              if(event.checked){
              arr.push(v);
              }
              else{
              const index = arr.indexOf(v);
              if (index !== -1) {
                  arr.splice(index, 1);
              }
              }
              this.locationArray=arr;
              console.log(this.locationArray);
              placeholder.innerText=arr.length +" "+ "Selected";
          });
      });
    }
   
    filterSection():void{
      const filteroption:HTMLElement = document.querySelector(".filter-option")! as HTMLElement;
      if(filteroption.style.display == "none"){
          filteroption.style.display = "flex";
      }
      else{
          filteroption.style.display = "none";
      }
    }
    
    showAddEmployeePage():void{
        var mainpage:HTMLElement=document.querySelector(".table-part")! as HTMLElement;
        var emppage:HTMLElement=document.querySelector(".addemployee-page")! as HTMLElement;
        var addemp:HTMLElement=document.querySelector(".add-employee")! as HTMLElement;
        if(mainpage.style.display == "block")
        {
          mainpage.style.display = "none";
          emppage.style.display = "block";
          addemp.style.display = "none";
        }
        else if(emppage.style.display == "block"){
          mainpage.style.display = "block";
          addemp.style.display = "flex";
          emppage.style.display = "none";
        }
        else{
          mainpage.style.display = "none";
          addemp.style.display = "none";
          emppage.style.display = "block";
        }
    }
    
    deleteRow():void{
      const employeeDataString:string = localStorage.getItem('EmployeeData')!;
      let employeeData = JSON.parse(employeeDataString);
      const indextodelete = [15,16,17,18,19]; 
      indextodelete.sort((a, b) => b - a);
      indextodelete.forEach(index => {
          if (index >= 0 && index < employeeData.length) {
              employeeData.splice(index, 1);
          } else {
              console.log(`Invalid index ${index}.`);
          }
      });
      const updatedEmployeeDataString = JSON.stringify(employeeData);
      localStorage.setItem('EmployeeData', updatedEmployeeDataString);
      console.log('Objects deleted successfully.');
    }
  
    addToCsv():void{
      const table: HTMLTableElement | null = document.getElementById('UserTable') as HTMLTableElement;
      if (!table) return; 
  
      const data: string[] = [];
      for (let i = 0; i < table.rows.length; i++) {
          const row: string[] = [];
          const tableRow = table.rows[i];
          for (let j = 0; j < tableRow.cells.length; j++) {
              const cell = tableRow.cells[j];
              row.push(cell.textContent?.trim() ?? ''); // Use optional chaining and nullish coalescing operator
          }
          data.push(row.join(','));
      }
      const csvContent: string = data.join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'data.csv';
      link.click();
    }
  
    filterByAlphabet(inp:string):void{
      var table:HTMLTableElement = document.getElementById('UserTable')! as HTMLTableElement;
      var existingdata:string=localStorage.getItem("EmployeeData")!;
      var array=JSON.parse(existingdata);
      var ficon: HTMLImageElement | null =document.querySelector(".filter-image")as HTMLImageElement;
  
      if (table && existingdata && ficon) {
        table.querySelector('tbody')!.innerHTML="";
        var filtered=[];
        filtered=[];
        for(let i in array)
        {
          let doc=array[i];
          if(doc.USER[0] == inp){
            filtered.push(doc);
          }
          else{
            continue;
          }
        }
        if(filtered.length > 0){
          ficon.src="assets/images/filter.png";
          for(let j in filtered){
            let res=this.createUserRow(filtered[j]);
            table.querySelector('tbody')!.appendChild(res);
          }
        }
        else{
          ficon.src="assets/images/filterblack.png";
        }
      }
    }
  
    sortAccordToCol(inp:string):void{
      var existingdata:string=localStorage.getItem("EmployeeData")!;
      var array=JSON.parse(existingdata);
    
      array.sort((a:any, b:any) => {
        if (a[inp] < b[inp]) return -1;
        if (a[inp] > b[inp]) return 1;
        return 0;
      });
      console.log(array);
      var table:HTMLTableElement = document.getElementById('UserTable')! as HTMLTableElement;
      table.querySelector('tbody')!.innerHTML="";
    
      for(let i in array)
      {
        let doc=this.createUserRow(array[i]);
        table.querySelector('tbody')!.appendChild(doc);
      }
    }
  
    sortDecToCol(inp:string):void{
      var existingdata:string=localStorage.getItem("EmployeeData")!;
      var array=JSON.parse(existingdata);
      array.sort((a:any, b:any) => {
        if (a[inp] < b[inp]) return 1; 
        if (a[inp] > b[inp]) return -1; 
        return 0; 
      });
      console.log(array);
      var table:HTMLDivElement = document.getElementById('UserTable')! as HTMLDivElement;
      table.querySelector('tbody')!.innerHTML="";
      for(let i in array)
      {
        let doc=this.createUserRow(array[i]);
        table.querySelector('tbody')!.appendChild(doc);
      }
    }
  
    showTableRows():void{
      var table:HTMLDivElement = document.getElementById('UserTable')! as HTMLDivElement;
      var data:string = localStorage.getItem("EmployeeData")!;
      var dataarray:EmployeeModelDataTypes[] = JSON.parse(data);
      table.querySelector("tbody")!.innerHTML = "";
      for(let i in dataarray)
      {
        let doc=this.createUserRow(dataarray[i]);
        table.querySelector('tbody')!.appendChild(doc);
      }
    }
  
    filterData(dataarray:EmployeeModelDataTypes[],selectedStatus:string[], selectedLocation:string[], selectedDepartment:string[]) {
      return dataarray.filter(obj => {
          var nameStartsWithSpanValue = this.filterAlphabet && obj.USER.startsWith(this.filterAlphabet);
          
          return (selectedStatus.includes(obj.STATUS) || selectedStatus.length === 0) &&
              (selectedLocation.includes(obj.LOCATION) || selectedLocation.length === 0) &&
              (selectedDepartment.includes(obj.DEPARTMENT) || selectedDepartment.length === 0) &&
              (this.filterAlphabet ? nameStartsWithSpanValue : true); 
      });
    }
  
    filterTableRows():void{
      var table:HTMLDivElement = document.getElementById('UserTable')! as HTMLDivElement;
      var data:string = localStorage.getItem("EmployeeData")!;
      var dataarray = JSON.parse(data);
    
      const filteredData = this.filterData(dataarray,this.statusArray, this.locationArray, this.departmentArray);
      setTimeout(()=> {
          table.querySelector('tbody')!.innerHTML = "";
          console.log(table.querySelector('tbody'));
          filteredData.forEach((row)=> {
              var res = this.createUserRow(row);
              table.querySelector('tbody')!.appendChild(res);
          });
      }, 10);
    }
  
    showSpecific(inp:string,cat:string):void{
      var table:HTMLDivElement = document.getElementById('UserTable')! as HTMLDivElement;
      table.querySelector('tbody')!.innerHTML="";
      var data:string=localStorage.getItem("EmployeeData")!;
      var dataarray=JSON.parse(data);
      for(let i in dataarray){
        var doc=dataarray[i];
        if(inp == doc[cat])
        {
          let res=this.createUserRow(doc);
          table.querySelector('tbody')!.appendChild(res);
        }
      }
    }
} 