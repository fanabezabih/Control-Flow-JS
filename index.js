// 1.A user has 3 attempts to log in. Simulate failed login attempts using while. After 3, show "Account locked".




const loginAttempts = () => {
    let loginAttempt=1
     while (loginAttempt <= 3) {
         console.log(`Login attempt is ${loginAttempt}`)
         loginAttempt ++;
     }
     console.log(`Account locked`)
 
 }
 loginAttempts()
 

 //2.Users are voting on a feature. Use do...while to log each vote from an array until all votes are processed. 
 
const users=(votes)=>{
    let i=0
    do{
        console.log(`vote record:${votes[i]}`)
        i++
    }
    while(i<votes.length)
        console.log("All votes have been logged")
 }
 let votes=["Yes","No","Yes","No"]
 users(votes)

 // 3.Loop through an array of numbers from 1–7 and use a switch to print the corresponding day name.
 
 const correspondent = (days) => {
     for(i=0;i<=days.length;i++){
     switch (days[i]) {
         case 1:
             console.log("Monday")
             break;
         case 2:
             console.log("Tuesday")
             break;
         case 3:
             console.log("Wednesday")
             break;
         case 4:
             console.log("Thursday")
             break;
         case 5:
             console.log("Friday")
             break;
         case 6:
             console.log("Satureday")
             break;
         case 7:
             console.log("Sunday")
             break;
         default:
             console.log("None")
             break;
     }
 }
 }
 const days = [3, 4, 6, 7, 2, 8]
 correspondent(days)
 
 
 
 
 //4.Given an array of password strings, use if...else to: log "Strong" if length >= 8, and "Weak" otherwise.
 function userPasswords(password){
         password.forEach(item=>
         {
             if(item.length>=8){
                 console.log(`Strong `)
             }
             else{
                 console.log(`Weak`)
             }
         }
     )
     }
     const password=["fana123","fana@62133"]
     userPasswords(password)
 
 
 
 
    // 5.You're building a multilingual site. Use a switch to show greetings based on language codes. I.e "en" → "Hello", "fr" → "Bonjour", "sw" → "Habari".
 
 
    const languages = (greetings) => {
         for(i=0;i<greetings.length;i++){
         switch (greetings[i]) {
             case "en":
                 console.log("Hello")
                 break;
             case "fr":
                 console.log("Bonjour")
                 break;
             case "sw":
                 console.log("Habari")
                 break;
            
            default:
             console.log("Language does not exist")
             break;
         }}
     }
     const greetings=["en","fr","sw"]
     languages(greetings)
 
 
    // 6.You're building a weather dashboard. Loop through an array of temperatures and: If above 30, log "High heat alert!", else if below 15, log "Cold alert!", else, log "Normal conditions"
 
    function weather(temprature){
         temprature.forEach(item=>
         {
             if(item>30){
                 console.log(`"High heat alert!" `)
             }
             else if(item<15){
                    console.log(`Cold alert!`)
             }
             
             
             else{
                 console.log(`Normal conditions`)
             }
         }
         )
     }
     const temprature=[30,15,20,85]
     weather(temprature)
     




     
     
     //7.Users are queued to register. Use a while loop to remove and print each name until the queue is empty.

     const registration=(queue)=>{
        while(queue.length>0){
            const name=queue.shift()
            console.log(name)
        }
     }
      let queue=["Fana","Hellen","Hewaan"]
      registration(queue)







      //8. Students retake a test until they score 50 or more. Use do...while to simulate attempts, increasing the score by 10 each time until it's >= 50.
      const test=(score)=>{
        
        let attempt = 1

            do {
                console.log(`attempt ${attempt}: ${score}`)
                score += 10
                attempt++;
            }
        
            while (score < 50)
            if (score >= 50) {
                console.log("Student passed the test")
            }
        }
       
       let score = 10
        test()
     