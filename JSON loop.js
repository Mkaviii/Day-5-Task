let json = [{
    "id" : "1", 
    "msg"   : "hi",
    "tid" : "2013-05-05 23:35",
    "fromWho": "hello1@email.se"
},
{
    "id" : "2", 
    "msg"   : "there",
    "tid" : "2013-05-05 23:45",
    "fromWho": "hello2@email.se"
}];
// for loop

for(let i = 0; i < json.length; i++) {
    let obj = json[i];

    console.log(json[i]);
}

// for in loop

for(let key in json) {
 

    console.log("key",json[key]);
  }

// for of loop

for(let a of json) {
 

    console.log("key:",json);
  }

// for each loop

json.forEach((item) => {
    console.log('ID: ' + item.id);
    console.log('MSG: ' + item.msg);
    console.log('TID: ' + item.tid);
    console.log('FROMWHO: ' + item.fromWho);
  });
