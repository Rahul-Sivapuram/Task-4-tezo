type RolePageModel={
    username:string,
    userrole:string,
    stamp:string,
    useremail:string,
    userdepartment:string,
    location:string,
}
type RoleDetailsModel={
    Role:string,
    Department:string,
    Location:string,
    TotalEmployees:string,
}
export class RolePage{
    readonly users:RolePageModel[] = [
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
    readonly roleData:RoleDetailsModel[] = [
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

    createRoleCard(userInformation:any){
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

    showRoleCard(){
    var space:HTMLDivElement=document.querySelector(".info-cards-list-2")! as HTMLDivElement;
    space.innerHTML="";
    for(let i in this.users){
        let res=this.createRoleCard(this.users[i]);
        space.appendChild(res);
    }
    }

   

    createCard(data:any){
    let infocard = document.createElement("div");
    infocard.setAttribute("class", "info-card");
    let inforow = document.createElement("div");
    var imgelmnt = document.createElement("img");
    var h = document.createElement("h5");
    inforow.setAttribute("class", "info-row");
    h.innerHTML = data.Role;
    imgelmnt.src="assets/svg/blueeditbox.svg";
    imgelmnt.alt='BlueEditBox symbol';
    inforow.appendChild(h);
    inforow.appendChild(imgelmnt);
    infocard.appendChild(inforow);
    //row2
    let inforow1 = document.createElement("div");
    let spanins=document.createElement('span');
    var imgelmnt1 = document.createElement("img");
    var span=document.createElement("span");
    let infocarditems=document.createElement("div");
    inforow1.setAttribute("class", "info-row");
    infocarditems.setAttribute("class","infocard-items");
    imgelmnt1.src="assets/svg/group.svg";
    imgelmnt1.alt="Group symbol";
    span.innerText="Department";
    spanins.innerText=data.Department;
    inforow1.appendChild(infocarditems);
    infocarditems.appendChild(imgelmnt1);
    infocarditems.appendChild(span);
    inforow1.appendChild(spanins);
    infocard.appendChild(inforow1);
    //row3
    let inforow2 = document.createElement("div");
    var spaninside=document.createElement("span");
    var imgelmnt2 = document.createElement("img");
    var span2=document.createElement("span");
    let infocarditems2=document.createElement("div");
    inforow2.setAttribute("class", "info-row");
    infocarditems2.setAttribute("class","infocard-items");
    imgelmnt2.src="assets/svg/location.svg";
    imgelmnt2.alt="Location symbol";
    span2.innerText="Location";
    spaninside.innerText=data.Location;
    infocarditems2.appendChild(imgelmnt2);
    infocarditems2.appendChild(span2);
    inforow2.appendChild(infocarditems2);
    inforow2.appendChild(spaninside);
    infocard.appendChild(inforow2);
    //row4
    let inforow3=document.createElement('div');
    let span3=document.createElement('span');
    let span3ins=document.createElement('span');
    let div1=document.createElement('div');
    let div2=document.createElement('div');
    let div3=document.createElement('div');
    let div4=document.createElement('div');
    let div5=document.createElement('div');
    let img1=document.createElement('img');
    let img2=document.createElement('img');
    let img3=document.createElement('img');
    inforow3.setAttribute('class','info-row');
    div1.setAttribute('class','profiles-many');
    div2.setAttribute('class','img1');
    div3.setAttribute('class','img2');
    div4.setAttribute('class','img3');
    div5.setAttribute('class','employee-count');
    span3.innerText="Total Employees";
    img1.src="assets/images/avatar.png";
    img2.src="assets/images/avatar.png";
    img3.src="assets/images/gamer.png";
    span3ins.innerText=data.TotalEmployees;
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
    let inforow4=document.createElement('div');
    inforow4.setAttribute('class','arrow-item');
    let span4=document.createElement('span');
    let img4=document.createElement('img');
    let div6=document.createElement('div');
    span4.innerText="View all Employees";
    img4.src="assets/svg/arrow.svg";
    img4.onclick=()=>{
        this.showAllEmp();
    };
    div6.appendChild(span4);
    div6.appendChild(img4);
    inforow4.appendChild(div6);
    infocard.appendChild(inforow4);
    return infocard;
    }

    showCards(){
    let infocardslist:HTMLElement = document.querySelector(".info-cards-list")! as HTMLElement;
    infocardslist.innerHTML="";
    for(var i in this.roleData){
        var res =this.createCard(this.roleData[i]);
        infocardslist.appendChild(res);
    }
    }

    filter(){
    var selectedlocation:HTMLSelectElement = document.getElementById("role-location")! as HTMLSelectElement;
    var selecteddepartment:HTMLSelectElement = document.getElementById("role-departments")! as HTMLSelectElement;
    let infolist:HTMLElement=document.querySelector(".info-cards-list")! as HTMLElement;
    infolist.innerHTML="";
    for(var i in this.roleData){
        const doc = this.roleData[i];
        if(doc.Department == selecteddepartment.value && doc.Location == selectedlocation.value)
        {
            var res=this.createCard(doc);
            infolist.appendChild(res);
        }
    }
    }

    showAllEmp(){
    var employeepage:HTMLElement = document.querySelector(".employee-page")! as HTMLElement;
    var roledetailspage:HTMLElement = document.querySelector(".roledetails-page")! as HTMLElement;
    var rolepage:HTMLElement = document.querySelector(".role-page")! as HTMLElement;
    this.showRoleCard();
    if(rolepage.style.display == "none"){
        rolepage.style.display = "block";
        employeepage.style.display = "none";
        roledetailspage.style.display = "none";
    }
    else{
        rolepage.style.display = "none";
    }
    }

    showFieldDropdown(){
    var list:HTMLDivElement = document.querySelector(".checkbox-dropdownlist")! as HTMLDivElement;
    var checkboxes: NodeListOf<HTMLInputElement>  = document.querySelectorAll('input[type="checkbox"][name="dp-empdetails"]');
    var placeholder:HTMLSpanElement = document.getElementById("searchPlaceholder")! as HTMLSpanElement;
    var searchinp:HTMLInputElement=document.getElementById("searchemp")! as HTMLInputElement;
    if (list.style.display === "none") {
        list.style.display = "flex";
    } else {
        list.style.display = "none";
    }
    
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            placeholder.textContent = checkboxes[i].value;
            break;  
        }
        else{
            placeholder.innerText=searchinp.value;
        }
    }
    }

    showAddRolePage(){
    var usertable:HTMLElement = document.querySelector(".info-cards-list")! as HTMLElement;
    var rolepage:HTMLElement = document.querySelector(".addnewrole-page")! as HTMLElement;
    var filterrole:HTMLElement = document.querySelector(".filterrole")! as HTMLElement;
    var addrole:HTMLElement = document.querySelector(".add-roledetails")! as HTMLElement;
    var roledetails:HTMLElement = document.querySelector(".roledetails-page")! as HTMLElement;
    
    var isUserTableVisible = usertable.style.display === "grid" || getComputedStyle(usertable).display === "grid";
    var isRolePageVisible = rolepage.style.display === "block" || getComputedStyle(rolepage).display === "block";
    if (isUserTableVisible && !isRolePageVisible) {
        usertable.style.display = "none";
        filterrole.style.display = "none";
        addrole.style.display = "none";
        rolepage.style.display = "flex";
    } else if (!isUserTableVisible && isRolePageVisible) {
        rolepage.style.display = "none";
        usertable.style.display = "grid";
        filterrole.style.display = "flex";
        addrole.style.display = "flex";
        roledetails.style.display = "block";
    } else {
        usertable.style.display = "grid";
        filterrole.style.display = "flex";
        rolepage.style.display = "none";
        addrole.style.display = "flex";
    }
    }

    showRole(){
        var employeepage:HTMLElement=document.querySelector(".employee-page")! as HTMLElement;
        var roledetailspage:HTMLElement=document.querySelector(".roledetails-page")! as HTMLElement;
        var rolepage:HTMLElement=document.querySelector(".role-page")! as HTMLElement;
        if(!roledetailspage.style.display ||roledetailspage.style.display == "none"){
            roledetailspage.style.display = "block";
            employeepage.style.display = "none";
            rolepage.style.display = "none";
        }
        else{
            roledetailspage.style.display = "none";
        }
        this.showCards();
    }
}