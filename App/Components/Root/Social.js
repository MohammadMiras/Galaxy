const Social = ({ className, children }) => {
    return <>
        <div className="p-1 rounded-md bg-white text-Template-color5 transition-all duration-700 opacity-0 group-hover:opacity-100 hover:text-white hover:bg-Template-color5">
            {children}
        </div>
    </>
}
export default Social