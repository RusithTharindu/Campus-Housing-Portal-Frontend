const ArticleForm = () => {
    return (
        <div className="h-[80vh] w-[100%] flex justify-center items-center">
            <div className="w-[900px] h-auto border-2 border-[#dfdfdf] rounded-[25px] px-[10px] py-[20px]">
                <form action="">
                    <div className="flex flex-col items-center">
                        <div className="w-[100%]">
                            <p className="mt-[15px] m-[20px] font-semibold text-[30px]">Article Form</p>
                        </div>
                        <input type="text" placeholder="Title" className="w-[90%] h-[50px] m-[20px] p-[10px] border-2 border-[#dfdfdf] rounded-[10px]" />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Content" className="w-[90%] h-[300px] m-[20px] p-[10px] border-2 border-[#dfdfdf] rounded-[10px]"></textarea>
                        <button type="submit" className="w-[40%] h-[50px] p-[10px] border-2 text-[#2D2D2D] border-[#dfdfdf] rounded-[10px] bg-[#24CC2B] hover:opacity-55 active:bg-[#2D2D2D] active:text-[#24CC2B] acti ease-in-out duration-300">Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ArticleForm;