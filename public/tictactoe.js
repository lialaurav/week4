var spots = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var turn = 1;

function insert(id) {
	if (turn == 1) {
		if (spots[id] != "X" && spots[id] != "O") {
			document.getElementById(id).innerHTML = "X";
			spots[id] = "X";
			turn = 2;
			if (checkAll("X") == 1) {
				alert("Player 1 has won!");
				turn = 0;
			}
		} else {
			alert("This spot is already taken!");
		}
	} else if (turn == 2) {
		if (spots[id] != "X" && spots[id] != "O") {
			document.getElementById(id).innerHTML = "O";
			spots[id] = "O";
			turn = 1;
			if (checkAll("O") == 1) {
				alert("Player 2 has won!");
				turn = 0;
			}
		} else {
			alert("This spot is already taken!");
		}
	}
}

window.insert = insert;

function checkWinning(char, a, b, c, d, e) {
  if (spots[a] == char && spots[b] == char && spots[c] == char && spots[d] == char && spots[e] == char) {
    return true;
  } return false;
}

function checkAll(char) {
  if (checkWinning(char, 0, 1, 2, 3, 4) == true) {
    return 1;
  } else if (checkWinning(char, 0, 5, 10, 15, 20) == true) {
    return 1;
  } else if (checkWinning(char, 0, 6, 12, 18, 24) == true) {
    return 1;
  } else if (checkWinning(char, 1, 6, 11, 16, 21) == true) {
    return 1;
  } else if (checkWinning(char, 2, 7, 12, 17, 22) == true) {
    return 1;
  } else if (checkWinning(char, 3, 8, 13, 18, 23) == true) {
    return 1;
  } else if (checkWinning(char, 4, 9, 14, 19, 24) == true) {
    return 1;
  } else if (checkWinning(char, 4, 8, 12, 16, 20) == true) {
    return 1;
  } else if (checkWinning(char, 5, 6, 7, 8, 9) == true) {
    return 1;
  } else if (checkWinning(char, 10, 11, 12, 13, 14) == true) {
    return 1;
  } else if (checkWinning(char, 15, 16, 17, 18, 19) == true) {
    return 1;
  } else if (checkWinning(char, 20, 21, 22, 23, 24) == true) {
    return 1;
  } else {
    return 0;
  }
}
