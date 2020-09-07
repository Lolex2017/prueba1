
    function sends()
    {
    
    var email = document.getElementById("email").value;
    var clave = document.getElementById("clave").value;
    
    
    $.ajax({
    type: 'POST',
    crossDomain: true,
    url: "http://127.0.0.1:5000/auth/login",
    data: JSON.stringify({"email":email,"clave":clave}),
    error: function(e) {
    console.log(e);
    },
    success: function (data) { 
    var names = data
    console.log(names);
    
    },
    dataType: "json",
    contentType: "application/json"
    });
    
    document.getElementById("email").value="";
    document.getElementById("clave").value="";
    }