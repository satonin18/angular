var Phone = /** @class */ (function () {
    function Phone(n) {
        this.name = n;
    }
    return Phone;
}());
export { Phone };
export function Call(phone) {
    console.log("Make a call by", phone.name);
}
// export {Device, Phone, Call /*as Devices*/}; //обрати внимание на окончание -s
