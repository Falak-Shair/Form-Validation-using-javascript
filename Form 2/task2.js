
function formSubmitted() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;



    // if(subject==""){

    // console.log("NAME : " +name);
    // console.log("EMAIL : " +email);
    // console.log("DATE : " +date);
    // console.log("MESSAGE : " +message);

    // }

    // else{

    // console.log("NAME : "+name);
    // console.log("EMAIL : " +email);
    // console.log("DATE : " +date);
    // console.log("SUBJECT : " +subject);
    // console.log("MESSAGE : " +message);

    // }

    // first method 

     var obj = {
          Name : name,
          EMAiL : email,
          DATE : date,
          SUBJECT : subject,
          MESSAGE : message

     }
    console.log(obj)

    //  second method 
    
    var obj = {}

        obj.Name = name,
        obj.EMAiL = email,
        obj.DATE = date,
        obj.SUBJECT = subject,
        obj.MESSAGE = message

    console.log(obj)
}