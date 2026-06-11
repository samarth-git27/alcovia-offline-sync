export class WebhookService {

  static async send(
    payload: any
  ) {

    console.log(
      "WEBHOOK SENT",
      payload
    );

    return {
      success: true
    };
  }
}