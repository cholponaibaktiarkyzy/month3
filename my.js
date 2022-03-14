
function validMail(){
    const regx =/[a-z&0-9]@[a-z]+\.[(com||ru||kg||net)]/;
    const mail =document.getElementById("email").value;
    if(regx.test(mail)){
       alert('Success')
        console.log('true')
    }else{
        alert('Error')
        console.log('false')
    }
}

function validPhone(){
    const phone = document.getElementById("phone").value;
     const regexFoxPhone = /\+996\s\d{3}.\d{2}.\d{2}.\d{2}$/;
     if (regexFoxPhone.test(phone)){
    alert('Success')
        console.log('true')
    }else{
        alert('Error')
        console.log('false')
    }
}