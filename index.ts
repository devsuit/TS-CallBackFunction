// =============================================
// Callbacks implementations

function carMaintenance(cb: (text: string) => void) {
    console.log("I leave my car at 9 in the workshop");

    setTimeout(() => {
        console.log("Car is fixed...");
        cb("Your car is ready");
    }, 2000);
}

function pickDress(callback: (text: string) => void) {
    setTimeout(() => {
        console.log("Your Dress is ready");
        callback("pick your dress");
    }, 100);
}

function attendEvent(cb: (text: string) => void) {
    console.log("Now you can attend the event");
    cb("Now you can go home");
}

function BacktoHome(text: string) {
    console.log(text);
    console.log("reached home");
}


carMaintenance((carMessage) => {
    pickDress((dressMessage) => {
        attendEvent((eventMessage) => {
            BacktoHome(eventMessage);
        });
    });
});
