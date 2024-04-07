const ArticleCard = (props) => {
    const {onclick} = props; 

    return(
        <div className="space-y-4 cursor-pointer mx-auto border-solid shadow-2xl rounded-[15px] m-5 p-5 w-[100%] border-1 mb-[5%] hover:bg-[#eeeeee] ease-in-out duration-300" onClick={onclick}>
            <p className="mb-4 text-sm">Nov 10, 2024</p>
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">What is Consistency ?</h2>
            </div>
            <div className="flex justify-between mr-[10%] font-normal text-[15px]">
                <p className="">
                    Consistency is a fundamental aspect of achieving success in any endeavor. Whether it's mastering a skill, building a business, or maintaining healthy habits, the power of consistency cannot be overstated. It is the steady and persistent effort applied over time that leads to remarkable results.
                </p>
            </div>
            <div className="flex flex-col items-end">
                <p className="text-sm font-semibold">Published By:</p>
                <p className="text-sm">Mr. Dean</p>
            </div>
        </div>
    )
}

export default ArticleCard;