import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'multiplier'
})

export class MultiplerPipe implements PipeTransform  {
    transform(value: any,multiply : string) : number{
        return value * (parseFloat(multiply));
    }
}