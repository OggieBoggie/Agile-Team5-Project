const currentDate = document.querySelector(".current-date")
const days = document.querySelector(".days")

// tracks current date, year and month
let date = new Date(),
    currentYear = date.getFullYear(),
    currentMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"];

const createCalendar = () => {
    // gets the last date of month
    let lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    let liTag = "";

    // for loop to make list element for each date
    for (let i = 1; i <= lastDate; i++) {
        liTag += `<li>${i}</li>`;
    }
    currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
    days.innerHTML = liTag
}

createCalendar();