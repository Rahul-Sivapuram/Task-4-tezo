/******/ 
let app;
(() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addemployee.ts":
/*!****************************!*\
  !*** ./src/addemployee.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddEmployee = void 0;
var employee_1 = __webpack_require__(/*! ./employee */ "./src/employee.ts");
var Employee = /** @class */ (function () {
    function Employee(profilePic, user, location, department, role, empNo, status, joinDt, email, dob, mobileNumber, jobTitle, manager, project) {
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
    return Employee;
}());
var AddEmployee = /** @class */ (function (_super) {
    __extends(AddEmployee, _super);
    function AddEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddEmployee.prototype.customtoast = function () {
        var _this = this;
        setTimeout(function () {
            var toast = document.querySelector(".toast-employee");
            toast.style.display = "none";
            _this.showAddEmployeePage();
        }, 3000);
    };
    AddEmployee.prototype.addEmployeeData = function (event) {
        event.preventDefault();
        var empNumber = document.getElementById("emp-number").value;
        var firstName = document.getElementById("first-name").value;
        var lastName = document.getElementById("last-name").value;
        var dob = document.getElementById("dob").value;
        var emailId = document.getElementById("email-id").value;
        var mobileNo = document.getElementById("mobile-no").value;
        var joiningDate = document.getElementById("joining-date").value;
        var location = document.getElementById("add-select-loc").value;
        var jobTitle = document.getElementById("add-select-jobtitle").value;
        var department = document.getElementById("add-select-department").value;
        var assignManager = document.getElementById("managers").value;
        var assignProject = document.getElementById("projects").value;
        var EmpModel = new Employee(this.fileUrl, firstName + lastName, location, department, "", empNumber, "Inactive", joiningDate, emailId, dob, mobileNo, jobTitle, assignManager, assignProject);
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
            var toast = document.querySelector(".toast-employee");
            toast.style.display = "flex";
            this.customtoast();
            this.fileUrl = "";
        }
    };
    return AddEmployee;
}(employee_1.EmployeeDetails));
exports.AddEmployee = AddEmployee;


/***/ }),

/***/ "./src/addrole.ts":
/*!************************!*\
  !*** ./src/addrole.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddRole = void 0;
var role_1 = __webpack_require__(/*! ./role */ "./src/role.ts");
var Rolemodel = /** @class */ (function () {
    function Rolemodel(empName, roleName, department, description, location) {
        this.EmpName = empName;
        this.Role = roleName;
        this.Department = department;
        this.Description = description;
        this.Location = location;
        this.TotalEmployees = "+43";
    }
    return Rolemodel;
}());
var AddRole = /** @class */ (function (_super) {
    __extends(AddRole, _super);
    function AddRole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddRole.prototype.customToast = function () {
        var _this = this;
        setTimeout(function () {
            var toast = document.querySelector(".toast-role");
            toast.style.display = "none";
            _this.showAddRolePage();
        }, 3000);
    };
    AddRole.prototype.addRoleData = function (event) {
        event.preventDefault();
        var roleName = document.getElementById("role-rolename");
        var department = document.getElementById("role-selectdepartment");
        var description = document.getElementById("role-description");
        var location = document.getElementById("role-selectlocation");
        var empname = document.getElementById("searchPlaceholder");
        var RoleModel = new Rolemodel(empname.value, roleName.value, department.value, location.value, description
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
        for (var i in empdataarray) {
            var doc = empdataarray[i];
            if (doc.USER == empname && doc.ROLE == "") {
                doc.ROLE = roleName;
                var jsonstring = JSON.stringify(empdataarray);
                localStorage.setItem("EmployeeData", jsonstring);
            }
        }
        var toast = document.querySelector(".toast-role");
        toast.style.display = "flex";
        this.customToast();
    };
    return AddRole;
}(role_1.RolePage));
exports.AddRole = AddRole;


/***/ }),

