export class Repo {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public webImg_url: string,
    public mobileImg_url: string,
    public git_url: string,
    public tags: string[]
  ) {}
}
