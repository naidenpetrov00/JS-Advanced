function workerModifier(worker) {
    const requiredWaterAmount = 0.10;

    if (worker.dizziness) {
        const waterToIntake = requiredWaterAmount * worker.weight * worker.experience;
        worker.levelOfHydrated += waterToIntake;
        worker.dizziness = false;

        return worker;
    }

    return worker;
};

console.log(workerModifier(
    {
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    }
));
console.log(workerModifier(
    {
        weight: 120,
        experience: 20,
        levelOfHydrated: 200,
        dizziness: true
    }
));
console.log(workerModifier(
    {
        weight: 95,
        experience: 3,
        levelOfHydrated: 0,
        dizziness: false
    }
));

