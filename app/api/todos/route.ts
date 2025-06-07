import { NextRequest, NextResponse } from "next/server";

export interface ToDo {
    id : number,
    title : string,
    completion : boolean
}

let todolist : ToDo[] = [
    {
        id : 1,
        title : "Brush",
        completion : false
    },
    {
        id : 2,
        title : "Bath",
        completion : false
    }
]


export async function GET() {
    return NextResponse.json(todolist)
}

export async function POST(nextRequest : NextRequest) {
    const todo = await nextRequest.json()
    const newToto = {
        id : todolist.length + 1,
        title : todo.title,
        completion : false
    }

    todolist.push(newToto)

    return new NextResponse(JSON.stringify(todo), {
        headers : {"Content-Type" : "application/json"},
        status : 201
    })
}

export async function PATCH(nextRequest : NextRequest){
    const data = await nextRequest.json()
    const {id, completion} = data;
    const todo = todolist.find((param) => param.id === id)
    if(todo){
        todo.completion = completion;
        return NextResponse.json(todo);
    }
    return NextResponse.json({error : "Todo not found"}, {status : 404})
}