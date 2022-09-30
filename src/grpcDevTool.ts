export const interceptors = [
  {
    interceptUnary(next: any, method: any, input: any, options: any): any {
      const call = next(method, input, options);
      const methodFullPath = `${options.baseUrl}/${method.service.typeName}/${method.name}`;
      const methodType = 'unary';

      call.then(
        (finishedUnaryCall: { request: any; response: any }) => {
          window.postMessage(
            {
              type: '__GRPCWEB_DEVTOOLS__',
              method: methodFullPath,
              methodType,
              request: finishedUnaryCall.request,
              response: finishedUnaryCall.response,
            },
            '*'
          );

          return finishedUnaryCall;
        },
        (error: any) => {
          window.postMessage(
            {
              type: '__GRPCWEB_DEVTOOLS__',
              method: methodFullPath,
              methodType,
              request: call.request,
              error: {
                ...error,
                message: error.message,
              },
            },
            '*'
          );
        }
      );

      return call;
    },
    interceptServerStreaming(next: any, method: any, input: any, options: any): any {
      const call = next(method, input, options);
      const methodFullPath = `${options.baseUrl}/${method.service.typeName}/${method.name}`;
      const methodType = 'server_streaming';

      window.postMessage({
        type: '__GRPCWEB_DEVTOOLS__',
        method: methodFullPath,
        methodType,
        request: call.request,
      });

      call.responses.onMessage((message: any) => {
        window.postMessage(
          {
            type: '__GRPCWEB_DEVTOOLS__',
            method: methodFullPath,
            methodType,
            response: message,
          },
          '*'
        );
      });

      call.responses.onError((error: { message: any }) => {
        window.postMessage(
          {
            type: '__GRPCWEB_DEVTOOLS__',
            method: methodFullPath,
            methodType,
            error: {
              ...error,
              message: error.message,
            },
          },
          '*'
        );
      });

      call.responses.onComplete(() => {
        window.postMessage(
          {
            type: '__GRPCWEB_DEVTOOLS__',
            method: methodFullPath,
            methodType,
            response: 'EOF',
          },
          '*'
        );
      });

      return call;
    },
  },
];
