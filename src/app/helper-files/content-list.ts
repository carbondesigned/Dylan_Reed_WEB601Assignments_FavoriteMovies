import { Content } from "./content-interface";

export class ContentList {
  private contentList: Content[];
  constructor() {
    this.contentList = [];
  }
  get content() {
    return this.contentList;
  }
  add(content: Content) {
    this.contentList.push(content);
  }
  count() {
    return this.contentList.length;
  }
  get(index: number) {
    return this.contentList[index];
  }

  render(index: number) {
    const content = this.contentList[index];
    return `
      <div class="content">
        <h2>${content.title}</h2>
        <p>${content.description}</p>
        <p>${content.director}</p>
        <img src="${content.imgURL}" />
        <p>${content.type}</p>
      </div>
    `;
  }
}
