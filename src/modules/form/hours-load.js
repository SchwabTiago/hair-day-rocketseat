import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hoursForm = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules = [] }) {
    hoursForm.innerHTML = ""

    const unavailableHours = dailySchedules.map((schedule) =>
        dayjs(schedule.when).format("HH:mm")
    )

    openingHours.forEach((hours) => {
        const [h, m] = hours.split(":").map(Number)
        const hourLabel = dayjs().hour(h).minute(m).second(0).format("HH:mm")

        const slotTime = dayjs(date).hour(h).minute(m).second(0)

        const isHourPast = slotTime.isBefore(dayjs())
        const isHourTaken = unavailableHours.includes(hourLabel)

        const isAvailable = !isHourPast && !isHourTaken

        if (hourLabel === "09:00") hoursHeaderAdd("Manhã")
        else if (hourLabel === "13:00") hoursHeaderAdd("Tarde")
        else if (hourLabel === "19:00") hoursHeaderAdd("Noite")

        const li = document.createElement("li")
        li.classList.add("hour", isAvailable ? "hour-available" : "hour-unavailable")
        li.textContent = hourLabel

        li.dataset.time = hourLabel

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
