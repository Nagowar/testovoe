let beetleDistribution = (stone, beetle) => {
    let road = [stone];

    let leftRoad,rightRoad;

    let stoneEmpty;

    for(let i = beetle; i > 0; i--)
    {
        stoneEmpty = road.shift();
        stoneEmpty--;
        rightRoad = Math.floor(stoneEmpty/2);
        leftRoad = Math.ceil(stoneEmpty/2);
        road.push(leftRoad,rightRoad);
    }
    return {leftRoad,rightRoad};
}


console.log('x:8 y: 1',beetleDistribution(8, 1));