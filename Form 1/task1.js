function form_validation(){

    var name = document.getElementById("name").value;
    var DOB = document.getElementById("DOB").value;
    var certificate = document.getElementById("certificate").value;
    var applying_for = document.getElementById("applying_for").value;

    if(name ==""){
        alert("Please fill Name");
    }

    if( DOB == ""){
        alert("Please fill Date of Birth");

    }
    if( certificate == ""){
        alert("Please fill certificate");

    }
    if(applying_for == ""){
        alert("PLease fill Applying for")
    }


}