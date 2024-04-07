import GloButton from "../../components/GloButton";
import ArticleCard from "../../components/adminComponents/ArticleCard";
import { useNavigate } from 'react-router-dom';

const ArticleCardDisplay = () => {
    const navigator = useNavigate();

    return(
        <div className=" w-[90%] h-[90%] px-[20px] rounded-[25px] border-2 border-[#dfdfdf] flex flex-col items-center ">
            <div className=" w-[100%] h-[18%] mb-[25px]">
                <div className="h-auto w-[100%] flex flex-row justify-end">
                    <GloButton name= "Publish New Article" onclick = {() => {navigator('/ArticleForm')}}/>
                </div>
                <p className="font-semibold text-[30px] ml-[20px]">Published Articles</p>
            </div>
            <div className="h-[500px] w-[100%] flex flex-col px-[10px] py-[5px] overflow-scroll ">
                <ArticleCard onclick = {() => {navigator('/ArticleView')}}/>
                <ArticleCard onclick = {() => {navigator('/ArticleView')}}/>
                <ArticleCard onclick = {() => {navigator('/ArticleView')}}/>
                <ArticleCard onclick = {() => {navigator('/ArticleView')}}/>
                <ArticleCard onclick = {() => {navigator('/ArticleView')}}/>
                <ArticleCard onclick = {() => {navigator('/ArticleView')}}/>
            </div>
        </div>
    )
} 
export default ArticleCardDisplay;