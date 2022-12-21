function big(){
    document.getElementById('innerdiv4').className="large";
}
function small(){
    document.getElementById('innerdiv4').className="small";
}
function FormValidiation(){
    var naam=  document.getElementById('name').value ;
    var emel= document.getElementById('email'). value;
    if(naam == "")
    {  document.getElementById('uerror').innerText=
    "please enter your name!";
    return false;

    }
    else if(emel ==""){
        document.getElementById('error').innerText=
        "please enter your email!";
        return false;
    }
    else
    return true;
}