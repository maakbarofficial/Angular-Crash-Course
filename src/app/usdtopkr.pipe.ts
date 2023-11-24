import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdtopkr'
})
export class UsdtopkrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
