# Alcovia Offline-First Sync System

## Overview

Alcovia Offline-First Sync System is a distributed study productivity platform designed to function reliably in intermittent connectivity environments. The application enables students to track focus sessions, manage syllabus progress, synchronize data across multiple devices, and ensure consistent state convergence through conflict resolution mechanisms.

The project demonstrates key distributed systems concepts including offline-first architecture, event-driven synchronization, eventual consistency, Lamport clock-based conflict resolution, idempotent processing, and exactly-once notification delivery.

---

## Key Features

### Focus Session Management

* Complete and fail focus sessions
* Automatic reward generation
* Event creation for every study activity
* Session history tracking

### Syllabus Progress Tracking

* Subject management
* Chapter management
* Task status tracking
* Progress computation

### Offline-First Architecture

* Local event queue
* Event replay mechanism
* Synchronization after reconnection
* Resilient offline operation

### Multi-Device Synchronization

* Device A simulation
* Device B simulation
* Event propagation
* State convergence

### Conflict Resolution

* Lamport clock implementation
* Deterministic conflict handling
* Delete vs update prioritization
* Eventual consistency guarantees

### Exactly-Once Notification Processing

* Duplicate delivery prevention
* Event deduplication
* Webhook-compatible architecture
* Idempotent notification handling

### Developer Dashboard

* Device monitoring
* Queue visualization
* Synchronization controls
* Notification testing

---

## Architecture

### Frontend

* React Native (Expo)
* TypeScript
* Zustand State Management
* Axios

### Backend

* Node.js
* Express.js
* TypeScript

### Core System Components

* Event Store
* Offline Queue
* Synchronization Engine
* Conflict Resolver
* Reward Engine
* Notification Service
* Device Simulator

---

## Distributed Systems Concepts Implemented

### Offline-First Design

All user actions generate events that can be stored and processed independently of network availability.

### Event Sourcing Principles

Important domain actions are represented as events that can be synchronized and replayed.

### Lamport Clocks

Lamport clocks are used to establish deterministic ordering of concurrent updates originating from multiple devices.

### Eventual Consistency

Independent devices converge to the same state after synchronization.

### Idempotency

Repeated event delivery does not produce duplicate outcomes.

### Exactly-Once Processing

Notification delivery is protected against duplicate execution through event tracking and deduplication.

---

## Project Structure

```text
alcovia-offline-sync/

├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── features/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── store/
│   │   └── sync/
│
├── server/
│   ├── src/
│   │   ├── events/
│   │   ├── models/
│   │   ├── notifications/
│   │   ├── queue/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── storage/
│   │   └── sync/
│
├── shared/
│
├── README.md
└── DECISIONS.md
```

---

## Running The Project

### Backend

```bash
cd server
npm install
npm run dev
```

Server:

```text
http://localhost:5000
```

---

### Frontend

```bash
cd client
npm install
npm run web
```

Frontend:

```text
http://localhost:808x
```

---

## Demonstration Workflow

1. Launch frontend and backend.
2. Open Developer Panel.
3. Toggle a device offline.
4. Generate focus session events.
5. Update syllabus tasks.
6. Observe queue growth.
7. Reconnect devices.
8. Execute synchronization.
9. Observe state convergence.
10. Trigger notifications.
11. Verify duplicate prevention.

---

## Future Enhancements

* Persistent database integration
* Authentication and authorization
* Push notifications
* Real-time device synchronization
* Production deployment
* Native mobile deployment
* Live workflow orchestration using n8n

---

## Author

Samarth J Bharadwaj

Electronics and Telecommunication Engineering

Focus Areas:

* Software Engineering
* Distributed Systems
* Machine Learning
* Cloud Computing
