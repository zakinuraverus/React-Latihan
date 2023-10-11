export default function Hero() {
  return (
    <section className="bg-backColor h-64 flex mb-2">
      <div className="grid grid-cols-12 items-center justify-center font-K2D text-6xl container mx-auto">
        <p className="col-span-6 text-center text-white">SYNTAX</p>
        <div className="col-span-6 text-txtColor text-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.markdownguide.org/basic-syntax/"
            className="hover:text-txtColorHover"
          >
            BASIC
          </a>
          <hr className="mt-2 mb-2 border-dashed" />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.markdownguide.org/extended-syntax/"
            className="hover:text-txtColorHover"
          >
            EXTENDED
          </a>
          <p className="text-white text-xs">(not all working)</p>
        </div>
      </div>
    </section>
  );
}
