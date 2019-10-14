type ReduxAction<Payload> = {
  type: string;
  readonly payload?: Payload;
};

export default ReduxAction;
