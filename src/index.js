module.exports.slugger = (...arg) => {
    return arg.join(" ").split(" ").join("-");
}