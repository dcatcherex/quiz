const DashboardLayout = ({
    children
}:{children:React.ReactNode}) => {
  return (
    <main className="h-full min-h-screen bg-[#F5F5FA] dark:bg-slate-900 bg-bluetop bg-no-repeat bg-[center_top_-4rem] ">
        <div className='mx-auto max-w-screen-xl h-full w-full p-4 '>
            {children}
        </div>
           </main>
  )
}

export default DashboardLayout