/***/ "./src/employee.ts":
/*!*************************!*\
  !*** ./src/employee.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmployeeDetails = void 0;
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails() {
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
    EmployeeDetails.prototype.insertPagesIntoContainer = function () {
        var pageContainer = document.querySelector('.employee-page-section');
        fetch('../employee.html')
            .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
            .then(function (html) {
            pageContainer.innerHTML += html;
        })
            .catch(function (error) { return console.error('Error fetching content:', error); });
        fetch('../role.html')
            .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
            .then(function (html) {
            pageContainer.innerHTML += html;
        })
            .catch(function (error) { return console.error('Error fetching content:', error); });
        fetch('../roledetails.html')
            .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
            .then(function (html) {
            pageContainer.innerHTML += html;
        })
            .catch(function (error) { return console.error('Error fetching content:', error); });
    };
    EmployeeDetails.prototype.addDOMContentLoadedListener = function () {
        var _this = this;
        document.addEventListener("DOMContentLoaded", function () {
            _this.insertPagesIntoContainer();
        });
    };
    EmployeeDetails.prototype.handleFileInputChange = function () {
        var _this = this;
        var fileInput = document.getElementById("addFilePicker");
        var profilepic = document.querySelector(".profilepic");
        fileInput.addEventListener('change', function () {
            var fr = new FileReader();
            fr.readAsDataURL(fileInput.files[0]);
            fr.addEventListener('load', function () {
                _this.fileUrl != fr.result;
                profilepic.src = _this.fileUrl;
                console.log(_this.fileUrl);
            });
        });
        profilepic.src = "assets/images/profile-user.png";
        this.fileUrl = "";
    };
    EmployeeDetails.prototype.alphabetStateChange = function () {
        var _this = this;
        var containers = document.querySelectorAll(".alphabet");
        var previousContainer = null;
        var clickTimer;
        containers.forEach(function (container) {
            container.addEventListener("click", function (event) {
                var spanValue = container.querySelector("span");
                if (clickTimer) {
                    clearTimeout(clickTimer);
                    clickTimer = null;
                    container.classList.remove("change-alphabet");
                    _this.filterAlphabet = "";
                    _this.showTableRows();
                }
                else {
                    clickTimer = setTimeout(function () {
                        clickTimer = null;
                        if (previousContainer !== null) {
                            previousContainer.classList.remove("change-alphabet");
                        }
                        container.classList.add("change-alphabet");
                        _this.filterAlphabet = (spanValue === null || spanValue === void 0 ? void 0 : spanValue.textContent) || "";
                        previousContainer = container;
                    }, 300);
                }
            });
        });
    };
    EmployeeDetails.prototype.createMultiSelectDropDown = function () {
        var filterleft = document.querySelector(".filter-left");
        var dropone = this.createFilterDropdown(this.filterDropdownModel, "filter-dropdown-1", "filter-display1", "filtercheckbox-dropdownlist", this.showFilterStatusDropdown);
        filterleft.appendChild(dropone);
        var droptwo = this.createFilterDropdown(this.filterDropdownModel2, "filter-dropdown-2", "filter-display2", "filtercheckbox-dropdownlist2", this.showFilterDepartmentDropdown);
        filterleft.appendChild(droptwo);
        var dropthree = this.createFilterDropdown(this.filterDropdownModel3, "filter-dropdown-3", "filter-display3", "filtercheckbox-dropdownlist3", this.showFilterLocationDropdown);
        filterleft.appendChild(dropthree);
    };
    EmployeeDetails.prototype.createFilterDropdown = function (model, divId, spanId, dropDownId, callback) {
        var filterDropdownContainer = document.createElement("div");
        filterDropdownContainer.classList.add(divId);
        filterDropdownContainer.onclick = function () {
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
    };
    EmployeeDetails.prototype.getDepartmentCount = function (cat1, cat2, cat3) {
        var _this = this;
        var existingdata = localStorage.getItem("EmployeeData");
        var array = JSON.parse(existingdata);
        array.filter(function (val) {
            if (val.DEPARTMENT == cat1) {
                _this.uiuxCount += 1;
            }
            else if (val.DEPARTMENT == cat2) {
                _this.itCount += 1;
            }
            else if (val.DEPARTMENT == cat3 || val.DEPARTMENT == "Product Engg") {
                _this.peCount += 1;
            }
            var itBox = document.querySelector(".department-button-square-one");
            var uiuxBox = document.querySelector(".department-button-square-two");
            var peBox = document.querySelector(".department-button-square-three");
            itBox.textContent = _this.itCount.toString();
            uiuxBox.textContent = _this.uiuxCount.toString();
            peBox.textContent = _this.peCount.toString();
        });
    };
    EmployeeDetails.prototype.createUserRow = function (data) {
        var tableRow = document.createElement('tr');
        var radioCell = document.createElement('td');
        var radioInput = document.createElement('input');
        var deletebutton = document.querySelector(".delete-button");
        radioInput.setAttribute('type', 'checkbox');
        radioInput.setAttribute('name', 'checkbox4');
        radioInput.setAttribute('id', 'checkbox4');
        radioInput.onchange = function (e) {
            var checkinput = e.target;
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
        userDetailsSpan.innerHTML = "".concat(data.USER, "<br><span class=\"span-inside-userprofilebox\">").concat(data.EMAIL, "</span>");
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
        activeButton.innerHTML = "<span>".concat(data.STATUS, "</span>");
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
        dotsImage.onclick = function (event) {
            var target = event.target;
            var ownModalDiv = target.nextElementSibling;
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
    };
    EmployeeDetails.prototype.showFilterStatusDropdown = function () {
        var _this = this;
        var list = document.querySelector(".filtercheckbox-dropdownlist");
        var placeholder = document.getElementById("filter-display1");
        var chk = document.querySelectorAll('input[type="checkbox"][name="filter-status"]');
        if (!list.style.display || list.style.display === "none") {
            list.style.display = "flex";
        }
        else {
            list.style.display = "none";
        }
        var arr = [];
        chk.forEach(function (event) {
            event.addEventListener("click", function () {
                var v = event.value;
                if (event.checked) {
                    arr.push(v);
                }
                else {
                    var index = arr.indexOf(v);
                    if (index !== -1) {
                        arr.splice(index, 1);
                    }
                }
                _this.statusArray = arr;
                placeholder.innerText = arr.length + " " + "Selected";
            });
        });
    };
    EmployeeDetails.prototype.showFilterDepartmentDropdown = function () {
        var _this = this;
        var list = document.querySelector(".filtercheckbox-dropdownlist2");
        var placeholder = document.getElementById("filter-display2");
        var chk = document.querySelectorAll('input[type="checkbox"][name="filter-department"]');
        if (!list.style.display || list.style.display === "none") {
            list.style.display = "flex";
        }
        else {
            list.style.display = "none";
        }
        var arr = [];
        chk.forEach(function (event) {
            event.addEventListener("click", function () {
                var v = event.value;
                if (event.checked) {
                    arr.push(v);
                }
                else {
                    var index = arr.indexOf(v);
                    if (index !== -1) {
                        arr.splice(index, 1);
                    }
                }
                _this.departmentArray = arr;
                console.log(_this.departmentArray);
                placeholder.innerText = arr.length + " " + "Selected";
            });
        });
    };
    EmployeeDetails.prototype.showFilterLocationDropdown = function () {
        var _this = this;
        var list = document.querySelector(".filtercheckbox-dropdownlist3");
        var placeholder = document.getElementById("filter-display3");
        var chk = document.querySelectorAll('input[type="checkbox"][name="filter-location"]');
        if (!list.style.display || list.style.display === "none") {
            list.style.display = "flex";
        }
        else {
            list.style.display = "none";
        }
        var arr = [];
        chk.forEach(function (event) {
            event.addEventListener("click", function () {
                var v = event.value;
                if (event.checked) {
                    arr.push(v);
                }
                else {
                    var index = arr.indexOf(v);
                    if (index !== -1) {
                        arr.splice(index, 1);
                    }
                }
                _this.locationArray = arr;
                console.log(_this.locationArray);
                placeholder.innerText = arr.length + " " + "Selected";
            });
        });
    };
    EmployeeDetails.prototype.filterSection = function () {
        var filteroption = document.querySelector(".filter-option");
        if (filteroption.style.display == "none") {
            filteroption.style.display = "flex";
        }
        else {
            filteroption.style.display = "none";
        }
    };
    EmployeeDetails.prototype.showAddEmployeePage = function () {
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
    };
    EmployeeDetails.prototype.deleteRow = function () {
        var employeeDataString = localStorage.getItem('EmployeeData');
        var employeeData = JSON.parse(employeeDataString);
        var indextodelete = [15, 16, 17, 18, 19];
        indextodelete.sort(function (a, b) { return b - a; });
        indextodelete.forEach(function (index) {
            if (index >= 0 && index < employeeData.length) {
                employeeData.splice(index, 1);
            }
            else {
                console.log("Invalid index ".concat(index, "."));
            }
        });
        var updatedEmployeeDataString = JSON.stringify(employeeData);
        localStorage.setItem('EmployeeData', updatedEmployeeDataString);
        console.log('Objects deleted successfully.');
    };
    EmployeeDetails.prototype.addToCsv = function () {
        var _a, _b;
        var table = document.getElementById('UserTable');
        if (!table)
            return;
        var data = [];
        for (var i = 0; i < table.rows.length; i++) {
            var row = [];
            var tableRow = table.rows[i];
            for (var j = 0; j < tableRow.cells.length; j++) {
                var cell = tableRow.cells[j];
                row.push((_b = (_a = cell.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : ''); // Use optional chaining and nullish coalescing operator
            }
            data.push(row.join(','));
        }
        var csvContent = data.join('\n');
        var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'data.csv';
        link.click();
    };
    EmployeeDetails.prototype.filterByAlphabet = function (inp) {
        var table = document.getElementById('UserTable');
        var existingdata = localStorage.getItem("EmployeeData");
        var array = JSON.parse(existingdata);
        var ficon = document.querySelector(".filter-image");
        if (table && existingdata && ficon) {
            table.querySelector('tbody').innerHTML = "";
            var filtered = [];
            filtered = [];
            for (var i in array) {
                var doc = array[i];
                if (doc.USER[0] == inp) {
                    filtered.push(doc);
                }
                else {
                    continue;
                }
            }
            if (filtered.length > 0) {
                ficon.src = "assets/images/filter.png";
                for (var j in filtered) {
                    var res = this.createUserRow(filtered[j]);
                    table.querySelector('tbody').appendChild(res);
                }
            }
            else {
                ficon.src = "assets/images/filterblack.png";
            }
        }
    };
    EmployeeDetails.prototype.sortAccordToCol = function (inp) {
        var existingdata = localStorage.getItem("EmployeeData");
        var array = JSON.parse(existingdata);
        array.sort(function (a, b) {
            if (a[inp] < b[inp])
                return -1;
            if (a[inp] > b[inp])
                return 1;
            return 0;
        });
        console.log(array);
        var table = document.getElementById('UserTable');
        table.querySelector('tbody').innerHTML = "";
        for (var i in array) {
            var doc = this.createUserRow(array[i]);
            table.querySelector('tbody').appendChild(doc);
        }
    };
    EmployeeDetails.prototype.sortDecToCol = function (inp) {
        var existingdata = localStorage.getItem("EmployeeData");
        var array = JSON.parse(existingdata);
        array.sort(function (a, b) {
            if (a[inp] < b[inp])
                return 1;
            if (a[inp] > b[inp])
                return -1;
            return 0;
        });
        console.log(array);
        var table = document.getElementById('UserTable');
        table.querySelector('tbody').innerHTML = "";
        for (var i in array) {
            var doc = this.createUserRow(array[i]);
            table.querySelector('tbody').appendChild(doc);
        }
    };
    EmployeeDetails.prototype.showTableRows = function () {
        var table = document.getElementById('UserTable');
        var data = localStorage.getItem("EmployeeData");
        var dataarray = JSON.parse(data);
        table.querySelector("tbody").innerHTML = "";
        for (var i in dataarray) {
            var doc = this.createUserRow(dataarray[i]);
            table.querySelector('tbody').appendChild(doc);
        }
    };
    EmployeeDetails.prototype.filterData = function (dataarray, selectedStatus, selectedLocation, selectedDepartment) {
        var _this = this;
        return dataarray.filter(function (obj) {
            var nameStartsWithSpanValue = _this.filterAlphabet && obj.USER.startsWith(_this.filterAlphabet);
            return (selectedStatus.includes(obj.STATUS) || selectedStatus.length === 0) &&
                (selectedLocation.includes(obj.LOCATION) || selectedLocation.length === 0) &&
                (selectedDepartment.includes(obj.DEPARTMENT) || selectedDepartment.length === 0) &&
                (_this.filterAlphabet ? nameStartsWithSpanValue : true);
        });
    };
    EmployeeDetails.prototype.filterTableRows = function () {
        var _this = this;
        var table = document.getElementById('UserTable');
        var data = localStorage.getItem("EmployeeData");
        var dataarray = JSON.parse(data);
        var filteredData = this.filterData(dataarray, this.statusArray, this.locationArray, this.departmentArray);
        setTimeout(function () {
            table.querySelector('tbody').innerHTML = "";
            console.log(table.querySelector('tbody'));
            filteredData.forEach(function (row) {
                var res = _this.createUserRow(row);
                table.querySelector('tbody').appendChild(res);
            });
        }, 10);
    };
    EmployeeDetails.prototype.showSpecific = function (inp, cat) {
        var table = document.getElementById('UserTable');
        table.querySelector('tbody').innerHTML = "";
        var data = localStorage.getItem("EmployeeData");
        var dataarray = JSON.parse(data);
        for (var i in dataarray) {
            var doc = dataarray[i];
            if (inp == doc[cat]) {
                var res = this.createUserRow(doc);
                table.querySelector('tbody').appendChild(res);
            }
        }
    };
    return EmployeeDetails;
}());
exports.EmployeeDetails = EmployeeDetails;


/***/ }),

