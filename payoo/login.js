document.getElementById('button-login')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const emailnumber = document.getElementById('your-email').value;
         const pinnumber = document.getElementById('your-pin').value
         
 
        if (  emailnumber ===  '3' && pinnumber  === '12' ) {
            alert('if you click ok button you will entry new page'); 
            window.location.href = "home.html"
        } else {
            alert('wrong number ');
            
        }
    })


    document.getElementById('button')
        .addEventListener('click' , function(){
            window.location.href ="home.html"
        })

 






