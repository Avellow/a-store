import { FallbackProps } from 'react-error-boundary';
import Page from '../../page-components/Page';

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps): JSX.Element => {
  return (
    <Page role="alert">
      <p>Что-то пошло не так:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Попробовать снова</button>
    </Page>
  );
};
