const form = document.querySelector("form");
const name = form.querySelector("input[name=name]");

const  email = form.querySelector("input[name=email]");

const  password = form.querySelector("input[name=password]");

form.addEventListener("submit",function myfnc(e){
    e.preventDefault();
    const user={
        name:this.name.value,
        email:this.email.value,
        password:this.password.value
    };
    console.log(user);
})
