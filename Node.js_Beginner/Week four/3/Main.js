
import {Vehicle} from './Vehicle.js';
import {Bicycle} from './Bicycle.js';

const car = new Vehicle(); 
const bike = new Bicycle(); 
console.log(`color of the car  ${car.color},Wheels of the car ${car.wheels}`);
car.honkHorn(); 
console.log(`color of the Bike ${bike.color},Wheels of the bike ${bike.wheels}`);
bike.honkHorn(); 
