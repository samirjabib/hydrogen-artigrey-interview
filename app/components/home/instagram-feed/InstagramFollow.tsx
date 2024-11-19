export const InstagramFollow = ({username}: {username: string}) => {
  return (
    <header className="flex items-center justify-center w-full h-full bg-[#F6F6F5] rounded-lg mb-[10px] md:mb-0 py-12 md:py-0">
      <div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center text-white bg-black drop-shadow text-[12px] leading-3 font-semibold">
            Logo
          </div>
          <h2
            id="instagram-feed-heading"
            className="text-xl leading-6 font-bold text-center md:text-left"
          >
            @{username}
          </h2>
        </div>

        <a
          href={`https://www.instagram.com/${username}`}
          className="mt-4 block text-center text-sm font-medium hover:underline"
        >
          Follow us on Instagram
        </a>
      </div>
    </header>
  );
};
