export default function unauthorized(code) {
  if (code === 401) {
    sessionStorage.clear();
    localStorage.clear();
    //last location
    let lastLocation = window.location;
    sessionStorage.setItem("lastLocation", lastLocation);

    window.location.href = "/login";
  }
}
