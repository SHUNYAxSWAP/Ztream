export function emailValid(email) {
    var test = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    if (test) return null
    else return "That email doesn’t look right."
}
export function emailAndNumberValid(data) {
    console.log("hello")
    const phoneRegex = /^\+\d{1,3}\d{9,12}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var test =
        phoneRegex.test(data) || emailRegex.test(data);
    if (test) return null
    else return "Please enter a valid email or phone number."
}