let BugRoad = (rock, bug) => {
    
    let road = [rock];
    let left, right;
    let freeRock;
    
    for (let i = bug; i > 0; i--) {
        freeRock = road.shift();
        freeRock--;
        
        right = Math.ceil (freeRock/2);
        left = Math.floor (freeRock/2);
        
        road.push(right,left);
    }

    return {right,left};
}


console.log('x:8 y: 1',BugRoad(8, 1));
console.log('x:8 y: 2',BugRoad(8, 2));
console.log('x:8 y: 3',BugRoad(8, 3));
console.log('x:45000 y: 16',BugRoad(45000, 16));
