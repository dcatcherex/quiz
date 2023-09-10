const ExamLayout = ({
    children
}:{children:React.ReactNode}) => {
  return (
    <main className="h-full bg-[#F5F5FA] bg-bluetop bg-no-repeat bg-[center_top_-4rem] overflow-auto">
        <div className='mx-auto max-w-screen-xl h-full w-full mt-10'>
            {children}
        </div>
           </main>
  )
}

export default ExamLayout