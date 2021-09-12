import Link from 'next/link';

const Custom404 = () => (
  <div className="text-center flex flex-col h-screen justify-center">
    <div>
      <h1
        className="watermark text-gray-700 mb-6"
        style={{ fontSize: 'max(min(220px, 25vw), 70px)' }}
      >
        404
      </h1>
      <h2
        className="mb-4 block"
        style={{ fontSize: 'max(min(40px, 4vw), 20px)' }}
      >
        Sorry, we couldn&apos;t find what you&apos;re looking for
      </h2>
      <Link href="/" passHref>
        <button
          type="button"
          className="blue-button"
          style={{ fontSize: 'max(min(20px, 3vw), 14px)' }}
        >
          Home
        </button>
      </Link>
    </div>
  </div>
);

export default Custom404;
