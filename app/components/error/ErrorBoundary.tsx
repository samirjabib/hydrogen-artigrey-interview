import { isRouteErrorResponse, Link, useRouteError } from '@remix-run/react';
import { Button } from '../ui/Button';
import { Image } from '@shopify/hydrogen';

export function ErrorBoundary() {
    const error = useRouteError();
    let errorMessage = 'Unknown error';
    let errorStatus = 500;

    if (isRouteErrorResponse(error)) {
        errorMessage = error?.data?.message ?? error.data;
        errorStatus = error.status;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
            <div className="max-w-md w-full">
                <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="404 Not Found Meme"
                    width={300}
                    height={300}
                    className="mb-8 rounded-lg shadow-lg"
                />
            </div>
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-xl mb-4">This page hasn't been created yet.</p>
            <p className="text-lg mb-8">Please continue exploring our test site!</p>
            <Button >
                <Link to="/">
                    Back to Test Site
                </Link>
            </Button>
        </main>
    );
}

