import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdpkr',
})
export class UsdpkrPipe implements PipeTransform {
  transform(value: number, ...args: number[]): unknown {
    const [x] = args;
    return value * x;
  }
}
