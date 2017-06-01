(function() {

    var teamoneButton = document.querySelector("#teamone-shoot");
    var teamtwoButton = document.querySelector("#teamtwo-shoot");
    var teamOneNumshots = document.querySelector("#teamone-numshots");
    var teamOneHits = document.querySelector("#teamone-numhits");
    var teamTwoButton = document.querySelector("#teamtwo-shoot");
    var teamTwoNumshots = document.querySelector("#teamtwo-numshots");
    var teamTwoHits = document.querySelector("#teamtwo-numhits");
    var resetButton = document.querySelector("#reset");
    var resetCount = document.querySelector("#num-resets");

    teamoneButton.addEventListener("click", function() {
      console.log("one clicked");

      var newTeamOneNumshots = parseInt(teamOneNumshots.innerHTML) + 1;
      teamOneNumshots.innerHTML = newTeamOneNumshots;

      if (newTeamOneNumshots >= 0) {
        var randomNumber = Math.random() >= 0.5;
        if (randomNumber == 1) {
          var newTeamOneHits = parseInt(teamOneHits.innerHTML) + 1;
          teamOneHits.innerHTML = newTeamOneHits;
        }
      }

    })

      teamTwoButton.addEventListener("click", function() {
        console.log("two clicked");

        var newTeamTwoNumshots = parseInt(teamTwoNumshots.innerHTML) + 1;
        teamTwoNumshots.innerHTML = newTeamTwoNumshots;

        if (newTeamTwoNumshots >= 0) {
          var randomNumber = Math.random() >= 0.5;
          if (randomNumber == 1) {
            var newTeamTwoHits = parseInt(teamTwoHits.innerHTML) + 1;
            teamTwoHits.innerHTML = newTeamTwoHits;
          }
        }

      }) //closes team two button hits


      resetButton.addEventListener("click", function() {
        console.log("reset clicked");

        var newResetCount = parseInt(resetCount.innerHTML) + 1;
        resetCount.innerHTML = newResetCount;

        var resetTeamOneNumshots = parseInt(teamOneNumshots.innerHTML) * 0;
        teamOneNumshots.innerHTML = resetTeamOneNumshots;

        var resetTeamOneHits = parseInt(teamOneHits.innerHTML) * 0;
        teamOneHits.innerHTML = resetTeamOneHits;

        var resetTeamTwoNumshots = parseInt(teamTwoNumshots.innerHTML) * 0;
        teamTwoNumshots.innerHTML = resetTeamTwoNumshots;

        var resetTeamTwoHits = parseInt(teamTwoHits.innerHTML) * 0;
        teamTwoHits.innerHTML = resetTeamTwoHits;


      })

      //closes reset


    })();
