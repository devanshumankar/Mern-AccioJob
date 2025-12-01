// in memory problem
// we cant able to persist the data that we had created
// and if we open the same page in differnt tabs then also we cant get created data of on page to another

// so for that we had two different storage methods that can be persist the data
// 1.session storage
// 2.LocalStorage

// ex:storing logged in user id
// ex:theme of a page

// Local Storage:
// 1.stores the data in key value form
// 2.both has string datatype
// 3.origins has domain co-domain and host if any origin is is differnt the storage will be created for that origin
// and each of the storage will have 5 to 10 mb of memory

const key = "name";
const value = "Devanshu";
const value2 = "Dev";
localStorage.setItem(key, value)
// this will store the latest value of a key

// removing the data

// localStorage.setItem(key, value2)
localStorage.removeItem("key");
localStorage.clear();
// remove all localStorage
console.log(localStorage.getItem(key))

// it will persist the data
// 1.when reopen the browser
// 2.refresh the page
// 3.tab reopening

console.log(localStorage.length);
localStorage.setItem("key1","value1")
localStorage.setItem("key2","value2")
localStorage.setItem("key3","value3")
localStorage.setItem("key4","value4")
localStorage.setItem("key5","value5")
for(let i=0;i<localStorage.length;i++){
    console.log(localStorage.key(i),localStorage.getItem(localStorage.key(i)))
}

// limitation
// 1.cant store large data
// 2.only store string which is not good if we want to work with objects or array but there are methods through which we can do
// 3.provides limited storage so if we exceed the limit then throw error: QuotaExceeded error 
// so always write setItem using try catch(good practice)
// 4.it has synchronous nature so if we are writing large amount of data then it will stop rest of the code
// that cause performance issue

// function hasLocalStorage
function hasLocalStorage(){
    try{
        localStorage.setItem("key","val")
        if(localStorage.getItem("key")==="val"){
            return true;
        }
    }
    catch(err){
        return false;
    }
}

// 5.security


