import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';

class MotorcyclesService {
  public createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcyclesODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getAll() {
    const cyclesODM = new MotorcyclesODM();
    const getCycles = await cyclesODM.getAll();
    return getCycles.map((e) => this.createMotorcycleDomain(e));
  }

  public async getById(id: string) {
    const cyclesODM = new MotorcyclesODM();
    const cyclesById = await cyclesODM.getById(id);
    return this.createMotorcycleDomain(cyclesById);
  }
}

export default MotorcyclesService;