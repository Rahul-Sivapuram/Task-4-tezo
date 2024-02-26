/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addemployee.ts":
/*!****************************!*\
  !*** ./src/addemployee.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddEmployee = void 0;
const employee_1 = __webpack_require__(/*! ./employee */ "./src/employee.ts");
class Employee {
    constructor(profilePic, user, location, department, role, empNo, status, joinDt, email, dob, mobileNumber, jobTitle, manager, project) {
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
class AddEmployee extends employee_1.EmployeeDetails {
    customtoast() {
        setTimeout(() => {
            let toast = document.querySelector(".toast-employee");
            toast.style.display = "none";
            this.showAddEmployeePage();
        }, 3000);
    }
    addEmployeeData(event) {
        event.preventDefault();
        const empNumber = document.getElementById("emp-number").value;
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const dob = document.getElementById("dob").value;
        const emailId = document.getElementById("email-id").value;
        const mobileNo = document.getElementById("mobile-no").value;
        const joiningDate = document.getElementById("joining-date").value;
        const location = document.getElementById("add-select-loc").value;
        const jobTitle = document.getElementById("add-select-jobtitle").value;
        const department = document.getElementById("add-select-department").value;
        const assignManager = document.getElementById("managers").value;
        const assignProject = document.getElementById("projects").value;
        const profilepic = document.querySelector(".profilepic");
        console.log(profilepic.src);
        var EmpModel = new Employee(profilepic.src, firstName + lastName, location, department, "", empNumber, "Inactive", joiningDate, emailId, dob, mobileNo, jobTitle, assignManager, assignProject);
        var NewEmpModel = [EmpModel];
        var existingData = localStorage.getItem("EmployeeData");
        if (mobileNo.length < 10 || mobileNo.length > 10) {
            alert("Mobile Number should be 10 digits");
        }
        else {
            if (existingData !== null) {
                var dataarray = JSON.parse(existingData);
                dataarray.push(EmpModel);
                var jsonString = JSON.stringify(dataarray);
                localStorage.setItem("EmployeeData", jsonString);
            }
            else {
                var jsonString = JSON.stringify(NewEmpModel);
                localStorage.setItem("EmployeeData", jsonString);
            }
            let toast = document.querySelector(".toast-employee");
            toast.style.display = "flex";
            this.customtoast();
            this.fileUrl = "";
        }
    }
}
exports.AddEmployee = AddEmployee;


/***/ }),

/***/ "./src/addrole.ts":
/*!************************!*\
  !*** ./src/addrole.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddRole = void 0;
const role_1 = __webpack_require__(/*! ./role */ "./src/role.ts");
class Rolemodel {
    constructor(empName, roleName, department, description, location) {
        this.EmpName = empName;
        this.Role = roleName;
        this.Department = department;
        this.Description = description;
        this.Location = location;
        this.TotalEmployees = "+43";
    }
}
class AddRole extends role_1.RolePage {
    customToast() {
        setTimeout(() => {
            let toast = document.querySelector(".toast-role");
            toast.style.display = "none";
            this.showAddRolePage();
        }, 3000);
    }
    addRoleData(event) {
        event.preventDefault();
        var roleName = document.getElementById("role-rolename");
        var department = document.getElementById("role-selectdepartment");
        var description = document.getElementById("role-description");
        var location = document.getElementById("role-selectlocation");
        var empname = document.getElementById("searchPlaceholder");
        var RoleModel = new Rolemodel(empname.innerText, roleName.value, department.value, location.value, description
            .value);
        var NewRoleModel = [RoleModel];
        var existingData = localStorage.getItem("RoleData");
        if (existingData !== null) {
            var dataarray = JSON.parse(existingData);
            dataarray.push(RoleModel);
            var jsonString = JSON.stringify(dataarray);
            localStorage.setItem("RoleData", jsonString);
        }
        else {
            var jsonString = JSON.stringify(NewRoleModel);
            localStorage.setItem("RoleData", jsonString);
        }
        var existingempData = localStorage.getItem("EmployeeData");
        var empdataarray = JSON.parse(existingempData);
        for (let i in empdataarray) {
            let doc = empdataarray[i];
            console.log(doc);
            if (doc.USER == empname.innerText && doc.ROLE == "") {
                doc.ROLE = roleName.value;
                var jsonstring = JSON.stringify(empdataarray);
                localStorage.setItem("EmployeeData", jsonstring);
            }
        }
        let toast = document.querySelector(".toast-role");
        toast.style.display = "flex";
        this.customToast();
    }
}
exports.AddRole = AddRole;


