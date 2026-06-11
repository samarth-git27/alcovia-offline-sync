export class DeliveryStore {

  private static delivered =
    new Set<string>();

  static hasDelivered(
    id: string
  ) {

    return this.delivered.has(
      id
    );
  }

  static markDelivered(
    id: string
  ) {

    this.delivered.add(id);
  }

  static getCount() {

    return this.delivered.size;
  }
}