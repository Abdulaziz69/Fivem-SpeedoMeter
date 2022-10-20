document.addEventListener("DOMContentLoaded", () => {
    let startVehicleSpeedUpdate = false;
    window.addEventListener('message', (event) => {
        if (event.data.showSpeedoMoter !== undefined) {
            if (event.data.showSpeedoMoter == true) {
                drawSpeedoMeter();
            } else {
                unDrawSpeedoMeter();
                startVehicleSpeedUpdate = false;
            }
        }
        if (event.data.VehicleCurrentSpeed !== undefined) {
            setSpeedoMeterValue(event.data.VehicleCurrentSpeed);
            setSpeedoMoterGearValue(event.data.VehicleCurrentGear);
        }

        if (event.data.VehicleCurrentSteeringAngleLuaInPercentage != undefined) {
            setSpeedoMoterVehicleSteeringAngle(event.data.VehicleCurrentSteeringAngleLuaInPercentage)
        }
    })

    function drawSpeedoMeter() {
        unfade(document.getElementsByClassName("perspective__speedomoter__wraper")[0])
    }

    function unDrawSpeedoMeter() {
        fade(document.getElementsByClassName("perspective__speedomoter__wraper")[0])
    }
    
    function setSpeedoMeterValue(value) {
        const speedoMeterValue = document.getElementsByClassName("perspective__Vehicle__speed_value__num")[0];
        speedoMeterValue.innerHTML = String(value).padStart(3, '00');
    }

    function setSpeedoMoterGearValue(value) {
        const speedoMeterGearContent = document.getElementById("Gear__element__tag");
        speedoMeterGearContent.innerHTML = value;
    }

    function setSpeedoMoterVehicleSteeringAngle(value) {
        const perspectiveSpeedoMoterVehicleImage = document.getElementsByClassName("perspective__Vehicle__image")[0];
        perspectiveSpeedoMoterVehicleImage.style.transform = `translateX(${value}px)`;
    }


    function unfade(element) {
        var op = 0.1;
        element.style.display = 'flex';
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 7);
    }
    function fade(element) {
        var op = 1;
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 10);
    }
});