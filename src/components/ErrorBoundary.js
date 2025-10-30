import React from "react";

/**
 * Error Boundary component to catch and handle React errors gracefully
 * @component
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error("Error caught by boundary:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h1 style={{ color: "#fff", marginBottom: "20px" }}>
            Something went wrong
          </h1>
          <p style={{ color: "#ccc", marginBottom: "20px" }}>
            We're sorry, but something unexpected happened. Please try refreshing the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "10px 20px",
              backgroundColor: "#6c63ff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Refresh Page
          </button>
          {process.env.NODE_ENV === "development" && this.state.errorInfo && (
            <details
              style={{
                marginTop: "20px",
                padding: "10px",
                backgroundColor: "#2a2a2a",
                borderRadius: "5px",
                maxWidth: "800px",
                width: "100%",
                textAlign: "left",
              }}
            >
              <summary style={{ color: "#fff", cursor: "pointer" }}>
                Error Details (Development Mode)
              </summary>
              <pre
                style={{
                  color: "#ff6b6b",
                  overflow: "auto",
                  marginTop: "10px",
                }}
              >
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

