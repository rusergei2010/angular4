import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Article} from "../shared/model/article.model";

@Component({
    selector: 'jhi-article',
    templateUrl: './article.component.html',
    styles: []
})
export class ArticleComponent implements OnInit {
    @HostBinding(`attr.class`) cssClass = `row`;
    @Input() public article: Article;

    constructor() {

    }

    voteDown() {
        this.article.votes--;
        return false;
    }


    voteUp() {
        this.article.votes++;
        return false;
    }


    ngOnInit() {
    }
}
