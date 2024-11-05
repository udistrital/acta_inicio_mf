import { Injectable } from '@angular/core';
import { RequestManager } from '../managers/requestManager';

@Injectable({
    providedIn: 'root',
})
export class GestionContractualCrudService {

    constructor(private requestManager: RequestManager) {
        this.requestManager.setPath('GESTION_CONTRACTUAL_CRUD_SERVICE');
    }

    // Método para obtener información de un contrato por ID
    getContratoPorId(contratoId: number) {
        const endpoint = `contrato/${contratoId}`;
        return this.get(endpoint);
    }

    // Método para obtener todos los contratos activos
    getContratosActivos() {
        const endpoint = `contratos/?query=activo:true`;
        return this.get(endpoint);
    }

    // Método genérico GET
    get(endpoint: string) {
        this.requestManager.setPath('GESTION_CONTRACTUAL_CRUD_SERVICE');
        return this.requestManager.get(endpoint);
    }

    // Método genérico POST
    post(endpoint: string, element: any) {
        this.requestManager.setPath('GESTION_CONTRACTUAL_CRUD_SERVICE');
        return this.requestManager.post(endpoint, element);
    }

    // Método genérico PUT
    put(endpoint: string, element: { Id: any; }) {
        this.requestManager.setPath('GESTION_CONTRACTUAL_CRUD_SERVICE');
        return this.requestManager.put(endpoint, element);
    }

    // Método genérico DELETE
    delete(endpoint: string, element: { Id: any; }) {
        this.requestManager.setPath('GESTION_CONTRACTUAL_CRUD_SERVICE');
        return this.requestManager.delete(endpoint, element.Id);
    }
}
