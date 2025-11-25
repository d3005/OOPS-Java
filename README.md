# OOPS - Fullstack Application

A modern fullstack application built with React and FastAPI, featuring MongoDB integration and a comprehensive UI component library.

## Architecture

- **Frontend**: React 19 with TypeScript, TailwindCSS, and Radix UI components
- **Backend**: FastAPI with MongoDB (Motor ODM)
- **Database**: MongoDB
- **Styling**: TailwindCSS with shadcn/ui components

## Project Structure

```
oops/
├── frontend/          # React frontend application
│   ├── src/          # Source code
│   ├── public/       # Static assets
│   └── package.json  # Dependencies and scripts
├── backend/          # FastAPI backend
│   ├── server.py     # Main application
│   ├── requirements.txt
│   └── .env          # Environment variables
├── api/              # API documentation
└── tests/            # Test files
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Python (v3.8 or higher)
- MongoDB instance

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload
```

The backend API will be available at `http://localhost:8000`

### Environment Configuration

Backend requires a `.env` file with:
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=oops_database
```

## Features

- Modern React components with TypeScript
- Responsive design with TailwindCSS
- FastAPI with async MongoDB operations
- CORS enabled for development
- Comprehensive UI component library
- Form handling with React Hook Form
- Theme support (dark/light modes)

## Available Scripts

### Frontend
- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests

### Backend
- `uvicorn server:app --reload` - Start development server
- `uvicorn server:app --host 0.0.0.0 --port 8000` - Production server

## API Endpoints

- `GET /api/status` - Health check endpoint
- Additional endpoints defined in `backend/server.py`

## Technologies Used

### Frontend
- React 19
- TypeScript
- TailwindCSS
- Radix UI
- React Router
- React Hook Form
- Axios

### Backend
- FastAPI
- Motor (MongoDB async driver)
- Pydantic
- Uvicorn

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
