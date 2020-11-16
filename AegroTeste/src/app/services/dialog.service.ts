import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  fecharModalCadastroFazenda(message: string) {
    message = ''
    this.messageSource.next(message)
  }
  fecharModalEditarFazenda(message: string) {
    message = ''
    this.messageSource.next(message)
  }

}
