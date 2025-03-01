//hyderabad : take user credentials and authenticate
//---->handle user
//noida : make the payment from the wallet by doing by wallet doing required checks
//---->handlePayment(id)
//bangalore: to handle these two teams and implement wallet functionality


//CASE 1
//---const userId = handlePayment(userId)
//---if(userId){
 // const res = handlePayment(userId)
 //log(res)
//---}else{
//log("invalid credential")}


//CASE 2
//use callbacks
//---> const res = handleUserPayment(handlePayment)
                 //what if the team calls handlePayment 2 times?
                 //or even with wrong credentials?
                 //or never calls it?
//----> console.log(resp);


//use promise  (promise object( res , rej))
//---> const res = handleUser()---> return promise
//--->THEN{
//     const res = handlePayment(userId)
//    log(resp)
//     }Catch{
//        log("inavlid details")           
//    }
   


