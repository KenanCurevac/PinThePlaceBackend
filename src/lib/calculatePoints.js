export const getPoints = (distance) => {
    let points = 0;
    if (distance === null) {
        points = 0;
    }
    else if (distance < 500) {
        points = 5;
    }
    else if (distance < 1000) {
        points = 4;
    }
    else if (distance < 2000) {
        points = 3;
    }
    else if (distance < 3000) {
        points = 2;
    }
    else if (distance < 4000) {
        points = 1;
    }
    return points;
};
//# sourceMappingURL=calculatePoints.js.map