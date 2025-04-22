"use client"
import { SyntheticEvent, useState } from 'react';
import { useSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SignInPage() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();
  
  const [emailAddress, setEmailAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [view, setView] = useState('email'); // 'email' or 'password'

  // Handle email form submission
  const handleEmailSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (!isLoaded) return;

    try {
      setLoading(true);
      setError('');
      
      // Start the sign-in process using email
      await signIn.create({
        identifier: emailAddress,
        strategy: "email_code",
      });
      
      // Change view to code verification
      setView('code');
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Handle Google OAuth
  const handleGoogleSignIn = async () => {
    if (!isLoaded) return;
    
    try {
      setLoading(true);
      setError('');

      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/dashboard",
      });
      
    } catch (err) {
      setError('Google sign in failed. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const [verificationCode, setVerificationCode] = useState('');
  
  // Handle verification code submission
  const handleVerificationSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (!isLoaded || !verificationCode) return;

    try {
      setLoading(true);
      setError('');
      
      const result = await signIn.attemptFirstFactor({
        strategy: "email_code",
        code: verificationCode,
      });
      
      if (result.status === "complete") {
        // Set the active session
        await setActive({ session: result.createdSessionId });
        router.push('/dashboard');
      }
    } catch (err) {
      setError('Invalid verification code. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Loading state
  if (!isLoaded) {
    return (
      <div className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto text-center py-20 px-5">
        <div className="w-8 h-8 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
      </div>
    );
  }

  // Code verification view
  if (view === 'code') {
    return (
      <div className="flex flex-col pt-[10em] items-center h-screen max-w-7xl mx-auto text-center py-20 px-5">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Check your email</h1>
            <p className="mt-2 text-gray-600">
              Weve sent a verification code to {emailAddress}
            </p>
          </div>
          
          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-100 rounded-md">
              {error}
            </div>
          )}
          
          <form className="mt-6 space-y-6" onSubmit={handleVerificationSubmit}>
            <div>
              <label htmlFor="code" className="block text-sm font-medium text-gray-700">
                Verification Code
              </label>
              <input
                id="code"
                name="code"
                type="text"
                required
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="block w-full px-3 py-2 mt-1 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter code"
              />
            </div>
            
            <div>
              <Button
                type="submit"
                disabled={loading}
                className="flex justify-center w-full px-4 py-2 text-sm cursor-pointer font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {loading ? 'Verifying...' : 'Verify'}
              </Button>
            </div>
          </form>
          
          <div className="text-sm text-center">
            <Button
              onClick={() => setView('email')}
              className="font-medium text-black cursor-pointer hover:text-blue-500"
              variant={'outline'}
            >
              Use a different email
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Email/password view
  return (
    <div className="flex flex-col items-center pt-[10em] h-screen max-w-7xl mx-auto text-center py-20 px-5">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg border">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
          <p className="mt-2 text-gray-600">Sign in to your account</p>
        </div>
        
        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-100 rounded-md">
            {error}
          </div>
        )}
        
        <div className="mt-6">
          <Button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="flex items-center justify-center cursor-pointer w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FcGoogle className="w-5 h-5 mr-2" />
            Continue with Google
          </Button>
        </div>
        
        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 text-gray-500 bg-white">Or continue with</span>
          </div>
        </div>
        
        <form className="mt-6 space-y-6" onSubmit={handleEmailSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MdEmail className="w-5 h-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>
          </div>
          
          <div>
            <Button
              type="submit"
              disabled={loading}
              className="flex justify-center w-full px-4 py-2 text-sm cursor-pointer font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {loading ? 'Sending...' : 'Continue with Email'}
            </Button>
          </div>
        </form>
        
        <div className="text-sm text-center">
          <span className="text-gray-500">Dont have an account?</span>{' '}
          <Link href="/sign-up" className="font-medium cursor-pointer text-black hover:text-blue-500">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}