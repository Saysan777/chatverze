import type { NextApiRequest, NextApiResponse } from "next";
import openai from "../../utils/chatGpt";

//*  NOTE: important The following code is to fetch the list of Models that openai provides us and define type for the react-select hook 
//*  ..react select hook takes array of objects so we are first type checking the objects and then the array 

type Option = {
    value: string,
    label: string
}

type Data ={
    modelOptions: Option[]
}

//* function(req,res) -> function (req:type, res:type) {}
export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const models = await openai.listModels().then((res)=> res.data.data);
    
    const modelOptions = models.map((model)=> ({
        value: model.id,
        label: model.id
    }));
    res.status(200).json({
        modelOptions
    })


}
