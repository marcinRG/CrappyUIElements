import { IFont } from '../../Interfaces/Data/Font';
import { IGetText } from '../../Interfaces/Data.Models/IGetText';
export declare class FontRenderer implements IGetText<IFont> {
    fontBoxClass: string;
    constructor(fontBoxClass: string);
    getText(elem: IFont): string;
}
