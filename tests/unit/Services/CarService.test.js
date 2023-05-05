// import { expect } from 'chai';
// import sinon from 'sinon';
// import CarsService from '../../../src/Services/CarsService';
// import ICar from '../../../src/Interfaces/ICar';
// import CarsODM from '../../../src/Models/CarsODM';

// describe('CarsService', () => {
//   afterEach(() => {
//     sinon.restore();
//   });
  
//   const carSample: ICar = {
//     id: '613eabf1c5e5d5f5e6633f3e',
//     model: 'Tesla Model S',
//     year: 2021,
//     color: 'Red',
//     status: true,
//     buyValue: 80000,
//     doorsQty: 4,
//     seatsQty: 5,
//   };
//   it('create a new car', async () => {
//     sinon.stub(CarsODM.prototype, 'create').resolves(carSample);
//     const carService = new CarsService();
//     const result = await carService.create(carSample);
  
//     expect(result).to.deep.equal(carSample);
//   });
  
//   it('get all cars', async () => {
//     sinon.stub(CarsODM.prototype, 'getAll').resolves([carSample]);
  
//     const carService = new CarsService();
//     const result = await carService.getAllCars();
  
//     expect(result).to.deep.equal([carSample]);
//   });
// });