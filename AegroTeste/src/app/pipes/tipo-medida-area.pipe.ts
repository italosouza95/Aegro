import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoMedidaArea'
})
export class TipoMedidaAreaPipe implements PipeTransform {

  transform(medida: string): string {
    if (medida === 'hectares') {
      return '(ha)';
    } else if (medida === 'alqueires') {
      return '(aql)';
    } else if (medida === 'acres') {
      return '(ac)';
    }
    else {
      return null;
    }
  }

}
