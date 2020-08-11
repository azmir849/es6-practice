const person = {name:'Jack',age:17,job:'facebook',gfName:'ema', address :'Kochu khet', phone:'01555', friends:['tom','jom','kom','vom']};

const {phone,gfName} = person;

const complexObject = {
    name : 'abc',
    info:{
        address:'fdf',
        leader :"tiger"
    }
}
const{leader}=complexObject.info;



console.log(gfName,phone);
console.log(leader);