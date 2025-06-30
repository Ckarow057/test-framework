# Text Response Validation Engine

This project is a NestJS-based backend service for validating and processing SMS text responses, designed for health-related communication workflows (such as symptom monitoring and consent collection). It integrates with Twilio to send and receive SMS messages, supports multiple languages, and uses configurable message templates for flexible response validation.

## Features

- **Twilio Integration:** Sends and receives SMS messages using the Twilio API.
- **Message Templates:** Validates incoming messages against predefined templates in English and Spanish.
- **Language Detection:** Automatically detects the language of incoming messages.
- **Webhook Endpoint:** Handles incoming SMS via a `/sms/webhook` POST endpoint.
- **Message Logging:** Stores and prints received messages for auditing and debugging.
- **Configurable:** Uses environment variables for Twilio credentials and service configuration.

## Project Structure

- `src/`
  - `main.ts` — Application entry point.
  - `app.module.ts` — Main NestJS module.
  - `app.controller.ts` — Handles SMS webhook and message endpoints.
  - `app.service.ts` — Business logic for message validation and Twilio integration.
  - `utils/message-patterns.ts` — Message templates and pattern matching utilities.
- `test/` — End-to-end tests. ~ WIP

## Endpoints

- `POST /sms/webhook` — Receives and processes incoming SMS messages.
- `GET /sms/messages` — Returns a list of received messages.
- `GET /sms/print` — Returns a formatted string of all received messages.

## Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Configure environment variables:**
   Create a `.env` file with the following:
   ```
   TWILIO_ACCOUNT_SID=your_account_sid
   TWILIO_AUTH_TOKEN=your_auth_token
   TWILIO_MESSAGING_SERVICE_SID=your_messaging_service_sid
   PORT=3000
   ```

3. **Run the application:**
   ```sh
   npm run start
   ```
   OR 
   ```sh
   npm run start:dev
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
