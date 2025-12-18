
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Added explicit interfaces to fix 'Property state/props does not exist' and 'children missing' errors
interface ErrorBoundaryProps {
  children?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// Changed to use explicit interfaces for better TypeScript inference
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    // Fix: Correctly initialize state within the constructor
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Critical System Error:", error, errorInfo);
  }

  render() {
    // Fix: Access state safely with proper typing
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-900 text-white p-10 text-center">
          <h1 className="text-6xl font-black mb-4">SYSTEM CRASH DETECTED</h1>
          <p className="text-xl mb-8">A critical error occurred. Please refresh the page or clear your cache.</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-8 py-4 bg-white text-red-900 font-bold rounded-lg hover:bg-gray-200"
          >
            REFRESH PAGE
          </button>
        </div>
      );
    }
    // Fix: Access props safely with proper typing
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      {/* Fix: ErrorBoundary now accepts children implicitly via optional prop type */}
      <ErrorBoundary>
        <HashRouter>
          <App />
        </HashRouter>
      </ErrorBoundary>
    </React.StrictMode>
  );
}
