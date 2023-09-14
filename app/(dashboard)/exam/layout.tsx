const ExamLayout = ({
    children
}:{children:React.ReactNode}) => {
  return (
    <main className="h-full bg-[#F5F5FA] dark:bg-slate-900 bg-bluetop bg-no-repeat bg-[center_top_-4rem]">
        <div className='mx-auto max-w-screen-xl h-full w-full '>
            {children}
        </div>
           </main>
  )
}

export default ExamLayout