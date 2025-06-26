function PlaceCard({
  title,
  image,
  link,
}: {
  title: string;
  image: string;
  link?: string;
}) {
  const content = (
    <div className="group relative overflow-hidden rounded-2xl aspect-[16/9] cursor-pointer shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
      <div className="absolute bottom-4 left-4">
        <div className="bg-primary/80 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          {title}
        </div>
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}

export default PlaceCard;
