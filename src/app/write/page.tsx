'use client';
import { Button } from '@/components/ui/button';
import categories from '@/data/categories';
import { publish, PublishData } from '@/utils/actions/publish'; // Import the server actions
import { Input } from '@nextui-org/input';
import { Select, SelectItem } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface Category {
  cname: string;
  wordCount: number;
}

function Page() {
  const [wordCount, setWordCount] = useState(0);
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [categoryOptions, setCategoryOptions] = useState<Category[]>([]);

  useEffect(() => {
    setCategoryOptions(
      categories.map((category) => ({
        cname: category.name,
        wordCount: category.wordcount,
      }))
    );
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const textAreaWordCount = text.split(' ').filter((word) => word).length;

    if (textAreaWordCount <= wordCount) {
      const formData = new FormData(event.currentTarget);
      const data: PublishData = {
        cname: category,
        title: formData.get('title') as string,
        tags: formData.get('tags') as string,
        content: text,
        wordcount: wordCount,
      };

      // Log data to check if category is set
      console.log('Form Data:', data);

      // Call the server action
      const result = await publish(data);
      if (result.success) {
        alert('Published successfully!');
        setText('');
        setCategory('');
        setWordCount(0);
      } else {
        alert('Error publishing: Select category carefully');
      }
    } else {
      alert(`Word count exceeds the limit of ${wordCount} words.`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-full flex-col gap-4 px-5 md:flex-row">
        {/* Editor */}
        <div className="h-[75vh] rounded-md p-2 md:basis-2/3">
          <div className="h-full">
            <ReactQuill
              theme="snow"
              value={text}
              onChange={setText}
              className="h-full"
              modules={{
                toolbar: [
                  [{ header: '1' }, { header: '2' }, { font: [] }],
                  [{ size: [] }],
                  ['bold', 'italic', 'underline', 'strike'],
                  [{ list: 'ordered' }, { list: 'bullet' }],
                ],
              }}
              formats={[
                'header',
                'font',
                'size',
                'bold',
                'italic',
                'underline',
                'strike',
                'list',
                'bullet',
              ]}
            />
          </div>
        </div>

        {/* Options */}
        <div className="flex h-[80vh] flex-col justify-between rounded-md p-2 md:basis-1/3">
          <div className="flex w-full flex-col gap-4">
            <Select
              variant="flat"
              // color="primary"
              items={categoryOptions}
              label="Choose Category"
              className="tracking-tight transition-all ease-soft-spring"
              value={category}
              onChange={(e) => {
                const selectedCategory = categoryOptions.find(
                  (cat: Category) => cat.cname === e.target.value
                );
                setWordCount(selectedCategory?.wordCount || 0);
                setCategory(e.target.value);
              }}>
              {(category: Category) => (
                <SelectItem key={category.cname} value={category.cname}>
                  {category.cname}
                </SelectItem>
              )}
            </Select>

            <Input
              label="Blog title"
              // classNames={{ inputWrapper: "border-default", input: "primary" }} // Add custom class for text color
              name="title"
              className="rounded-md tracking-tight"
              required={true}
            />

            <Input
              label="Enter comma separated tags"
              // classNames={{ inputWrapper: "border-primary" }}
              name="tags"
              className="rounded-md tracking-tight"
              required={true}
            />
          </div>

          <Button
            variant="default"
            type="submit"
            className="w-full rounded-md py-6 text-lg font-semibold">
            Upload
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Page;
