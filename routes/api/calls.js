// const Router = require('express');
const express = require('express');
const router = express.Router();
const card = require('./cardio');
const breathingproblem = require('./breath');
const diabetes = require('./dia');
const bp = require('./bp');
const mail= require('./emailp.js');
//Ifcardio ==="cardio"
router.get('/', (req, res) => {
  // res.render();
  res.render('index', {
    title: 'Trackit',
    card,
  });
});



let calo = [];
let schd = [];
console.log(calo);


router.post('/', (req, res) => {
  //console.log('0 th st', calo);
  // res.render();
  // console.log(req.body.name);
  // console.log(card);

  // let found;
  // for (let c of card) {
  //   if (c.name === req.body.name) {
  //     console.log(c.name);
  //     found = c;
  //   }
  // }
  //console.log('2nd', calo);
  let srch = req.body.name;
  let srchf = srch.replace(/ /g,'').toUpperCase();

  console.log(srchf);
  // if(srchf!='CARDIO'||srchf!='BREATHINGPROBLEM'||srchf!='BP'||srchf!='DIABETES'){
  //   prompt(" Please enter the valid Data ");
  // }
  if (srchf === 'CARDIO') {
    for (let i = 0; i < card.length; i++) {
      // console.log('j');

      // calo[i] = card[i];
      calo[i]=card[i];
      schd[i]=card[i];
      
      // calo.push(card[i]);
      // schd.push(card[i]);
      // console.log('error here cardio', calo);
    }
    // calo.push(card);

    res.render('index', {
      title: 'Trackit',
      calo,
    });
  } else if (srchf === 'BREATHINGPROBLEM') {
    for (let i = 0; i < breathingproblem.length; i++) {
      calo[i] = breathingproblem[i];
      schd[i]=breathingproblem[i];
      // console.log('error breathing', calo);
    }
    res.render('index', {
      title: 'Trackit',

      calo,
    });
  } else if (srchf === 'DIABETES') {
    for (let i = 0; i < diabetes.length; i++) {
      calo[i] = diabetes[i];
      schd[i] = diabetes[i];
      // console.log('dia', calo);
    }
    res.render('index', {
      title: 'Trackit',

      calo,
    });
  } else if (srchf === 'BP') {
    for (let i = 0; i < bp.length; i++) {
      calo[i] = bp[i];
      schd[i] = bp[i];
      
      //console.log('bp', calo);

    }
    res.render('index', {
      title: 'Trackit',

      calo,
    });
  }
  // console.log(calo);
  //console.log('schdule',schd[4].type);
//----------------------------------------------------------------------------------------

  // let id = [];
  // let temp = 0;
  // let na_dup = [2,4,1,3];
  

  // //while(flag==1){
  // for (let k = 0; k < 4; k++){
    
  //     // console.log(`Select a ${schd[temp].type}`);
  //     //na_dup = 3;
  //     id[k] = temp+na_dup[k]-1;
  //     temp = temp+4;

  //    }
  // for (let k = 0; k < 4; k++) {
  //   console.log(schd[id[k]]); 
  // }
    

  //  }


  calo = [];
}
);



// else if (srch === 'BREATHING PROBLEM') {
//   for (let i = 0; i < breathingproblem.length; i++) {
//     calo[i] = breathingproblem[i];
//   }
//   res.render('index', {
//     title: 'Trackit',

//     calo,
//   });
// }
// res.render('index', {
//   title: 'MemberApp',
//   card: found,
// });

// router.get('/:name', (req, res) => {
//   const found = members.some((member) => member.name === req.params.name);
//   if (found) {
//     res.json(members.filter((member) => member.name === req.params.name));
//   } else {
//     res.status(400).json({ msg: `No Memember with ${req.params.name}` });
//   }
// });

//____________________________________________________________________
//MAIL PROCESS SIDE
router.post('/send', (req, res) => {
console.log(req.body);
let usermail=req.body.email;
// let choice=req.body.number;

let id = [];
  let temp = 0;
  let choice= Number(req.body.number);
  
  let total=0;

  
  // let na_dup=[3,4,2,1];
  

  //while(flag==1){
  for (let k = 0; k < 4; k++){
    
      // console.log(`Select a ${schd[temp].type}`);
      na_dup = choice;

      id[k] = temp+na_dup-1;
      temp = temp+4;

     }


     for (let k = 0; k < 4; k++){
      total+=parseInt(schd[id[k]].cal.match(/\d+/g).join(""));

     }

     let food=`Hey !!! 😊User here is your customized 😋🫰Diet Plan\n  with a Total Calories of ${total}\n \n`;
  
  
     for (let k = 0; k < 4; k++) {
    console.log(schd[id[k]]);// prints every each single variable 
    total+=parseInt(schd[id[k]].cal.match(/\d+/g).join(""));
    food=food+`-----${schd[id[k]].type}-----`+`\n`+`Name:`+schd[id[k]].name+`\n`+`Calories:`+schd[id[k]].cal+`\n`+`Carbohydrates:`+schd[id[k]].carb+`\n`+`Protein:`+schd[id[k]].protein+`\n`+`Fat:`+schd[id[k]].fat+`\n`;
    // console.log(schd[id[k]].protein);
  }
 
    // console.log(schd);

  //  }

console.log(typeof choice);

mail(usermail,food);
// res.send(200);

res.render('mail',{
  title:'Trackit',
} );



});

module.exports = router;

// npm start index.js