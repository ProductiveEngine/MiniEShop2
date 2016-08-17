export class ProductType {
    productTypeId: number;
    name: string;
    serverName: string;
    editMode: boolean;
    createdDate: Date;
    modifiedDate: Date;

    /*
    constructor(
        productTypeId: number,
        name: string,
        serverName: string,
        editMode: boolean,
        createdDate: string,
        modifiedDate?: string
    ){
        this.productTypeId = productTypeId;
        this.name = name;
        this.serverName = serverName;
        this.editMode = editMode;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
    }
    */
}