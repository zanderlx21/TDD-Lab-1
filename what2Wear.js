
function what2Wear (eventType, temperature) {
    let eventStyle;
    let tempStyle;

    if (eventType === "casual") {
        eventStyle = "something comfy";
    } else if (eventType === "semi-formal") {
        eventStyle = "a polo"; 
    } else if (eventType === "formal") {
        eventStyle = "a suit";
    }

    if (temperature < 54) {
        tempStyle = "a coat"
    } else if (temperature >= 54 && temperature <= 70) {
        tempStyle = "a jacket"
    } else { 
        tempStyle = "no jacket"
    }
    return `Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear ${eventStyle} and ${tempStyle}`;
};

module.exports = what2Wear;

