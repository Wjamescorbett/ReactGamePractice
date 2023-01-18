# ReactGamePractice
Making a game using react for practice.

<!-- npm start (start react app) -->

<!-- open gitBash
    cd into correct file
    git add .
    git commit -m "Update notes and information here"
    git push
    git status -->


<!-- Attack Direct -->
Player directly attacks one enemy with damage ranging from playerAttackLow to playerAttackHigh after calculating armor. Min dmg 1 
Player takes damage from all enemies. Enemies' attack is between enemies' low and high attack accounting for player armor. Min damage from each enemy is one.

<!-- Attack Dodge -->
 Player attacks enemy with highest health with playerAttackHigh if the ransomizer is greater than the enemies' speed. Enemy Armor calculated.

 Enemy Attacks player ignoring armor with their random low/high attack.