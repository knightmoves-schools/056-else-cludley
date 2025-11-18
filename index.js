function calculateAward(points) {
    if (points > 99) {
        return "First Place";
    } else if (points > 49) {
        return "Second Place";
    } else {
        return "Participation Award";
    }
}