/***/ }),

/***/ "./src/employee.ts":
/*!*************************!*\
  !*** ./src/employee.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmployeeDetails = void 0;
class EmployeeDetails {
    constructor() {
        this.fileUrl = "";
        this.statusArray = [];
        this.departmentArray = [];
        this.locationArray = [];
        this.itCount = 0;
        this.peCount = 0;
        this.uiuxCount = 0;
        this.filterAlphabet = "";
        this.filterDropdownModel = {
            filterDisplayName: "Status",
            checkboxItems: [
                { label: "Active", value: "Active", id: "status", name: "filter-status" },
                { label: "Inactive", value: "Inactive", id: "status", name: "filter-status" }
            ]
        };
        this.filterDropdownModel2 = {
            filterDisplayName: "Department",
            checkboxItems: [
                { label: "Product Engg", value: "ProductEngg", id: "departments", name: "filter-department" },
                { label: "UIUX", value: "UIUX", id: "departments", name: "filter-department" },
                { label: "IT", value: "IT", id: "departments", name: "filter-department" }
            ]
        };
        this.filterDropdownModel3 = {
            filterDisplayName: "Location",
            checkboxItems: [
                { label: "Hyderabad", value: "Hyderabad", id: "location", name: "filter-location" },
                { label: "Mumbai", value: "Mumbai", id: "location", name: "filter-location" },
                { label: "Pune", value: "Pune", id: "location", name: "filter-location" },
                { label: "Delhi", value: "Delhi", id: "location", name: "filter-location" }
            ]
        };
    }
    onload() {
        document.addEventListener("DOMContentLoaded", () => {
            this.insertPagesIntoContainer();
        });
    }
    showFilterStatusDropdown() {
        var list = document.querySelector(".filtercheckbox-dropdownlist");
        var placeholder = document.getElementById("filter-display1");
        console.log("work");
        var chk = document.querySelectorAll('input[type="checkbox"][name="filter-status"]');
        let arr = [];
        if (!list.style.display || list.style.display === "none") {
            list.style.display = "flex";
        }
        else {
            list.style.display = "none";
        }
        chk.forEach((checkbox) => {
            checkbox.addEventListener("click", () => {
                arr = [];
                chk.forEach((checkbox) => {
                    if (checkbox.checked) {
                        arr.push(checkbox.value);
                    }
                });
                this.statusArray = arr;
                console.log(this.statusArray);
                placeholder.innerText = this.statusArray.length + " Selected";
            });
        });
    }
    insertPagesIntoContainer() {
        let pageContainer = document.querySelector('.employee-page-section');
        fetch('../employee.html')
            .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
            .then(html => {
            pageContainer.innerHTML += html;
            this.getDepartmentCount("UIUX", "ProductEngg", "IT");
            this.alphabetStateChange();
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
    handleFileInputChange(event) {
        const fileInput = document.getElementById("addFilePicker");
        const profilepic = document.querySelector(".profilepic");
        if (event.target instanceof HTMLInputElement && event.target.files && event.target.files.length > 0) {
            const fr = new FileReader();
            fr.readAsDataURL(event.target.files[0]);
            fr.addEventListener('load', () => {
                this.fileUrl = fr.result;
                profilepic.src = this.fileUrl;
                console.log(this.fileUrl);
            });
        }
        if (!profilepic.src || profilepic.src === "") {
            profilepic.src = "assets/images/profile-user.png";
        }
    }
    alphabetStateChange() {
        var containers = document.querySelectorAll(".alphabet");
        var previousContainer = null;
        var clickTimer;
        containers.forEach((container) => {
            container.addEventListener("click", (event) => {
                var spanValue = container.querySelector("span");
                if (clickTimer) {
                    clearTimeout(clickTimer);
                    clickTimer = null;
                    container.classList.remove("change-alphabet");
                    this.filterAlphabet = "";
                    this.showTableRows();
                }
                else {
                    clickTimer = setTimeout(() => {
                        clickTimer = null;
                        if (previousContainer !== null) {
                            previousContainer.classList.remove("change-alphabet");
                        }
                        container.classList.add("change-alphabet");
                        this.filterAlphabet = (spanValue === null || spanValue === void 0 ? void 0 : spanValue.textContent) || "";
                        previousContainer = container;
                    }, 300);
                }
            });
        });
    }
    createFilterDropdown(model, divId, spanId, dropDownId, callback) {
        let filterDropdownContainer = document.createElement("div");
        filterDropdownContainer.classList.add(divId);
        filterDropdownContainer.addEventListener("click", () => {
            console.log("hi");
        });
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
        model.checkboxItems.forEach(function (item) {
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
    getDepartmentCount(cat1, cat2, cat3) {
        let existingdata = localStorage.getItem("EmployeeData");
        let array = JSON.parse(existingdata);
        array.filter((val) => {
            if (val.DEPARTMENT == cat1) {
                this.uiuxCount += 1;
            }
            else if (val.DEPARTMENT == cat2) {
                this.itCount += 1;
            }
            else if (val.DEPARTMENT == cat3 || val.DEPARTMENT == "Product Engg") {
                this.peCount += 1;
            }
            let itBox = document.querySelector(".department-button-square-one");
            let uiuxBox = document.querySelector(".department-button-square-two");
            let peBox = document.querySelector(".department-button-square-three");
            itBox.textContent = this.itCount.toString();
            uiuxBox.textContent = this.uiuxCount.toString();
            peBox.textContent = this.peCount.toString();
        });
    }
    createUserRow(data) {
        var tableRow = document.createElement('tr');
        var radioCell = document.createElement('td');
        var radioInput = document.createElement('input');
        let deletebutton = document.querySelector(".delete-button");
        radioInput.setAttribute('type', 'checkbox');
        radioInput.setAttribute('name', 'checkbox4');
        radioInput.setAttribute('id', 'checkbox4');
        radioInput.onchange = (e) => {
            const checkinput = e.target;
            if (checkinput.checked) {
                deletebutton.classList.add("checked-delete-button");
            }
            else {
                deletebutton.classList.remove("checked-delete-button");
            }
        };
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
        if (data.ProfilePic != "" && "ProfilePic" in data) {
            avatarImage.setAttribute('src', data.ProfilePic);
            avatarImage.setAttribute('alt', 'Human Avatar');
        }
        else {
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
        dotsImage.classList.add("own-model-button");
        dotsImage.onclick = (event) => {
            const target = event.target;
            const ownModalDiv = target.nextElementSibling;
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
    showFilterDepartmentDropdown() {
        var list = document.querySelector(".filtercheckbox-dropdownlist2");
        var placeholder = document.getElementById("filter-display2");
        var chk = document.querySelectorAll('input[type="checkbox"][name="filter-department"]');
        let arr = [];
        if (!list.style.display || list.style.display === "none") {
            list.style.display = "flex";
        }
        else {
            list.style.display = "none";
        }
        chk.forEach((checkbox) => {
            checkbox.addEventListener("click", () => {
                arr = []; // Reset the array
                chk.forEach((checkbox) => {
                    if (checkbox.checked) {
                        arr.push(checkbox.value);
                    }
                });
                this.departmentArray = arr;
                console.log(this.departmentArray);
                placeholder.innerText = this.departmentArray.length + " Selected";
            });
        });
    }
    showFilterLocationDropdown() {
        var list = document.querySelector(".filtercheckbox-dropdownlist3");
        var placeholder = document.getElementById("filter-display3");
        var chk = document.querySelectorAll('input[type="checkbox"][name="filter-location"]');
        if (!list.style.display || list.style.display === "none") {
            list.style.display = "flex";
        }
        else {
            list.style.display = "none";
        }
        let arr = [];
        chk.forEach((checkbox) => {
            checkbox.addEventListener("click", () => {
                arr = [];
                chk.forEach((checkbox) => {
                    if (checkbox.checked) {
                        arr.push(checkbox.value);
                    }
                });
                this.locationArray = arr;
                console.log(this.locationArray);
                placeholder.innerText = this.locationArray.length + " Selected";
            });
        });
    }
    createMultiSelectDropDown() {
        let filterleft = document.querySelector(".filter-left");
        if (filterleft) {
            let dropone = this.createFilterDropdown(this.filterDropdownModel, "filter-dropdown-1", "filter-display1", "filtercheckbox-dropdownlist", this.showFilterStatusDropdown);
            filterleft.appendChild(dropone);
            let droptwo = this.createFilterDropdown(this.filterDropdownModel2, "filter-dropdown-2", "filter-display2", "filtercheckbox-dropdownlist2", this.showFilterDepartmentDropdown);
            filterleft.appendChild(droptwo);
            let dropthree = this.createFilterDropdown(this.filterDropdownModel3, "filter-dropdown-3", "filter-display3", "filtercheckbox-dropdownlist3", this.showFilterLocationDropdown);
            filterleft.appendChild(dropthree);
        }
        else {
            console.error("Element with class 'filter-left' not found.");
        }
    }
    filterSection() {
        const filteroption = document.querySelector(".filter-option");
        if (filteroption.style.display == "none") {
            filteroption.style.display = "flex";
        }
        else {
            filteroption.style.display = "none";
        }
    }
    showAddEmployeePage() {
        var mainpage = document.querySelector(".table-part");
        var emppage = document.querySelector(".addemployee-page");
        var addemp = document.querySelector(".add-employee");
        if (mainpage.style.display == "block") {
            mainpage.style.display = "none";
            emppage.style.display = "block";
            addemp.style.display = "none";
        }
        else if (emppage.style.display == "block") {
            mainpage.style.display = "block";
            addemp.style.display = "flex";
            emppage.style.display = "none";
        }
        else {
            mainpage.style.display = "none";
            addemp.style.display = "none";
            emppage.style.display = "block";
        }
    }
    deleteRow() {
        const employeeDataString = localStorage.getItem('EmployeeData');
        let employeeData = JSON.parse(employeeDataString);
        const indextodelete = [0];
        indextodelete.sort((a, b) => b - a);
        indextodelete.forEach(index => {
            if (index >= 0 && index < employeeData.length) {
                employeeData.splice(index, 1);
            }
            else {
                console.log(`Invalid index ${index}.`);
            }
        });
        const updatedEmployeeDataString = JSON.stringify(employeeData);
        localStorage.setItem('EmployeeData', updatedEmployeeDataString);
        console.log('Objects deleted successfully.');
    }
    addToCsv() {
        var _a, _b;
        const table = document.getElementById('UserTable');
        if (!table)
            return;
        const data = [];
        for (let i = 0; i < table.rows.length; i++) {
            const row = [];
            const tableRow = table.rows[i];
            for (let j = 0; j < tableRow.cells.length; j++) {
                const cell = tableRow.cells[j];
                row.push((_b = (_a = cell.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : '');
            }
            data.push(row.join(','));
        }
        const csvContent = data.join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'data.csv';
        link.click();
    }
    filterByAlphabet(inp) {
        var table = document.getElementById('UserTable');
        var existingdata = localStorage.getItem("EmployeeData");
        var array = JSON.parse(existingdata);
        var ficon = document.querySelector(".filter-image");
        if (table && existingdata && ficon) {
            table.querySelector('tbody').innerHTML = "";
            var filtered = [];
            filtered = [];
            for (let i in array) {
                let doc = array[i];
                if (doc.USER[0] == inp) {
                    filtered.push(doc);
                }
                else {
                    continue;
                }
            }
            if (filtered.length > 0) {
                ficon.src = "assets/images/filter.png";
                for (let j in filtered) {
                    let res = this.createUserRow(filtered[j]);
                    table.querySelector('tbody').appendChild(res);
                }
            }
            else {
                ficon.src = "assets/images/filterblack.png";
            }
        }
    }
    sortAccordToCol(inp) {
        var existingdata = localStorage.getItem("EmployeeData");
        var array = JSON.parse(existingdata);
        array.sort((a, b) => {
            if (a[inp] < b[inp])
                return -1;
            if (a[inp] > b[inp])
                return 1;
            return 0;
        });
        console.log(array);
        var table = document.getElementById('UserTable');
        table.querySelector('tbody').innerHTML = "";
        for (let i in array) {
            let doc = this.createUserRow(array[i]);
            table.querySelector('tbody').appendChild(doc);
        }
    }
    sortDecToCol(inp) {
        var existingdata = localStorage.getItem("EmployeeData");
        var array = JSON.parse(existingdata);
        array.sort((a, b) => {
            if (a[inp] < b[inp])
                return 1;
            if (a[inp] > b[inp])
                return -1;
            return 0;
        });
        console.log(array);
        var table = document.getElementById('UserTable');
        table.querySelector('tbody').innerHTML = "";
        for (let i in array) {
            let doc = this.createUserRow(array[i]);
            table.querySelector('tbody').appendChild(doc);
        }
    }
    showTableRows() {
        var table = document.getElementById('UserTable');
        var data = localStorage.getItem("EmployeeData");
        var dataarray = JSON.parse(data);
        table.querySelector("tbody").innerHTML = "";
        for (let i in dataarray) {
            let doc = this.createUserRow(dataarray[i]);
            table.querySelector('tbody').appendChild(doc);
        }
    }
    filterData(dataarray, selectedStatus, selectedLocation, selectedDepartment) {
        return dataarray.filter(obj => {
            var nameStartsWithSpanValue = this.filterAlphabet && obj.USER.startsWith(this.filterAlphabet);
            return (selectedStatus.includes(obj.STATUS) || selectedStatus.length === 0) &&
                (selectedLocation.includes(obj.LOCATION) || selectedLocation.length === 0) &&
                (selectedDepartment.includes(obj.DEPARTMENT) || selectedDepartment.length === 0) &&
                (this.filterAlphabet ? nameStartsWithSpanValue : true);
        });
    }
    filterTableRows() {
        var table = document.getElementById('UserTable');
        var data = localStorage.getItem("EmployeeData");
        var dataarray = JSON.parse(data);
        const filteredData = this.filterData(dataarray, this.statusArray, this.locationArray, this.departmentArray);
        setTimeout(() => {
            table.querySelector('tbody').innerHTML = "";
            console.log(table.querySelector('tbody'));
            filteredData.forEach((row) => {
                var res = this.createUserRow(row);
                table.querySelector('tbody').appendChild(res);
            });
        }, 10);
    }
    showSpecific(inp, cat) {
        var table = document.getElementById('UserTable');
        table.querySelector('tbody').innerHTML = "";
        var data = localStorage.getItem("EmployeeData");
        var dataarray = JSON.parse(data);
        for (let i in dataarray) {
            var doc = dataarray[i];
            if (inp == doc[cat]) {
                let res = this.createUserRow(doc);
                table.querySelector('tbody').appendChild(res);
            }
        }
    }
}
exports.EmployeeDetails = EmployeeDetails;


/***/ }),

