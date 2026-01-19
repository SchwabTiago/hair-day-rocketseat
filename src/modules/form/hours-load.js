import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hoursForm = document.getElementById("hours")

export function hoursLoad({ date }) {
    hoursForm.innerHTML = ""

    openingHours.forEach((hours) => {
        const [h, m] = hours.split(":").map(Number)

        const slotTime = dayjs(date).hour(h).minute(m).second(0)
        const available = slotTime.isAfter(dayjs())

        if (hours === "9:00") hoursHeaderAdd("Manhã")
        else if (hours === "13:00") hoursHeaderAdd("Tarde")
        else if (hours === "19:00") hoursHeaderAdd("Noite")

        const li = document.createElement("li")
        li.classList.add("hour", available ? "hour-available" : "hour-unavailable")
        li.textContent = hours

        hoursForm.append(li)
    })

    hoursClick()
}

function hoursHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title
    hoursForm.append(header)
}