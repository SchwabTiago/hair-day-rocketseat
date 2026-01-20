import { scheduleNew } from "../../services/schedule-new.js"
import { scheduleDays } from "../schedules/load.js"
import dayjs from "dayjs";

const form = document.querySelector("form");
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (e) => {
    e.preventDefault();

    try {
        const name = clientName.value.trim();
        if (!name) {
            return alert("Informe o nome do cliente")
        }
        const hourSelected = document.querySelector(".hour-selected")
        if (!hourSelected) {
            return alert("Selecione a hora")
        }
        const [hours] = hourSelected.innerText.split(":")
        const when = dayjs(selectedDate.value).add(hours, "hours")
        const id = new Date().getTime()
        await scheduleNew({
            id, name, when
        })
        await scheduleDays()
        clientName.value = ""
    } catch (error) {
        console.error(error);
    }
}