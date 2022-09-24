import { IFirst } from "../interefaces/first.interface";
import { FirstProperties } from "./first-properties.model";
import { IFirstProperties } from '../interefaces/first-properties';

export class First implements IFirst {
  readonly firstPrimitive: number;
  readonly firstProperties: Array<FirstProperties>;

  constructor(iFirst: IFirst) {
    this.firstPrimitive = iFirst.firstPrimitive;
    this.firstProperties = iFirst.firstProperties.map((iFirstProperties: IFirstProperties) => new FirstProperties(iFirstProperties))
  }
}
