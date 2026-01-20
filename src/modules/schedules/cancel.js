import { scheduleCancel } from "../../services/schedule-cancel.js"
import { scheduleDays } from "./load.js"

const periods = document.querySelectorAll(".period")

periods.forEach((period) => {
    period.addEventListener("click", async (e) => {
        if (!e.target.classList.contains("cancel-icon")) return

        const item = e.target.closest("li")
        const { id } = item?.dataset || {}

        if (!id) return

        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")
        if (!isConfirm) return

        await scheduleCancel({ id })
        await scheduleDays()
    })
})
