import { Link } from '@remix-run/react';
import { Button } from '~/components/ui/Button';

export function PageDevelopment({ title }: { title?: string }) {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-10">
            <h1 className="text-4xl font-bold mb-4 text-center">
                {title ? `${title} Page` : 'Page Not Found'}
            </h1>
            <p className="text-xl mb-4 text-center">This page is under development.</p>
            <p className="text-lg mb-8 text-center">Please come back later to check the progress.</p>
            <Button >
                <Link to="/">Back to Home</Link>
            </Button>
        </main>
    );
}