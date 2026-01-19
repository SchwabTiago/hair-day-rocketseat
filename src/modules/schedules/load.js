import { hoursLoad } from "../../modules/form/hours-load.js"
import { scheduleFetchByDay } from '../../services/schedule-fetch-by-day.js'

const selectedDate = document.getElementById("date")
export async function scheduleDays() {
    const date = selectedDate.value
    const dailySchedules = await scheduleFetchByDay({ date })
    
    hoursLoad({ date })
}