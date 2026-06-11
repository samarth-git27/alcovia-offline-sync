export class LamportClock {
  private current = 0;

  tick(): number {
    this.current += 1;
    return this.current;
  }

  update(
    remoteTimestamp: number
  ): number {
    this.current =
      Math.max(
        this.current,
        remoteTimestamp
      ) + 1;

    return this.current;
  }

  getValue(): number {
    return this.current;
  }
}