/***/ "./src/role.ts":
/*!*********************!*\
  !*** ./src/role.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolePage = void 0;
class RolePage {
    constructor() {
        this.users = [
            {
                "username": "Robert Fox",
                "userrole": "Head of Product Design",
                "stamp": "INF 289",
                "useremail": "robert@gmail.com",
                "userdepartment": "product",
                "location": "Illinois"
            },
            {
                "username": "Alice Johnson",
                "userrole": "Lead Software Engineer",
                "stamp": "INF 102",
                "useremail": "alice.johnson@example.com",
                "userdepartment": "Engineering",
                "location": "California"
            },
            {
                "username": "John Smith",
                "userrole": "Marketing Manager",
                "stamp": "INF 458",
                "useremail": "john.smith@example.com",
                "userdepartment": "Marketing",
                "location": "New York"
            },
            {
                "username": "Emily Davis",
                "userrole": "HR Coordinator",
                "stamp": "INF 705",
                "useremail": "emily.davis@example.com",
                "userdepartment": "Human Resources",
                "location": "Texas"
            },
            {
                "username": "Michael Brown",
                "userrole": "Financial Analyst",
                "stamp": "INF 315",
                "useremail": "michael.brown@example.com",
                "userdepartment": "Finance",
                "location": "Florida"
            },
        ];
        this.roleData = [
            {
                "Role": "Customer Service Manager",
                "Department": "IT",
                "Location": "Hyderabad",
                "TotalEmployees": "+43"
            },
            {
                "Role": "UX Designer",
                "Department": "Product Engg.",
                "Location": "Mumbai",
                "TotalEmployees": "+40"
            },
            {
                "Role": "Assistant Backend Developer",
                "Department": "UIUX",
                "Location": "Delhi",
                "TotalEmployees": "+41"
            },
            {
                "Role": "Backend Developer",
                "Department": "IT",
                "Location": "Delhi",
                "TotalEmployees": "+41"
            },
            {
                "Role": "Front End Developer",
                "Department": "Product Engg.",
                "Location": "Mumbai",
                "TotalEmployees": "+40"
            },
            {
                "Role": "Senior Developer",
                "Department": "UIUX",
                "Location": "Delhi",
                "TotalEmployees": "+41"
            }
        ];
    }
    createRoleCard(userInformation) {
        var infoCardContainer = document.createElement("div");
        infoCardContainer.classList.add("info-card-2");
        var userProfileBox = document.createElement("div");
        userProfileBox.classList.add("user-profile-box-2");
        var userProfileImage = document.createElement("img");
        userProfileImage.src = "assets/images/man.jpg";
        userProfileImage.alt = "Human Avatar";
        var userProfileText = document.createElement("span");
        userProfileText.classList.add("span-outside");
        userProfileText.innerHTML = userInformation.username + "<br><span class='span-inside'>" + userInformation.userrole + "</span>";
        userProfileBox.appendChild(userProfileImage);
        userProfileBox.appendChild(userProfileText);
        infoCardContainer.appendChild(userProfileBox);
        infoCardContainer.appendChild(document.createElement("br"));
        // Create infocard items
        var infoCardItems = document.createElement("div");
        infoCardItems.classList.add("infocard-items");
        var stampIcon = document.createElement("img");
        stampIcon.src = "assets/svg/stamp.svg";
        stampIcon.alt = "Stamp symbol";
        var stampText = document.createElement("span");
        stampText.innerHTML = userInformation.stamp;
        infoCardItems.appendChild(stampIcon);
        infoCardItems.appendChild(stampText);
        infoCardContainer.appendChild(infoCardItems);
        var emailItem = document.createElement("div");
        emailItem.classList.add("infocard-items");
        var emailIcon = document.createElement("img");
        emailIcon.src = "assets/svg/email.svg";
        emailIcon.alt = "Email symbol";
        var emailText = document.createElement("span");
        emailText.innerHTML = userInformation.useremail;
        emailItem.appendChild(emailIcon);
        emailItem.appendChild(emailText);
        infoCardContainer.appendChild(emailItem);
        var departmentItem = document.createElement("div");
        departmentItem.classList.add("infocard-items");
        var departmentIcon = document.createElement("img");
        departmentIcon.src = "assets/svg/group.svg";
        departmentIcon.alt = "Group symbol";
        var departmentText = document.createElement("span");
        departmentText.innerHTML = userInformation.userdepartment;
        departmentItem.appendChild(departmentIcon);
        departmentItem.appendChild(departmentText);
        infoCardContainer.appendChild(departmentItem);
        var locationItem = document.createElement("div");
        locationItem.classList.add("infocard-items");
        var locationIcon = document.createElement("img");
        locationIcon.src = "assets/svg/location.svg";
        locationIcon.alt = "Location symbol";
        var locationText = document.createElement("span");
        locationText.innerHTML = userInformation.location;
        locationItem.appendChild(locationIcon);
        locationItem.appendChild(locationText);
        infoCardContainer.appendChild(locationItem);
        var arrowItem = document.createElement("div");
        arrowItem.classList.add("arrow-item");
        var arrowImage = document.createElement("img");
        arrowImage.src = "assets/svg/arrow.svg";
        arrowImage.alt = "Arrow symbol";
        var viewSpan = document.createElement("span");
        viewSpan.innerHTML = "View";
        arrowItem.appendChild(viewSpan);
        arrowItem.appendChild(arrowImage);
        infoCardContainer.appendChild(arrowItem);
        return infoCardContainer;
    }
    showRoleCard() {
        var space = document.querySelector(".info-cards-list-2");
        space.innerHTML = "";
        for (let i in this.users) {
            let res = this.createRoleCard(this.users[i]);
            space.appendChild(res);
        }
    }
    createCard(data) {
        let infocard = document.createElement("div");
        infocard.setAttribute("class", "info-card");
        let inforow = document.createElement("div");
        var imgelmnt = document.createElement("img");
        var h = document.createElement("h5");
        inforow.setAttribute("class", "info-row");
        h.innerHTML = data.Role;
        imgelmnt.src = "assets/svg/blueeditbox.svg";
        imgelmnt.alt = 'BlueEditBox symbol';
        inforow.appendChild(h);
        inforow.appendChild(imgelmnt);
        infocard.appendChild(inforow);
        //row2
        let inforow1 = document.createElement("div");
        let spanins = document.createElement('span');
        var imgelmnt1 = document.createElement("img");
        var span = document.createElement("span");
        let infocarditems = document.createElement("div");
        inforow1.setAttribute("class", "info-row");
        infocarditems.setAttribute("class", "infocard-items");
        imgelmnt1.src = "assets/svg/group.svg";
        imgelmnt1.alt = "Group symbol";
        span.innerText = "Department";
        spanins.innerText = data.Department;
        inforow1.appendChild(infocarditems);
        infocarditems.appendChild(imgelmnt1);
        infocarditems.appendChild(span);
        inforow1.appendChild(spanins);
        infocard.appendChild(inforow1);
        //row3
        let inforow2 = document.createElement("div");
        var spaninside = document.createElement("span");
        var imgelmnt2 = document.createElement("img");
        var span2 = document.createElement("span");
        let infocarditems2 = document.createElement("div");
        inforow2.setAttribute("class", "info-row");
        infocarditems2.setAttribute("class", "infocard-items");
        imgelmnt2.src = "assets/svg/location.svg";
        imgelmnt2.alt = "Location symbol";
        span2.innerText = "Location";
        spaninside.innerText = data.Location;
        infocarditems2.appendChild(imgelmnt2);
        infocarditems2.appendChild(span2);
        inforow2.appendChild(infocarditems2);
        inforow2.appendChild(spaninside);
        infocard.appendChild(inforow2);
        //row4
        let inforow3 = document.createElement('div');
        let span3 = document.createElement('span');
        let span3ins = document.createElement('span');
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');
        let div5 = document.createElement('div');
        let img1 = document.createElement('img');
        let img2 = document.createElement('img');
        let img3 = document.createElement('img');
        inforow3.setAttribute('class', 'info-row');
        div1.setAttribute('class', 'profiles-many');
        div2.setAttribute('class', 'img1');
        div3.setAttribute('class', 'img2');
        div4.setAttribute('class', 'img3');
        div5.setAttribute('class', 'employee-count');
        span3.innerText = "Total Employees";
        img1.src = "assets/images/avatar.png";
        img2.src = "assets/images/avatar.png";
        img3.src = "assets/images/gamer.png";
        span3ins.innerText = data.TotalEmployees;
        inforow3.appendChild(span3);
        div2.appendChild(img1);
        div3.appendChild(img2);
        div4.appendChild(img3);
        div5.appendChild(span3ins);
        div1.appendChild(div2);
        div1.appendChild(div3);
        div1.appendChild(div4);
        div1.appendChild(div5);
        inforow3.appendChild(div1);
        infocard.appendChild(inforow3);
        //row5
        let inforow4 = document.createElement('div');
        inforow4.setAttribute('class', 'arrow-item');
        let span4 = document.createElement('span');
        let img4 = document.createElement('img');
        let div6 = document.createElement('div');
        span4.innerText = "View all Employees";
        img4.src = "assets/svg/arrow.svg";
        img4.onclick = () => {
            this.showAllEmp();
        };
        div6.appendChild(span4);
        div6.appendChild(img4);
        inforow4.appendChild(div6);
        infocard.appendChild(inforow4);
        return infocard;
    }
    showCards() {
        let infocardslist = document.querySelector(".info-cards-list");
        infocardslist.innerHTML = "";
        for (var i in this.roleData) {
            var res = this.createCard(this.roleData[i]);
            infocardslist.appendChild(res);
        }
    }
    filter() {
        var selectedlocation = document.getElementById("role-location");
        var selecteddepartment = document.getElementById("role-departments");
        let infolist = document.querySelector(".info-cards-list");
        infolist.innerHTML = "";
        for (var i in this.roleData) {
            const doc = this.roleData[i];
            if (doc.Department == selecteddepartment.value && doc.Location == selectedlocation.value) {
                var res = this.createCard(doc);
                infolist.appendChild(res);
            }
        }
    }
    showAllEmp() {
        var roledetailspage = document.querySelector(".roledetails-page");
        var rolepage = document.querySelector(".role-page");
        this.showRoleCard();
        if (!rolepage.style.display || rolepage.style.display == "none") {
            rolepage.style.display = "block";
            roledetailspage.style.display = "none";
        }
        else {
            rolepage.style.display = "none";
        }
    }
    showFieldDropdown() {
        var list = document.querySelector(".checkbox-dropdownlist");
        var checkboxes = document.querySelectorAll('input[type="checkbox"][name="dp-empdetails"]');
        var placeholder = document.getElementById("searchPlaceholder");
        var searchinp = document.getElementById("searchemp");
        if (list.style.display === "none") {
            list.style.display = "flex";
        }
        else {
            list.style.display = "none";
        }
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                placeholder.textContent = checkboxes[i].value;
                break;
            }
            else {
                placeholder.innerText = searchinp.value;
            }
        }
    }
    showAddRolePage() {
        var usertable = document.querySelector(".info-cards-list");
        var rolepage = document.querySelector(".addnewrole-page");
        var filterrole = document.querySelector(".filterrole");
        var addrole = document.querySelector(".add-roledetails");
        var roledetails = document.querySelector(".roledetails-page");
        var isUserTableVisible = usertable.style.display === "grid" || getComputedStyle(usertable).display === "grid";
        var isRolePageVisible = rolepage.style.display === "block" || getComputedStyle(rolepage).display === "block";
        if (isUserTableVisible && !isRolePageVisible) {
            usertable.style.display = "none";
            filterrole.style.display = "none";
            addrole.style.display = "none";
            rolepage.style.display = "flex";
        }
        else if (!isUserTableVisible && isRolePageVisible) {
            rolepage.style.display = "none";
            usertable.style.display = "grid";
            filterrole.style.display = "flex";
            addrole.style.display = "flex";
            roledetails.style.display = "block";
        }
        else {
            usertable.style.display = "grid";
            filterrole.style.display = "flex";
            rolepage.style.display = "none";
            addrole.style.display = "flex";
        }
    }
    showRole() {
        var roledetailspage = document.querySelector(".roledetails-page");
        var employeepage = document.querySelector(".employee-page");
        if (!roledetailspage.style.display || roledetailspage.style.display == "none") {
            roledetailspage.style.display = "block";
            employeepage.style.display = "none";
        }
        else {
            roledetailspage.style.display = "none";
        }
        this.showCards();
    }
    goback() {
        var rolepage = document.querySelector(".role-page");
        var roledetailspage = document.querySelector(".roledetails-page");
        if (!rolepage.style.display || rolepage.style.display == "block") {
            rolepage.style.display = "none";
            roledetailspage.style.display = "block";
        }
    }
}
exports.RolePage = RolePage;


/***/ }),

