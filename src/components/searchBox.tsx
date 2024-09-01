import { Search } from 'lucide-react';

function SearchBox() {
  return (
    <div className="flex w-10 gap-2 rounded-lg p-2 hover:bg-slate-200 md:w-40 md:border-2 md:border-slate-200 md:bg-slate-100">
      <Search />
    </div>
  );
}

export default SearchBox;
