$(document).ready(function(){
    
    var chosenHero
    var chosenEnemy
    var isHeroChosen
    var isEnemyChosen
    var isHeroAlive
    var isEnemyAlive
    
    function initGame() {
        isHeroChosen = false
        isEnemyChosen = false        
        //generate characters
        for(i=0; i<charArr.length; i++){
            var num = 12 / charArr.length
            var charThing = $("<div class='col-md-"+num+" myChar' value = '" + i + "'><img src='"+charArr[i].image+"'/><div class='panel-footer'>"+charArr[i].name+"</div></div>")
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

    $(document).on("click", ".myChar", function(){
        if(isHeroChosen === false){
            chosenHero = charArr[$(this).attr("value")]
            console.log(chosenHero)
            $(this).addClass("fader")
            isHeroChosen = true //sets Hero choice to char clicked  
        }
        else if(isEnemyChosen === false && chosenHero.name !== charArr[$(this).attr("value")].name) 
        {
            chosenEnemy = charArr[$(this).attr("value")]
            console.log(chosenEnemy)
            $(this).addClass("fader")
            isEnemyChosen = true //sets Hero choice to char clicked  
        }
    })

    initGame()
})