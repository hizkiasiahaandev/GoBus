const ADMIN_KEY = "me_admin_logged_in"

export function loginAdmin(username: string, password: string) {
  if (username === "admin" && password === "admin123") {
    localStorage.setItem(ADMIN_KEY, "true")
    return true
  }
  return false
}

export function isAdminLoggedIn() {
  return localStorage.getItem(ADMIN_KEY) === "true"
}

export function logoutAdmin() {
  localStorage.removeItem(ADMIN_KEY)
}
