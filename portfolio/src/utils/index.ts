export const getRandomNumber = ( length: number, minLength?: number ) => {
    const val = Math.floor(Math.random() * length);
    if(minLength && val < minLength) {
        return ((minLength + val) < length)?(minLength + val):minLength;
    }
    return val;
}