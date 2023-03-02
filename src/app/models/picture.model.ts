export class Picture{
    id!: number;
    image!: Blob;
    date!: Date;

    constructor(image: Blob){
        this.image = image;
        this.date = new Date();
    }
}