/***/ "./src/role.ts":
/*!*********************!*\
  !*** ./src/role.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolePage = void 0;
var RolePage = /** @class */ (function () {
    function RolePage() {
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
    RolePage.prototype.createRoleCard = function (userInformation) {
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
    };
    RolePage.prototype.showRoleCard = function () {
        var space = document.querySelector(".info-cards-list-2");
        space.innerHTML = "";
        for (var i in this.users) {
            var res = this.createRoleCard(this.users[i]);
            space.appendChild(res);
        }
    };
    RolePage.prototype.createCard = function (data) {
        var _this = this;
        var infocard = document.createElement("div");
        infocard.setAttribute("class", "info-card");
        var inforow = document.createElement("div");
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
        var inforow1 = document.createElement("div");
        var spanins = document.createElement('span');
        var imgelmnt1 = document.createElement("img");
        var span = document.createElement("span");
        var infocarditems = document.createElement("div");
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
        var inforow2 = document.createElement("div");
        var spaninside = document.createElement("span");
        var imgelmnt2 = document.createElement("img");
        var span2 = document.createElement("span");
        var infocarditems2 = document.createElement("div");
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
        var inforow3 = document.createElement('div');
        var span3 = document.createElement('span');
        var span3ins = document.createElement('span');
        var div1 = document.createElement('div');
        var div2 = document.createElement('div');
        var div3 = document.createElement('div');
        var div4 = document.createElement('div');
        var div5 = document.createElement('div');
        var img1 = document.createElement('img');
        var img2 = document.createElement('img');
        var img3 = document.createElement('img');
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
        var inforow4 = document.createElement('div');
        inforow4.setAttribute('class', 'arrow-item');
        var span4 = document.createElement('span');
        var img4 = document.createElement('img');
        var div6 = document.createElement('div');
        span4.innerText = "View all Employees";
        img4.src = "assets/svg/arrow.svg";
        img4.onclick = function () {
            _this.showAllEmp();
        };
        div6.appendChild(span4);
        div6.appendChild(img4);
        inforow4.appendChild(div6);
        infocard.appendChild(inforow4);
        return infocard;
    };
    RolePage.prototype.showCards = function () {
        var infocardslist = document.querySelector(".info-cards-list");
        infocardslist.innerHTML = "";
        for (var i in this.roleData) {
            var res = this.createCard(this.roleData[i]);
            infocardslist.appendChild(res);
        }
    };
    RolePage.prototype.filter = function () {
        var selectedlocation = document.getElementById("role-location");
        var selecteddepartment = document.getElementById("role-departments");
        var infolist = document.querySelector(".info-cards-list");
        infolist.innerHTML = "";
        for (var i in this.roleData) {
            var doc = this.roleData[i];
            if (doc.Department == selecteddepartment.value && doc.Location == selectedlocation.value) {
                var res = this.createCard(doc);
                infolist.appendChild(res);
            }
        }
    };
    RolePage.prototype.showAllEmp = function () {
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
    };
    RolePage.prototype.showFieldDropdown = function () {
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
    };
    RolePage.prototype.showAddRolePage = function () {
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
    };
    RolePage.prototype.showRole = function () {
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
    };
    RolePage.prototype.goback = function () {
        var rolepage = document.querySelector(".role-page");
        var roledetailspage = document.querySelector(".roledetails-page");
        if (!rolepage.style.display || rolepage.style.display == "block") {
            rolepage.style.display = "none";
            roledetailspage.style.display = "block";
        }
    };
    return RolePage;
}());
exports.RolePage = RolePage;


/***/ }),

