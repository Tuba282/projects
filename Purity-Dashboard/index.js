
//********************************** NavLinks Data  */ 
let navText = ['Dashboard', 'Profile', 'SignUp', 'SignIn'];
let navIcons = ['fa-solid fa-cube', 'fa-solid fa-user', 'fa-regular fa-id-badge', 'fa-solid fa-key']
let navLinks = document.querySelector(".navLinks")
function navContent() {
    navText.forEach((text, ind) => {
        var li = document.createElement("li")
        let liText = document.createTextNode(`${text}`)
        let i = document.createElement("i")
        i.setAttribute("class", `${navIcons[ind]}`)
        li.appendChild(i)
        li.appendChild(liText)
        console.log(li.textContent);
        navLinks.appendChild(li)

    })

}
// navContent()


//********************************** Dasboard Pages  */ 

let Pages = ['Dashboard', 'Tables', 'Billing', 'RTL']
let PageIcons = ['fa-solid fa-house', 'fa-solid fa-chart-simple', 'fa-solid fa-credit-card', 'fa-solid fa-gears']
let Acounts = ['Profile', 'SignUp']
let AcountIcons = ['fa-solid fa-user', 'fa-solid fa-rocket']
let sidebarPages = document.querySelector(".sidebarPages")
let accountPages = document.querySelector(".accountPages")

const dasboardPages = () => {
    Pages.forEach((page, ind) => {
        let li = document.createElement("li")
        li.setAttribute("id", `${page}`)
        let liText = document.createTextNode(`${page}`)
        let span = document.createElement("span")
        let i = document.createElement("i")
        i.setAttribute("class", `${PageIcons[ind]}`)
        span.appendChild(i)
        li.appendChild(span)
        li.appendChild(liText)

        sidebarPages.appendChild(li)
    })
    for (let j = 0; j < Acounts.length; j++) {
        let li = document.createElement("li")
        li.setAttribute("id", `${Acounts[j]}`)
        let liText = document.createTextNode(`${Acounts[j]}`)
        let span = document.createElement("span")
        let i = document.createElement("i")
        i.setAttribute('class', `${AcountIcons[j]}`)
        span.appendChild(i)
        li.appendChild(span)
        li.appendChild(liText)
        accountPages.appendChild(li)
    }
}
dasboardPages()

//********************************** toggle menu  */ 

let bars = document.getElementById("bars")
bars.addEventListener("click", () => {
    document.getElementById("sidebarPages").classList.toggle("show-links")
})

//********************************** Page linking  */ 
// dashboardContainer
// tableContainer
// BillingContainer
// RtlContainer
// ProfileContainer
// SignUpContainer
let Dashboard = document.getElementById("Dashboard")
let Tables = document.getElementById("Tables")
let Billing = document.getElementById("Billing")
let RTL = document.getElementById("RTL")
let Profile = document.getElementById("Profile")
let SignUp = document.getElementById("SignUp")

Dashboard.addEventListener("click", () => {
    document.getElementById("topPageName").textContent = "Dashboard"
    document.getElementById("dashboardContainer").style.display = "grid"
    document.getElementById("tableContainer").style.display = "none"
    document.getElementById("BillingContainer").style.display = "none"
    document.getElementById("RtlContainer").style.display = "none"
    document.getElementById("ProfileContainer").style.display = "none"
    document.getElementById("SignUpContainer").style.display = "none"
})
Tables.addEventListener("click", () => {
    document.getElementById("topPageName").textContent = "Tables"
    document.getElementById("tableContainer").style.display = "grid"
    document.getElementById("dashboardContainer").style.display = "none"
    document.getElementById("BillingContainer").style.display = "none"
    document.getElementById("RtlContainer").style.display = "none"
    document.getElementById("ProfileContainer").style.display = "none"
    document.getElementById("SignUpContainer").style.display = "none"
})
Billing.addEventListener("click", () => {
    document.getElementById("topPageName").textContent = "Billing"
    document.getElementById("BillingContainer").style.display = "grid"
    document.getElementById("dashboardContainer").style.display = "none"
    document.getElementById("tableContainer").style.display = "none"
    document.getElementById("RtlContainer").style.display = "none"
    document.getElementById("ProfileContainer").style.display = "none"
    document.getElementById("SignUpContainer").style.display = "none"
})
RTL.addEventListener("click", () => {
    document.getElementById("topPageName").textContent = "RTL"
    document.getElementById("RtlContainer").style.display = "grid"
    document.getElementById("tableContainer").style.display = "none"
    document.getElementById("dashboardContainer").style.display = "none"
    document.getElementById("BillingContainer").style.display = "none"
    document.getElementById("ProfileContainer").style.display = "none"
    document.getElementById("SignUpContainer").style.display = "none"
})
Profile.addEventListener("click", () => {
    document.getElementById("topPageName").textContent = "Profile"
    document.getElementById("ProfileContainer").style.display = "grid"
    document.getElementById("BillingContainer").style.display = "none"
    document.getElementById("dashboardContainer").style.display = "none"
    document.getElementById("tableContainer").style.display = "none"
    document.getElementById("RtlContainer").style.display = "none"
    document.getElementById("SignUpContainer").style.display = "none"
})
SignUp.addEventListener("click", () => {
    document.getElementById("topPageName").textContent = "SignUp"
    document.getElementById("SignUpContainer").style.display = "grid"
    document.getElementById("RtlContainer").style.display = "none"
    document.getElementById("tableContainer").style.display = "none"
    document.getElementById("dashboardContainer").style.display = "none"
    document.getElementById("BillingContainer").style.display = "none"
    document.getElementById("ProfileContainer").style.display = "none"
})