import { DeliveryStore }
from "./delivery-store";

import { WebhookService }
from "./webhook.service";

export class NotificationService {

  static async notify(
    eventId: string,
    message: string
  ) {

    if (
      DeliveryStore.hasDelivered(
        eventId
      )
    ) {

      return {
        success: true,
        duplicate: true
      };
    }

    await WebhookService.send({

      eventId,

      message,

      timestamp:
        new Date()
          .toISOString()
    });

    DeliveryStore.markDelivered(
      eventId
    );

    return {
      success: true,
      duplicate: false
    };
  }
}