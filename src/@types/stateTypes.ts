export enum StateStatusList {
  PENDING = "pending",
  SUCCESS = "success",
  ERROR = "error",
  IDLE = "",
}

export interface IState {
  status: StateStatusList;
  error: string;
}
