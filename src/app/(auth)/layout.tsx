interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({children}: AuthLayoutProps) => {
    return ( 
        <div className="flex flex-col gap-y-4">
            <div className="w-full bg-red-500">Auth Layout navbar</div>
            {children}
        </div>
     );
}
 
export default AuthLayout;