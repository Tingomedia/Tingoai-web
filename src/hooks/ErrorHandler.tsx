import React, { Component, ErrorInfo, ReactNode } from "react";

interface ErrorHandlerProps {
  children: ReactNode;
}

interface ErrorHandlerState {
  hasError: boolean;
  error?: Error;
}

class ErrorHandler extends Component<ErrorHandlerProps, ErrorHandlerState> {
  constructor(props: ErrorHandlerProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    // You can log the error to an external logging service here.
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
          <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
          <p className="mb-6">{this.state.error?.message || "An unexpected error occurred."}</p>
          <button
            onClick={this.handleRetry}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md"
          >
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorHandler;