import React, { ErrorInfo } from 'react';

import {
  WrapperElement,
  HeaderTextElement,
  DetailButtonWrapperElement,
  DetailButtonTextElement,
  ErrorTextWrapperElement,
  ErrorTextElement
} from './ErrorBoundaryElements';

interface Props {
  children: React.ReactNode;
}

interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
  showDetails: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    error: null,
    errorInfo: null,
    showDetails: false
  };

  toggleDetails = (): void => {
    this.setState(state => {
      return {
        showDetails: !state.showDetails
      };
    });
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    const { errorInfo, showDetails, error } = this.state;
    const { children } = this.props;
    if (errorInfo) {
      const buttonText = showDetails ? 'Hide details' : 'Show details';

      return (
        <WrapperElement>
          <HeaderTextElement>
            Something went wrong, please restart your application.
          </HeaderTextElement>
          <DetailButtonWrapperElement onPress={this.toggleDetails}>
            <DetailButtonTextElement>{buttonText}</DetailButtonTextElement>
          </DetailButtonWrapperElement>
          {showDetails && (
            <ErrorTextWrapperElement>
              <ErrorTextElement>{error && error.toString()}</ErrorTextElement>
              <ErrorTextElement>
                {errorInfo && errorInfo.componentStack}
              </ErrorTextElement>
            </ErrorTextWrapperElement>
          )}
        </WrapperElement>
      );
    }
    return children;
  }
}
export default ErrorBoundary;
