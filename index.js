// =============================================
// Callbacks implementations
function carMaintenance(cb) {
    console.log("I leave my car at 9 in the workshop");
    setTimeout(function () {
        console.log("Car is fixed...");
        cb("Your car is ready");
    }, 2000);
}
function pickDress(callback) {
    setTimeout(function () {
        console.log("Your Dress is ready");
        callback("pick your dress");
    }, 100);
}
function attendEvent(cb) {
    console.log("Now you can attend the event");
    cb("Now you can go home");
}
function BacktoHome(text) {
    console.log(text);
    console.log("reached home");
}
carMaintenance(function (carMessage) {
    pickDress(function (dressMessage) {
        attendEvent(function (eventMessage) {
            BacktoHome(eventMessage);
        });
    });
});
