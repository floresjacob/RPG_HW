$(document).ready(function(){
    
    var chosenHero
    var chosenEnemy
    var isHeroAlive
    var isEnemyAlive
    
    function initGame() {
        //generate characters
        for(i=0; i<charArr.length; i++){
            var num = 12 / charArr.length
            var charThing = $("<div class='col-md-"+num+"'><img src='"+charArr[i].image+"'/></div>")
            $("#characters").append(charThing)
        }
    }

    //name, hp, strength, image
    var charArr = [
        {
            name : "Inception",
            hp : 50,
            strength : 50,
            image : "./assets/images/incept.jpg"
        },
        {
            name : "Politician",
            hp : 50,
            strength : 50,
            image : "./assets/images/pol.jpg"
        },
        {
            name : "Book",
            hp : 50,
            strength : 50,
            image : "./assets/images/book.jpg"
        },
        {
            name : "Brain",
            hp : 50,
            strength : 50,
            image : "./assets/images/brain.jpg"
        }
    ]

    initGame()
})