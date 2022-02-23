import { WindowDimensions } from "../window-dimensions/window-dimensions";

export interface DailyRecordInterface {
  elementDimensionsValue: WindowDimensions;
  elementColor: string;
  data: RecordDataInterface;
}

export interface RecordDataInterface {
  id: string;
  title: string;
  projectId: string;
}
