let countEl = document.getElementById('count_id');
let count= 0;
function increment(){
 count= count +1;
 countEl.innerText= count;
}

function save(){
    document.write(count);
}

// string in javascript should be writen in double or single qutations
let username="fatima ";
let msg = "you have three notifications miss!";
let msgtouser= username+ "," + msg;
window.alert(msgtouser);