type SearchProps = {
  name: string;
  iconUrl: string;
  onChangeText: (text: string) => void;
};

export default function Searchbar({ name, iconUrl, onChangeText }: SearchProps) {
  return (
    <div className="flex justify-start bg-[#2B2A33] p-4 gap-3 w-[50vw] rounded-2xl">
      <img className="h-6 rounded-2xl"
        src={iconUrl}
        alt={`${name} logo` }
      />

      <input className="text-white flex-1 border-none outline-none"
        type="text"
        placeholder={`Search with ${name} or enter address` }       
        onChange={(e) => onChangeText(e.target.value)}
      />
    </div>
  );
}
