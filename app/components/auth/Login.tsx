import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger, DialogHeader } from '../ui/dialog'
import { Button } from '../ui/Button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Icon } from '../ui/Icon'


export function LoginModal() {
    const [isOpen, setIsOpen] = useState(false)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // Handle login logic here
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <button
                    aria-label="sign-in-button"
                    className="cursor-pointer"
                >
                    <Icon name="user" size={30} />
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] w-[90%] rounded-xl">
                <DialogHeader>
                    <DialogTitle>Login</DialogTitle>
                    <DialogDescription>
                        Enter your credentials to access your account.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="Enter your password" required />
                    </div>
                    <Button type="submit" className="w-full">
                        Log in
                    </Button>
                </form>
                <div className="mt-4 text-center text-sm">
                    <a href="/" className="text-primary hover:underline">
                        Forgot password?
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    )
}

