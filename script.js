function send(){ 
    swal({
     title: '¿Estas seguro de enviar este formulario?',
     /* text: 'You will not be able to recover this imaginary file!', */
     type: 'warning',
     showCancelButton: true,
     confirmButtonText: 'Si, enviar!',
     cancelButtonText: 'Cancelar'
    }).then((result) => {
     if (result.value) {
       swal(
         'Enviado!','Su formulario fue enviado!.','success'
       )
       sends();
     // For more information about handling dismissals please visit
     // https://sweetalert2.github.io/#handling-dismissals
     } else if (result.dismiss === swal.DismissReason.cancel) {
       swal(
         'Cancelado!', 'Su formulario no se envio', 'error'
       )
     }
    })
    } 
    
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