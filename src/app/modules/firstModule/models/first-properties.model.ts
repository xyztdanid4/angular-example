import { IFirstProperties } from '../interefaces/first-properties';

export class FirstProperties implements IFirstProperties {
  readonly id: number;
  readonly color: string;

  constructor(iFirstProperties: IFirstProperties) {
    this.id = iFirstProperties.id;
    this.color = iFirstProperties.color;
  }
}
