
const redirect_uri = "http://127.0.0.1:5500/index.html";

const client_id = "96eb968892924b6480b0c474af45bfb8";
const client_secret = "438bad3a8ab24fa5aeab79f32be284b1";

const TOKEN = "https://accounts.spotify.com/api/token";
const localStorage = window.localStorage;
let code = "";
let access_token = "";
let refresh_token = "";
let encoded = "OTZlYjk2ODg5MjkyNGI2NDgwYjBjNDc0YWY0NWJmYjg6NDM4YmFkM2E4YWIyNGZhNWFlYWI3OWYzMmJlMjg0YjE";
let request = new XMLHttpRequest();

function requestAuthorization(){
  let scope = `user-read-private user-read-email user-library-read`;

  window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&show_dialog=true&scope=${scope}`; 

}
function grabCode(){
  let params = new URLSearchParams(document.location.search);
  let code = params.get("code");
  console.log(code);
  return code;
}
function getToken(){
  grabCode();
  request.open('POST', "https://api.spotify.com/api/token", true);
  request.setRequestHeader(`Content-Type`, `application/x-www-form-urlencoded`);
  // let toEncode = `${client_id}:${client_secret}`
  // let encoded = Buffer.from(toEncode, 'base64')
  let encoded = "OTZlYjk2ODg5MjkyNGI2NDgwYjBjNDc0YWY0NWJmYjg6NDM4YmFkM2E4YWIyNGZhNWFlYWI3OWYzMmJlMjg0YjE";
  request.setRequestHeader('Authorization', 'Basic ' + encoded );
  request.send(`grant_type=authorization_code&code=${code}&redirect_uri=${encodeURI(redirect_uri)}&client_id=${client_id}&client_secret=${client_secret}`);
  request.onload = handleAuthorizationResponse;
}

function handleAuthorizationResponse(){
  if ( this.status == 200 ){
      var data = JSON.parse(this.responseText);
      console.log(data);
      var data = JSON.parse(this.responseText);
      if ( data.access_token != undefined ){
          access_token = data.access_token;
      }
      if ( data.refresh_token  != undefined ){
          refresh_token = data.refresh_token;
      }
  }
  else {
      console.log(this.responseText);
      alert(this.responseText);
  }
}

// function getPlaylist(){
//   grabCode();
//   request.open('GET', "https://api.spotify.com/v1/playlists/3CVo4eHMwxSR0cJ9UEI4Fm");
//   request.setRequestHeader(`Authorization`, `Bearer ${code}`);
//   request.send();
// }
  