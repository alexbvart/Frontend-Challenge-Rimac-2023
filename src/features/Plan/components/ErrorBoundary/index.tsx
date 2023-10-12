import React from 'react'

interface renderOnErrorParams {
    hasError: boolean;
    error?: Error; 
    resetError: () => void
}

interface ErrorBoundaryProps {
    children: React.ReactNode;
    renderOnError?: ({ hasError, error, resetError} : renderOnErrorParams ) => React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {

    state = { hasError: false, error: undefined }

    // constructor(props) {
    //   super(props);
    //   this.state = { hasError: false };
    // }
  
    static getDerivedStateFromError() {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    resetError = ()=>{
        this.setState({ hasError: false });
    }
    componentDidCatch(error:Error) {
      // You can also log the error to an error reporting service
      this.setState({error})
    }
  
    render() {

        //Render default
        if (this.state.hasError && !this.props.renderOnError ) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }
        
        //Render customizing
      if (this.state.hasError && this.props.renderOnError ) {
        return this.props.renderOnError({
            error: this.state.error,
            hasError: this.state.hasError,
            resetError: this.resetError

        })
      }
  
      return this.props.children; 
    }
  }