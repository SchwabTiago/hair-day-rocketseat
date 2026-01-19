import { scheduleDays } from '../schedules/load'
const selectedDate = document.getElementById("date")

selectedDate.onchange = () => scheduleDays()