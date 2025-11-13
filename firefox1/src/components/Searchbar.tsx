type SearchProps = {
  name: string;
  iconUrl: string;
  onChangeText: (text: string) => void;
};

export default function Searchbar({ name, iconUrl, onChangeText }: SearchProps) {
  
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      onChangeText(e.currentTarget.value); 
    }
  }

  return (
    <div className="flex justify-start bg-[#2B2A33] p-4 gap-3 w-full max-w-xl rounded-2xl">
      <img className="h-6 rounded-2xl" src={iconUrl} alt={`${name} logo`} />

      <input
        className="text-white flex-1 border-none outline-none bg-transparent"
        type="text"
        placeholder={`Search with ${name} or enter address`}
        onChange={(e) => onChangeText(e.target.value)}
      />
    </div>
  );
}
