export class ClientCustomError extends Error{
  constructor(public status: number, message: string) {
    super(message);
  }
}
