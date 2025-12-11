# Appointment Booking System

A modern web application for managing appointments, built with Next.js and MongoDB.

## Features

- **Book Appointments** - Easy-to-use booking form
- **View Appointments** - List and manage all appointments
- **RESTful API** - Complete CRUD operations for appointments
- **Responsive Design** - Works on all devices

## Tech Stack

- **Framework:** Next.js 15.5
- **Database:** MongoDB with Mongoose
- **Styling:** Tailwind CSS
- **UI Components:** React Icons, Lucide React
- **HTTP Client:** Axios

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB database

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd mldweb
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env.local` file in the root directory

```env
MONGODB_URI=your_mongodb_connection_string
```

4. Run the development server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```text
src/
├── app/
│   ├── about/          # About page
│   ├── Appointement/   # View appointments
│   ├── book/           # Booking form
│   ├── components/     # Reusable components
│   ├── api/            # API routes
│   ├── lib/            # Database configuration
│   └── models/         # Mongoose models
└── models/             # Additional models
```

## API Endpoints

- `GET /api/appointment` - Get all appointments
- `POST /api/appointment` - Create new appointment
- `GET /api/appointment/[id]` - Get appointment by ID
- `PUT /api/appointment/[id]` - Update appointment
- `DELETE /api/appointment/[id]` - Delete appointment

## License

This project is private and not licensed for public use.
