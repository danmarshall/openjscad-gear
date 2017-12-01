const gear = require('./gear');

const params = {
    'numTeeth': 10,
    'circularPitch': 5,
    'pressureAngle': 20,
    'clearance': 0,
    'thickness': 5,
    'centerholeradius': 2
};

const test = gear(params);

console.log(test.toCompactBinary());
