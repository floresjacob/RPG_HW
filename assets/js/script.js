$(document).ready(function () {
  var chosenHero
  var chosenEnemy
  var isHeroChosen
  var isEnemyChosen
  var isEnemyAlive = true
  var myHeroThing
  var myEnemyThing
  var attackButton = $("<a class='btn btn-default' role=' button + ' id='attack'>Attack</a>")
  var strengthPlus = 2

  	// name, hp, strength, image
      var charArr = [{
        name: 'Inception',
        hp: 10,
        strength: 2,
        counter: 1,
        image: './assets/images/incept.jpg'
      }, {
        name: 'Politician',
        hp: 20,
        strength: 3,
        counter: 2,
        image: './assets/images/pol.jpg'
      }, {
        name: 'Book',
        hp: 30,
        strength: 4,
        counter: 3,
        image: './assets/images/book.jpg'
      }, {
        name: 'Brain',
        hp: 40,
        strength: 5,
        counter: 4,
        image: './assets/images/brain.jpg'
      }]  

  function initGame () {
    isHeroChosen = false
    isEnemyChosen = false
	// generate characters
    for (i = 0; i < charArr.length; i++) {
      var num = 12 / charArr.length
      var charThing = $("<div class='col-md-" + num + " myChar' value = '" + i + "'><img src='" + charArr[i].image + "'/><div class='panel-footer'><ul id='stats'><li>" + charArr[i].name + "</li><li> Health: " + charArr[i].hp + "</li><li> Strength: " + charArr[i].strength + "</li><li> Counter: " + charArr[i].counter + "</li></ul></div></div>")
      $('#characters').append(charThing)
    }
  }

  function nextEnemy () {
    $("#info").html("")
    alert(chosenEnemy.name + " has been defeated. Choose a new Enemy.")
    $("#enemy_fight").html("")
    charArr.splice($.inArray(chosenEnemy, charArr), 1) //remove enemy
    $('#characters').html("")
    for (i = 0; i < charArr.length; i++) {
        var num = 12 / charArr.length
        var charThing = $("<div class='col-md-" + num + " myChar' value = '" + i + "'><img src='" + charArr[i].image + "'/><div class='panel-footer'><ul id='stats'><li>" + charArr[i].name + "</li><li> Health: " + charArr[i].hp + "</li><li> Strength: " + charArr[i].strength + "</li><li> Counter: " + charArr[i].counter + "</li></ul></div></div>")
        $('#characters').append(charThing)
      }
    isEnemyChosen = false
    isEnemyAlive = true

    if (charArr.length === 0){
        alert("you win")
    }

  }

  function refreshFight () {
    myHeroThing = $("<div id=" + chosenHero.name + " align='center'><img src='" + chosenHero.image + "'/><div class='panel-footer'><ul id='stats'><li>" + chosenHero.name + "</li><li> Health: " + chosenHero.hp + "</li><li> Strength: " + chosenHero.strength + "</li></ul></div></div>")
    $('#hero_fight').html(myHeroThing)
    if (isEnemyAlive){
        myEnemyThing = $("<div id=" + chosenEnemy.name + " align='center'><img src='" + chosenEnemy.image + "'/><div class='panel-footer'><ul id='stats'><li>" + chosenEnemy.name + "</li><li> Health: " + chosenEnemy.hp + "</li><li> Strength: " + chosenEnemy.counter + "</li></ul></div></div>")
        $('#enemy_fight').html(myEnemyThing)
    }
}

  $(document).on('click', '.myChar', function () {
    if (isHeroChosen === false) {
      chosenHero = charArr[$(this).attr('value')]
      console.log(chosenHero)
      $(this).addClass('fader')
      isHeroChosen = true // sets Hero choice to char clicked
      charArr.splice($.inArray(chosenHero, charArr), 1) //remove enemy
      myHeroThing = $("<div id=" + chosenHero.name + " align='center'><img src='" + chosenHero.image + "'/><div class='panel-footer'><ul id='stats'><li>" + chosenHero.name + "</li><li> Health: " + chosenHero.hp + "</li><li> Strength: " + chosenHero.strength + "</li></ul></div></div>")
      $('#hero_fight').append(myHeroThing)
    } else if (isEnemyChosen === false && chosenHero.name !== charArr[$(this).attr('value')].name) {
      chosenEnemy = charArr[$(this).attr('value')]
      console.log(chosenEnemy)
      $(this).addClass('fader')
      isEnemyChosen = true // sets Enemy choice to char clicked
      myEnemyThing = $("<div id=" + chosenEnemy.name + " align='center'><img src='" + chosenEnemy.image + "'/><div class='panel-footer'><ul id='stats'><li>" + chosenEnemy.name + "</li><li> Health: " + chosenEnemy.hp + "</li><li> Strength: " + chosenEnemy.counter + "</li></ul></div></div>")
      $('#enemy_fight').html(myEnemyThing)
      $('#info').append(attackButton)
    }
  })

  $(document).on('click', '#attack', function () {
    var heroHit = Math.floor(Math.random() * chosenHero.strength)
    var enemyHit = Math.floor(Math.random() * chosenEnemy.counter)
    
    chosenEnemy.hp -= heroHit
    chosenHero.hp -= enemyHit
    refreshFight()  
    if (chosenHero.hp > chosenEnemy.hp && chosenEnemy.hp <= 0){
        isEnemyAlive = false
        chosenHero.strength *= strengthPlus
        strengthPlus++
        refreshFight()
        nextEnemy()

    } else if ( chosenHero.hp < chosenEnemy.hp && chosenHero.hp < 0) {
        alert("you lose")
        location.reload()
    }
  })



  initGame()
})
