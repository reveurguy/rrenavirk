import React from 'react';
import { Search } from 'lucide-react';

function SearchBox() {
    return (
        <div className="rounded-lg md:bg-slate-100 p-2 flex gap-2 w-10 md:w-40 md:border-2 md:border-slate-200 hover:bg-slate-200">
            <Search/>
        </div>
    );
}

export default SearchBox;