/***/ "./src/sidebar.ts":
/*!************************!*\
  !*** ./src/sidebar.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sidebar = void 0;
const employee_1 = __webpack_require__(/*! ./employee */ "./src/employee.ts");
class Sidebar extends employee_1.EmployeeDetails {
    showSidebar() {
        const sidebar = document.querySelector(".sidebar");
        const navbarpages = document.querySelector(".navbar-pages");
        const sidebarsmallsidebar = document.querySelector(".sidebar-smallsidebar");
        const smallsidebar = document.querySelector(".small-sidebar");
        smallsidebar.style.display = "none";
        sidebar.style.display = "flex";
        sidebarsmallsidebar.style.width = "16%";
        navbarpages.style.width = "84%";
    }
    hideSidebar() {
        const sidebar = document.querySelector(".sidebar");
        const navbarpages = document.querySelector(".navbar-pages");
        const sidebarsmallsidebar = document.querySelector(".sidebar-smallsidebar");
        const smallsidebar = document.querySelector(".small-sidebar");
        sidebar.style.display = "none";
        smallsidebar.style.display = "flex";
        sidebarsmallsidebar.style.width = "3%";
        sidebarsmallsidebar.style.height = "100%";
        navbarpages.style.width = "95%";
    }
    showDropDown() {
        var arrow = document.querySelector(".arrow");
        var dropdown = document.querySelector(".userstatus-menu");
        arrow.src = "assets/svg/arrowdown.svg";
        if (!dropdown.style.display || dropdown.style.display == "none") {
            dropdown.style.display = "block";
        }
        else if (dropdown.style.display = "block") {
            arrow.src = "assets/svg/arrowforward.svg";
            dropdown.style.display = "none";
        }
    }
    showEmp() {
        this.showTableRows();
        var employeepage = document.querySelector(".employee-page");
        var roledetailspage = document.querySelector(".roledetails-page");
        if (!employeepage.style.display || employeepage.style.display == "none") {
            employeepage.style.display = "block";
            roledetailspage.style.display = "none";
        }
        else {
            employeepage.style.display = "none";
        }
    }
    showEmptyDisplay() {
        let emppage = document.querySelector(".employee-page");
        let roledetailspage = document.querySelector(".roledetails-page");
        let rolepage = document.querySelector(".role-page");
        if (rolepage.style.display == "block" || roledetailspage.style.display == "block" || emppage.style.display == "block") {
            rolepage.style.display = "none";
            roledetailspage.style.display = "none";
            emppage.style.display = "none";
        }
    }
}
exports.Sidebar = Sidebar;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const employee_1 = __webpack_require__(/*! ./employee */ "./src/employee.ts");
const role_1 = __webpack_require__(/*! ./role */ "./src/role.ts");
const addemployee_1 = __webpack_require__(/*! ./addemployee */ "./src/addemployee.ts");
const addrole_1 = __webpack_require__(/*! ./addrole */ "./src/addrole.ts");
const sidebar_1 = __webpack_require__(/*! ./sidebar */ "./src/sidebar.ts");
class App {
    constructor() {
        this.rolepageobject = new role_1.RolePage();
        this.addemployeeobject = new addemployee_1.AddEmployee();
        this.addroleobject = new addrole_1.AddRole();
        this.sidebar = new sidebar_1.Sidebar();
        this.employeeobject = new employee_1.EmployeeDetails();
        this.employeeobject.onload();
    }
}
let app = new App();
window.app = app;

})();

/******/ })()
;