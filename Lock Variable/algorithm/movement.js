// function randomize() {
//     anime({
//       targets: '.element',
//       easing: 'easeInOutCirc',
//       duration: 750,
//       translateX: "-50%",
//       translateY: "-50%",
//       left: 700,
//       top: 300,
//       scale: 0.23,
     
//       complete: randomize,
//       delay: anime.stagger(100)
//     });

//     anime({
//         targets: '.element2',
//         easing: 'easeInOutCirc',
//         duration: 750,
//         translateX: "-50%",
//         translateY: "-50%",
//         left: 700,
//         top: 300,
//         scale: 0.23,
       
//         complete: randomize,
//         delay: anime.stagger(100)
//       });
//   }
  
//   randomize();
 
 var count = 0;
 

  
  function element2(){
      if(count == 0){
        movement('.element1',700,300,0.43);
        count++;
      }else if(count==1){
        movement('.element2',500,300,0.53);
        count++;
      }
      else if(count==2){
        movement('.element1',1200,300,0.73);
        count++;
      }
      else if(count==3){
        movement('.element2',700,300,0.43);
        count++;
      }else{
        movement('.element2',1200,300,0.73);
      }
     
  }
  function movement(element,left,top,scale){
    anime({
        targets: element,
        easing: 'linear',
        duration: 750,
        translateX: "-50%",
        translateY: "-50%",
        left: left,
        top: top,
        scale: scale,
       
     
        delay: anime.stagger(100)
      });
  }

