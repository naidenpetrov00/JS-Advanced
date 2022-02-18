function personalBMI() {
    const underweightStatus = 'underweight';
    const normalStatus = 'normal';
    const overweightStatus = 'overweight';
    const obeseStatus = 'obese';
    const obeseWarning = 'admission required'
    const centimetersInMeter = 100;
    const underweightStatusValue = 18.5;
    const normalStatusValue = 25;
    const overweightStatusValue = 30;

    const name = arguments[0];
    const age = Number(arguments[1]);
    const weight = Number(arguments[2]);
    const height = Number(arguments[3]);

    const bmiValue = (function () {
        const heightInMeters = height / centimetersInMeter;

        bmi = weight / Math.pow(heightInMeters, 2)
        return Math.round(bmi);
    })();

    const statusValue = (function () {
        if (bmiValue < underweightStatusValue) {
            return underweightStatus;
        }
        else if (bmiValue >= underweightStatusValue && bmiValue < normalStatusValue) {
            return normalStatus;
        }
        else if (bmiValue >= normalStatusValue && bmiValue < overweightStatusValue) {
            return overweightStatus;
        }
        else if (bmiValue >= overweightStatusValue) {
            return obeseStatus;
        }
    })();

    const patientChart = {
        name: arguments[0],
        personalInfo: {
            age: Math.round(age),
            weight: Math.round(weight),
            height: Math.round(height)
        },
        BMI: bmiValue,
        status: statusValue
    };

    if (patientChart.status === obeseStatus) {
        patientChart.recommendation = obeseWarning;
    }

    return patientChart;
}

personalBMI('Peter', 29, 75, 182);
personalBMI('Honey Boo Boo', 9, 57, 137);