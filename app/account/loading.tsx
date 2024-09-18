export default function Loading() {
    return (
      <div className="flex min-h-screen items-center justify-center p-6 bg-gray-100 animate-pulse">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          {/* Skeleton for the profile settings heading */}
          <div className="h-8 bg-gray-300 rounded w-1/3 mb-6"></div>
  
          {/* Skeleton for avatar */}
          <div className="flex justify-center mb-6">
            <div className="w-48 h-48 rounded-full bg-gray-300"></div>
          </div>
  
          {/* Skeleton for email input */}
          <div className="mb-4">
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="h-10 bg-gray-200 rounded w-full"></div>
          </div>
  
          {/* Skeleton for full name input */}
          <div className="mb-4">
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="h-10 bg-gray-200 rounded w-full"></div>
          </div>
  
          {/* Skeleton for update button */}
          <div className="h-10 bg-gray-400 rounded w-full mb-4"></div>
  
          {/* Skeleton for new password input */}
          <div className="mb-4">
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="h-10 bg-gray-200 rounded w-full"></div>
          </div>
  
          {/* Skeleton for confirm password input */}
          <div className="mb-4">
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="h-10 bg-gray-200 rounded w-full"></div>
          </div>
  
          {/* Skeleton for update password button */}
          <div className="h-10 bg-gray-400 rounded w-full mb-4"></div>
  
          {/* Skeleton for sign-out button */}
          <div className="h-10 bg-gray-400 rounded w-full mb-4"></div>
  
          {/* Skeleton for Go Back link */}
          <div className="h-4 bg-gray-300 rounded w-1/3 mx-auto"></div>
        </div>
      </div>
    );
  }
  