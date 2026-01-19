export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available")

  hours.forEach((el) => {
    el.addEventListener("click", (evt) => {
      hours.forEach((hour) => hour.classList.remove("hour-selected"))
      evt.currentTarget.classList.add("hour-selected")
    })
  })
}
