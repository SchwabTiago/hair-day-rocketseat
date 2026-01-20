import { apiConfig } from "./api-config.js"

export async function scheduleNew({ name, when }) {
    const response = await fetch(`${apiConfig.baseURL}/schedules`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            when: new Date(when).toISOString()
        })
    })

    if (!response.ok) {
        throw new Error("Erro ao criar agendamento")
    }

    return response.json() 
}
