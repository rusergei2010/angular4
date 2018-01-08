export class Article {
    public title: string;
    public link: string;
    public votes: number;

    constructor (title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }


    domain() : string{
        try{
            const domainAndPath : string = this.link.split(`//`)[1];
            console.log(`domain:` + domainAndPath);
            return domainAndPath.split(`/`)[0];
        } catch (err) {
            return null;
        }
    }

}
