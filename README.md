# Text Response Validation Engine

This project is a NestJS-based backend service for validating and processing SMS text responses, designed for health-related communication workflows (such as symptom monitoring and consent collection). It integrates with Twilio to send and receive SMS messages, supports multiple languages, and uses configurable message templates for flexible response validation.

## Features

- **Twilio Integration:** Sends and receives SMS messages using the Twilio API.
- **Message Templates:** Validates incoming messages against predefined templates in English and Spanish.
- **Language Detection:** Automatically detects the language of incoming messages.
- **Webhook Endpoint:** Handles incoming SMS via a `/sms/webhook` POST endpoint.
- **Message Logging:** Stores and prints received messages for auditing and debugging.
- **Configurable:** Uses environment variables for Twilio credentials and service configuration.
- **Customizable Message Patterns:** Easily add or modify validation templates for new workflows.
- **Multi-language Support:** Expandable to additional languages beyond English and Spanish.
- **Parallel Processing:** Handles multiple incoming messages concurrently for scalability.
- **Enhanced Error Handling:** Provides detailed error responses and logging for failed validations or Twilio errors.
- **Audit Trail:** Maintains a persistent log of all processed messages for compliance and review.
- **Test Coverage:** Includes end-to-end and unit tests for core validation and Twilio integration logic.
- **Extensible Architecture:** Modular design allows for easy integration with other messaging platforms or health data systems.

## Project Structure

- `src/`
  - `main.ts` — Application entry point.
  - `app.module.ts` — Main NestJS module.
  - `app.controller.ts` — Handles SMS webhook and message endpoints.
  - `app.service.ts` — Business logic for message validation and Twilio integration.
  - `utils/message-patterns.ts` — Message templates and pattern matching utilities.
  - `utils/language-detector.ts` — Language detection utilities.
  - `middleware/` — Custom middleware for logging and error handling.
- `test/` — End-to-end and unit tests.

## Endpoints

- `POST /sms/webhook` — Receives and processes incoming SMS messages.
- `GET /sms/messages` — Returns a list of received messages.
- `GET /sms/print` — Returns a formatted string of all received messages.
- `GET /health` — Health check endpoint for monitoring service status.

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

4. **Run tests:**
   ```sh
   npm run test
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
