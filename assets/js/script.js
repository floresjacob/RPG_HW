$(document).ready(function () {
  var chosenHero
  var chosenEnemy
  var isHeroChosen
  var isEnemyChosen
  var isHeroAlive = true
  var isEnemyAlive = true
  var myHeroThing
  var myEnemyThing
  var attackButton = $("<a class='btn btn-default' role=' button + ' id='attack'>Attack</a>")

  function initGame () {
    isHeroChosen = false
    isEnemyChosen = false
	// generate characters
    for (i = 0; i < charArr.length; i++) {
      var num = 12 / charArr.length
      var charThing = $("<div class='col-md-" + num + " myChar' value = '" + i + "'><img src='" + charArr[i].image + "'/><div class='panel-footer'>" + charArr[i].name + '</div></div>')
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
        var charThing = $("<div class='col-md-" + num + " myChar' value = '" + i + "'><img src='" + charArr[i].image + "'/><div class='panel-footer'>" + charArr[i].name + '</div></div>')
        $('#characters').append(charThing)
    }
    isEnemyChosen = false
    isEnemyAlive = true
  }

  function refreshFight () {
    myHeroThing = $("<div id=" + chosenHero.name + " align='center'><img src='" + chosenHero.image + "'/><p>Name: " + chosenHero.name + "</p><h6>HP: </h6> <span id='hp'> " + chosenHero.hp + "</span> </div>")
    $('#hero_fight').html(myHeroThing)
    if (isEnemyAlive){
        myEnemyThing = $("<div id =" + chosenEnemy.name + " align='center'><img src='" + chosenEnemy.image + "'/><p>Name: " + chosenEnemy.name + "</p><h6>HP: </h6><span id = 'hp'> " + chosenEnemy.hp + " </span></div>")
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
      myHeroThing = $('<div id=' + chosenHero.name + " align='center'><img src='" + chosenHero.image + "'/><p>Name: " + chosenHero.name + "</p><h6>HP: </h6> <span id='hp'> " + chosenHero.hp + '</span> </div>')
      $('#hero_fight').append(myHeroThing)
    } else if (isEnemyChosen === false && chosenHero.name !== charArr[$(this).attr('value')].name) {
      chosenEnemy = charArr[$(this).attr('value')]
      console.log(chosenEnemy)
      $(this).addClass('fader')
      isEnemyChosen = true // sets Enemy choice to char clicked
      myEnemyThing = $('<div id =' + chosenEnemy.name + " align='center'><img src='" + chosenEnemy.image + "'/><p>Name: " + chosenEnemy.name + "</p><h6>HP: </h6><span id = 'hp'> " + chosenEnemy.hp + ' </span></div>')
      $('#enemy_fight').html(myEnemyThing)
      $('#info').append(attackButton)
      
    }
  })

  $(document).on('click', '#attack', function () {
    var heroHit = Math.floor(Math.random() * chosenHero.strength)
    console.log('hero: ' + heroHit)
    var enemyHit = Math.floor(Math.random() * chosenEnemy.strength)
    console.log('enemy: ' + enemyHit)
    chosenEnemy.hp -= heroHit
    chosenHero.hp -= enemyHit
    refreshFight()  
    if (chosenHero.hp > chosenEnemy.hp && chosenEnemy.hp < 0){
        isEnemyAlive = false
        console.log(charArr)
        chosenHero.hp = 50
        refreshFight()
        nextEnemy()

    } else if ( chosenHero.hp < chosenEnemy.hp && chosenHero.hp < 0) {
        alert("you lose")
        location.reload()
    }
  })

  initGame()
})
