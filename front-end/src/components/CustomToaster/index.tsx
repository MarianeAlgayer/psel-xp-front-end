import { Toaster } from 'react-hot-toast';

export function CustomToaster() {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder
      toastOptions={{
        style: {
          background: '#1E1F1F',
          color: '#FFFFFF',
        },
      }}
    />
  );
}
