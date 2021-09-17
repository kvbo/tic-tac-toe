elms = ['a0','a1', 'a2', 'b0', 'b1', 'b3', 'c0', 'c1', 'c2', 'text', 'score_p1', 'score_p2']
elms.forEach(
    (i) => {
        window[i] = document.querySelector('#' + i);
    }
)

//variables
let tileColor = '#96c496'
let tileColorWin = '#ff5757'
let player_turn = 1;
let plays = 0;
let state = ""
let player_1_score = 0
let player_2_score = 0

score_p1.innerHTML = player_1_score
score_p2.innerHTML = player_2_score

text.innerHTML = "player one"

function clicked(e){
    'use strict';

    let d = player_turn
    
    if(e.innerHTML == "" && state != "won"){
        if(player_turn == 1){
            e.innerHTML = 'x';
            player_turn++
            text.innerHTML = "player two"
        }
        else{
            e.innerHTML = 'o';
            player_turn--
            text.innerHTML = "player one"
        }

        if(check()){
            state = "won"
            text.innerHTML = "player one"
            if(d == 1){
                text.innerHTML = "player one wins"
                player_1_score++
                score_p1.innerHTML = player_1_score
            }
            else{
                text.innerHTML = "player two wins "
                player_2_score++
                score_p2.innerHTML = player_2_score
            }
        }    
        else{
            plays++
            if(plays >=9){
                reset()
            }
        }
    }
}

function check(){
    if((a0.innerHTML == a1.innerHTML && a1.innerHTML == a2.innerHTML && a1.innerHTML != "")){
        a0.style.backgroundColor = tileColorWin
        a1.style.backgroundColor = tileColorWin
        a2.style.backgroundColor = tileColorWin
        return true
    }
    else if((b0.innerHTML == b1.innerHTML && b1.innerHTML == b2.innerHTML && b1.innerHTML != "")){
        b0.style.backgroundColor = tileColorWin
        b1.style.backgroundColor = tileColorWin
        b2.style.backgroundColor = tileColorWin
        return true
    }
    else if((c0.innerHTML == c1.innerHTML && c1.innerHTML == c2.innerHTML && c1.innerHTML != "")){
        c0.style.backgroundColor = tileColorWin
        c1.style.backgroundColor = tileColorWin
        c2.style.backgroundColor = tileColorWin
        return true
    }
    //vertical
    else if((a0.innerHTML == b0.innerHTML && b0.innerHTML == c0.innerHTML && b0.innerHTML != "")){
        a0.style.backgroundColor = tileColorWin
        b0.style.backgroundColor = tileColorWin
        c0.style.backgroundColor = tileColorWin
        return true
    }
    else if((a1.innerHTML == b1.innerHTML && b1.innerHTML == c1.innerHTML && b1.innerHTML != "")){
        a1.style.backgroundColor = tileColorWin
        b1.style.backgroundColor = tileColorWin
        c1.style.backgroundColor = tileColorWin
        return true
    }
    else if((a2.innerHTML == b2.innerHTML && b2.innerHTML == c2.innerHTML && b2.innerHTML != "")){
        a2.style.backgroundColor = tileColorWin
        b2.style.backgroundColor = tileColorWin
        c2.style.backgroundColor = tileColorWin
        return true
    }
    //diagonal
    else if((a0.innerHTML == b1.innerHTML && b1.innerHTML == c2.innerHTML && b1.innerHTML != "")){
        a0.style.backgroundColor = tileColorWin
        b1.style.backgroundColor = tileColorWin
        c2.style.backgroundColor = tileColorWin
        return true
    }
    else if((a2.innerHTML == b1.innerHTML && b1.innerHTML == c0.innerHTML && b1.innerHTML != "")){
        a2.style.backgroundColor = tileColorWin
        b1.style.backgroundColor = tileColorWin
        c0.style.backgroundColor = tileColorWin
        return true
    }
    else false;
}

function reset(){
    a0.style.backgroundColor = tileColor
    a0.innerHTML = ""

    a1.style.backgroundColor = tileColor
    a1.innerHTML = ""

    a2.style.backgroundColor = tileColor
    a2.innerHTML = ""

    b0.style.backgroundColor = tileColor
    b0.innerHTML = ""

    b1.style.backgroundColor = tileColor
    b1.innerHTML = ""

    b2.style.backgroundColor = tileColor
    b2.innerHTML = ""

    c0.style.backgroundColor = tileColor
    c0.innerHTML = ""

    c1.style.backgroundColor = tileColor
    c1.innerHTML = ""

    c2.style.backgroundColor = tileColor
    c2.innerHTML = ""

    if(player_turn == 1){
        text.innerHTML = "player one"
    }
    else{
        text.innerHTML = "player two"
    }

    plays = 0
    state = ""
}