"use client"
import React, {useState} from 'react';
import {auth} from "@/utils/auth";
import {Button, Select, SelectItem, Textarea} from "@nextui-org/react";
import categories from "@/data/categories";
import {Input} from "@nextui-org/input";

function Page() {
    function submitText()
    {
        
    }

    const [wordCount, setWordCount] = useState(0);
    const [text, setText] = useState("")
    const [category, setCategory] = useState("")
    return (
        <div className="flex flex-col md:flex-row gap-2 w-full p-1">
            {/*Editor*/}
            <div className="md:basis-2/3 p-2 rounded-md bg-primary/20 h-[88vh]">
                <div className="border-2 border-slate-700 h-full rounded-md p-2">
                    <Textarea variant="underlined"/>
                </div>
            </div>

            {/*Options*/}
            <div className="md:basis-1/3 p-2 rounded-md bg-slate-900 h-[88vh] flex flex-col justify-between">
                <div className="flex flex-col w-full gap-2">
                    <Select
                        variant="flat"
                        color="primary"
                        items={categories}
                        label="Choose Category"
                        value={category}
                        onChange={(v) => {setCategory(v.target.value)}}
                        className=""
                    >
                        {(categoryy) => <SelectItem key={categoryy.name}>{categoryy.name}</SelectItem>}
                    </Select>

                    <Input
                        label="Blog title"
                        variant="bordered"
                        classNames={{inputWrapper : "border-primary"}}
                        color="primary"
                        name="title"
                        required={true}
                    />

                    <Input
                        label="Enter comma seperated Tags"
                        variant="bordered"
                        classNames={{inputWrapper : "border-primary"}}
                        color="primary"
                        name="tags"
                        required={true}
                    />
                </div>

                <Button className="text-black bg-primary rounded-md w-full py-6 font-semibold">Upload</Button>
            </div>
        </div>
    );
}

export default Page;