import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

function useUserData() {
    // Retrieve the access token and refresh token from browser cookies
    let access_token = Cookies.get("access_token");
    let refresh_token = Cookies.get("refresh_token");

    if (access_token && refresh_token) {
        const token = refresh_token;
        const decoded = jwtDecode(token);
        return decoded;
    } else {
        console.log("Token is undefined Heba :)")
    }
}

export default useUserData;
