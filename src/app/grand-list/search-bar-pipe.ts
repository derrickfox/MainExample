import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import { List } from './list.model';

@Pipe({ name: 'searchString' })
export class SearchStringPipe implements PipeTransform {
    transform(lists: List[], searchText: string): any[] {
        let filteredString;
        var regex = new RegExp(searchText);
        let foundItems = [];
        // let filteredString = /one/.exec(searchText);
        console.log('regex', regex);
        lists.forEach(list => {
            // console.log('list.name', list.name);
            filteredString = regex.exec(list.name);
            if(filteredString){
                console.log('FOUND! -> filteredString: ', filteredString);
                foundItems.push(list);
            }
        });
        return foundItems;
        // return lists;
    }
}
