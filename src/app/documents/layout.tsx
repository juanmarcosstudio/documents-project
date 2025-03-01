interface DocumentsLayoutProps {
    children: React.ReactNode;
}

const DocumentsLayout = ({children}: DocumentsLayoutProps) => {
    return ( 
        <div className="flex flex-col gap-y-4">
            <div className="w-full bg-red-500">Document navbar styling</div>
            {children}
        </div>
     );
}
 
export default DocumentsLayout;