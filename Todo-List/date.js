exports.get_date = function() {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);
}

exports.get_day = function() {
    let today = new Date();
    let options = {
        weekday: "long"
    }

    return today.toLocaleDateString("en-US", options);
}