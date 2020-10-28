var count = 0;



function movementAnimation(elementClass,leftMargin,topMargin,scaleToSize){
    anime({
        targets: elementClass,
        easing: 'linear',
        duration: 750,
        // translateX: "-50%",
        // translateY: "-50%",
        left: leftMargin,
        top: topMargin,
        scale: scaleToSize,
        delay: anime.stagger(100)
      });
}