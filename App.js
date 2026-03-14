function login(){

const client_key = "aw5hxji3xptu7r10";

const redirect_uri = "https://pabonfelipe22-eng.github.io/Autoclipperalfaone/callback";

const scope = "user.info.basic,video.list";

const auth_url =
"https://www.tiktok.com/v2/auth/authorize/" +
"?client_key=" + client_key +
"&response_type=code" +
"&scope=" + scope +
"&redirect_uri=" + encodeURIComponent(redirect_uri) +
"&state=random";

window.location.href = auth_url;

}