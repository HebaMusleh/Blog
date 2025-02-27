import {fetchCategory} from "../../services/api";
import { QUERIES } from "../../enums/queies";
import { useQuery } from "@tanstack/react-query";

export const useCategory =()=>{
    return useQuery({
        queryKey:[QUERIES.CATEGORY],
        queryFn:()=>fetchCategory()
    })
}