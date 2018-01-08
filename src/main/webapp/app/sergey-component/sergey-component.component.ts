import {Component, OnInit} from '@angular/core';
import {Article} from "../shared/model/article.model";


@Component({
    selector: 'jhi-sergey-component',
    templateUrl: './sergey-component.component.html',
    styles: []
})
export class SergeyComponentComponent implements OnInit {

    public articles : Article[];

    constructor() {
        this.articles = new Array<Article>();
    }

    ngOnInit() {
    }

    addArticle(title: HTMLInputElement, link: HTMLInputElement) {
        console.log(`Adding article: ${title.value} and link: ${link.value}`);
        console.log(`Articles: ` + this.articles);
        this.articles.push(new Article(title.value, link.value, 0));
        return false;
    }

    sorted() : Article[]{
        return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
}