/***/ "./src/sidebar.ts":
/*!************************!*\
  !*** ./src/sidebar.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sidebar = void 0;
var employee_1 = __webpack_require__(/*! ./employee */ "./src/employee.ts");
var Sidebar = /** @class */ (function (_super) {
    __extends(Sidebar, _super);
    function Sidebar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sidebar.prototype.showSidebar = function () {
        var sidebar = document.querySelector(".sidebar");
        var navbarpages = document.querySelector(".navbar-pages");
        var sidebarsmallsidebar = document.querySelector(".sidebar-smallsidebar");
        var smallsidebar = document.querySelector(".small-sidebar");
        smallsidebar.style.display = "none";
        sidebar.style.display = "flex";
        sidebarsmallsidebar.style.width = "16%";
        navbarpages.style.width = "84%";
    };
    Sidebar.prototype.hideSidebar = function () {
        var sidebar = document.querySelector(".sidebar");
        var navbarpages = document.querySelector(".navbar-pages");
        var sidebarsmallsidebar = document.querySelector(".sidebar-smallsidebar");
        var smallsidebar = document.querySelector(".small-sidebar");
        sidebar.style.display = "none";
        smallsidebar.style.display = "flex";
        sidebarsmallsidebar.style.width = "3%";
        sidebarsmallsidebar.style.height = "100%";
        navbarpages.style.width = "95%";
    };
    Sidebar.prototype.showDropDown = function () {
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
    };
    Sidebar.prototype.showEmp = function () {
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
    };
    Sidebar.prototype.showEmptyDisplay = function () {
        var emppage = document.querySelector(".employee-page");
        var roledetailspage = document.querySelector(".roledetails-page");
        var rolepage = document.querySelector(".role-page");
        if (rolepage.style.display == "block" || roledetailspage.style.display == "block" || emppage.style.display == "block") {
            rolepage.style.display = "none";
            roledetailspage.style.display = "none";
            emppage.style.display = "none";
        }
    };
    return Sidebar;
}(employee_1.EmployeeDetails));
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
var employee_1 = __webpack_require__(/*! ./employee */ "./src/employee.ts");
var role_1 = __webpack_require__(/*! ./role */ "./src/role.ts");
var addemployee_1 = __webpack_require__(/*! ./addemployee */ "./src/addemployee.ts");
var addrole_1 = __webpack_require__(/*! ./addrole */ "./src/addrole.ts");
var sidebar_1 = __webpack_require__(/*! ./sidebar */ "./src/sidebar.ts");
var App = /** @class */ (function () {
    function App() {
        this.employeeobject = new employee_1.EmployeeDetails();
        this.employeeobject.addDOMContentLoadedListener();
        this.rolepageobject = new role_1.RolePage();
        this.addemployeeobject = new addemployee_1.AddEmployee();
        this.addroleobject = new addrole_1.AddRole();
        this.sidebar = new sidebar_1.Sidebar();
    }
    return App;
}());
app = new App();

})();

/******/ })()
;