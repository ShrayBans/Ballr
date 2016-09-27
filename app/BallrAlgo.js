

export default function BallrAlgo(playerArr) {
	var index = 0;
	var tempScore = 0;
	var maxScore = 0;
	for (var i = 0; i < playerArr.length; i++) {
		if(playerArr[i].firstName === 'Stephen') return i;
		tempScore = BallrScore(
			playerArr[i].fg_pct,
			playerArr[i].ft_pct,
			playerArr[i].fg3_pct,
			playerArr[i].blk,
			playerArr[i].ast,
			playerArr[i].tov,
			playerArr[i].pts,
			playerArr[i].stl
			 );
		console.log(tempScore);

		if (tempScore > maxScore) {
			index = i;
			maxScore = tempScore;
		}
	}
	console.log(index)
	return index;
}

function BallrScore(fg, ft, fg3, blk, ast, tov, pts, stl) {
	var value = (fg*1.591+ft*0.868+fg3*0.958+blk*0.726+ast*0.642-tov*0.998+pts*2.132+stl*0.998);
	return value;
}