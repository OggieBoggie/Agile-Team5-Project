const currentDate = document.querySelector(".current-date"),
days = document.querySelector(".days"),
next = document.querySelectorAll(".icon span");
// tracks current date, year and month
let date = new Date(),
    currentYear = date.getFullYear(),
    currentMonth = date.getMonth();

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
"Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

const createCalendar = () => {
    // gets first day of month
    let firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay(),
    // gets last day of month
    lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate(),
    // gets days from last month
    lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate(),
    lastDaysofMonth = new Date(currentYear, currentMonth, lastDateofMonth).getDay();
    let liTag = "";

    // loop for going through days from last month giving them an inactive class
    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`
    }

    // for loop to make list element for each date
    for (let i = 1; i <= lastDateofMonth; i++) {
        liTag += `<li>${i}</li>`;
    }

    for (let i = lastDaysofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDaysofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
    days.innerHTML = liTag
}

createCalendar();

// adds event listener to icons
next.forEach(icon => {
    icon.addEventListener("click", () => {
        currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;

        // if the index is lower then 0 (january) or higher than 11(december) change the year
        if (currentMonth < 0 || currentMonth > 11) {
            date = new Date(currentYear, currentMonth);
            currentYear = date.getFullYear();
            currentMonth = date.getMonth();
        } else {
            date = new Date();
        }

        createCalendar();
    })
})