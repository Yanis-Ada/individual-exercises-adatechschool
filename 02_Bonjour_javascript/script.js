{
    let firstName = prompt("Quel est ton prénom ?");
    let currentHour = new Date().getHours();
    
        function sayHello(firstName, hour){
            
            let message;

            if(hour > 18) {
                
                message = "Bonsoir " + firstName
                document.querySelector('h1').innerText = message
            } else {
                message = "Bonjour " + firstName
                document.querySelector('h1').innerText = message
            }
            console.log(message)
        }

            
        sayHello(firstName, currentHour)
}