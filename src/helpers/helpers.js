export function getCurrentDate() {
    const  currentDate = new Date();
    const months = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря"
    ];
    const  day = currentDate.getDate();
    const  monthIndex = currentDate.getMonth();
    const  year = currentDate.getFullYear();
    const  formattedDate = day + " " + months[monthIndex] + " " + year;
    return formattedDate;
}

export function checkUser(server, router) {
    if (sessionStorage.getItem("user")) {
        server.getUser();
      }
    if (server.user === null) {
    router.push({ path: "/" });
    }
}
