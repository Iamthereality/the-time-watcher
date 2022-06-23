import { IWindowDimensions } from '@core/interfaces/application/window-dimensions/window-dimensions.interface';

export interface IDailyRecord {
  elementDimensionsValue: IWindowDimensions;
  elementColor: string;
  data: IRecordData;
}

export interface IRecordData {
  id: string;
  title: string;
  projectId: string;
}
