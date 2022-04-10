
export class Project {

    constructor(
        public id: number,
        public image: string,
        public logo: string,
        public title: string,
        public description: string,
        public tags: string[],
    ) { }
}
