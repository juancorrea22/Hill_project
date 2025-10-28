import { ILogroService, ILogroRepository, Logro } from "types/LogrosTypes";

export class LogroService implements ILogroService {
    private logroRepository: ILogroRepository;
    constructor(logroRepository: ILogroRepository) {
        this.logroRepository = logroRepository;
        }
    
        async createLogro(logro: Logro): Promise<Logro> {
            return this.logroRepository.create(logro);
        }
    
        async findLogros(): Promise<Logro[]> {
            return this.logroRepository.find();
        }
    
        async findLogroById(id: string): Promise<Logro | null> {
            return this.logroRepository.findById(id);
        }
    
        async updateLogro(id: string, logro: Partial<Logro>): Promise<Logro | null> {
            return this.logroRepository.update(id, logro);
        }
    
        async deleteLogro(id: string): Promise<boolean> {
            return this.logroRepository.delete(id);
        }
}