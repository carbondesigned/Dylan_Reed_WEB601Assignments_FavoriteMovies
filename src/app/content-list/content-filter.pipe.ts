import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Pipe({
  name: 'contentFilter',
})
export class ContentFilterPipe implements PipeTransform {
  // movies have a type property, get the type from the array and separate them into their own array
  transform(contentList: Content[]) {
    // get the content.type and create a big array of all the types
    const types = contentList.map((content) => content.type);
    // create a new array with only unique types
    const uniqueTypes = types.filter(
      (type, index) => types.indexOf(type) === index
    );
    // create an array of arrays, each array is a type
    const typeArrays = uniqueTypes.map((type) =>
      contentList.filter((content) => content.type === type)
    );
    // create an array of objects, each object has a type and an array of content
    const typeObjects = typeArrays.map((typeArray) => {
      return {
        type: typeArray[0].type,
        content: typeArray,
      };
    });
    return typeObjects;
  }
}
