import {PipeTransform, Pipe} from '@angular/core';
import { pipe } from '../../../node_modules/rxjs';
@Pipe({
     name: 'sortpipe' //name of pipe   
})
export class SortPipe implements PipeTransform{
    transform(value:any[],args:string):any{
        if(args === 'ascending'){
            return value.sort();
        }
        else if(args === 'descending'){
            return value.sort().reverse();
        }
    }
}