"use client";
import React, { useEffect, useState } from 'react';
import { Button, Select, SelectItem, Textarea } from "@nextui-org/react";
import { categories, publish, PublishData } from "@/app/actions/publish"; // Import the server actions
import { Input } from "@nextui-org/input";

interface Category {
  cname: string;
  wordCount: number;
}

function Page() {
  const [wordCount, setWordCount] = useState(0);
  const [text, setText] = useState("");
  const [category, setCategory] = useState('');
  const [categoryOptions, setCategoryOptions] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await categories();
      if (result.success) {
        const cats = result.cats;
        if(cats)
        setCategoryOptions(result.cats);
        else
        alert("Error fetching categories");
      } else {
        alert("Error fetching categories");
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const textAreaWordCount = text.split(' ').filter(word => word).length;

    if (textAreaWordCount <= wordCount) {
      const formData = new FormData(event.currentTarget);
      const data: PublishData = {
        cname: category,
        title: formData.get('title') as string,
        tags: formData.get('tags') as string,
        content: text,
        wordcount: wordCount
      };

      // Log data to check if category is set
      console.log('Form Data:', data);

      // Call the server action
      const result = await publish(data);
      if (result.success) {
        alert("Published successfully!");
      } else {
        alert("Error publishing");
      }
    } else {
      alert(`Word count exceeds the limit of ${wordCount} words.`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-2 w-full p-1">
        {/* Editor */}
        <div className="md:basis-2/3 p-2 rounded-md bg-primary/20 h-[88vh]">
          <div className="border-2 border-slate-700 h-full rounded-md p-2">
            <Textarea
              variant="underlined"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>

        {/* Options */}
        <div className="md:basis-1/3 p-2 rounded-md bg-slate-900 h-[88vh] flex flex-col justify-between">
          <div className="flex flex-col w-full gap-2">
            <Select
              variant="flat"
              color="primary"
              items={categoryOptions}
              label="Choose Category"
              value={category}
              onChange={(e) => {
                const selectedCategory = categoryOptions.find((cat: Category) => cat.cname === e.target.value);
                setWordCount(selectedCategory?.wordCount || 0);
                setCategory(e.target.value);
              }}
             
            >
              {(category: Category) => (
                <SelectItem key={category.cname} value={category.cname}>
                  {category.cname}
                </SelectItem>
              )}
            </Select>

            <Input
              label="Blog title"
              variant="bordered"
              classNames={{ inputWrapper: "border-primary", input: "primary" }} // Add custom class for text color
              color="primary"
              name="title"
               className=" text-white"
              required={true}
            />

            <Input
              label="Enter comma separated Tags"
              variant="bordered"
              classNames={{ inputWrapper: "border-primary" }}
              color="primary"
              name="tags"
               className=" text-white"
              required={true}
            />
          </div>

          <Button type="submit" className="text-black bg-primary rounded-md w-full py-6 font-semibold">
            Upload
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Page;
