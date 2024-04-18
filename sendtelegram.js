//bot token
var telegram_bot_id = "6912291123:AAFWaiVrrsv0JaML6_A_1zQxG1uAmhejpj4"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = 1350512105; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, email, message;
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let pp = document.querySelector('#pp');
let narx = document.querySelector('#narx');
let i = 0;
function qosh() {
    i++;
    pp.innerHTML = i;
    narx.innerHTML = i * 20000;
    um.innerHTML = i * 20000 + i1 * 17000;
    console.log(i);

};
plus.onclick = qosh;

function ayt() {
    i--;
    if (i < 0) {
        i = 0;
    }
    um.innerHTML = i * 20000 + i1 * 17000;
    pp.innerHTML = i;
    console.log(i);

};
minus.onclick = ayt;

let plus1 = document.querySelector('#plus1');
let minus1 = document.querySelector('#minus1');
let pp1 = document.querySelector('#pp1');
let narx1 = document.querySelector('#narx1');
let i1 = 0;
function qosh1() {
    i1++;
    pp1.innerHTML = i1;
    narx1.innerHTML = i * 17000;
    um.innerHTML = i * 20000 + i1 * 17000;
    console.log(i1);

};
plus1.onclick = qosh1;

function ayt1() {
    i1--;
    if (i1 < 0) {
        i1 = 0;
    }
    um.innerHTML = i * 20000 + i1 * 17000;
    pp1.innerHTML = i1;
    console.log(i1);

};
minus1.onclick = ayt1;
let um = document.querySelector('#um');
var ready = function () {
    message = `cola ${i} fanta ${i1}`;
};
var sendtelegram = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
};
