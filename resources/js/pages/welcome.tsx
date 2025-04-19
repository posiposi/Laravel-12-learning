import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Welcome() {
  const { auth } = usePage<SharedData>().props;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const cards = [
    { id: 1, title: 'The Coldest Sunset', tags: ['#photography', '#travel', '#winter'] },
    { id: 2, title: 'Mountain Adventure', tags: ['#hiking', '#nature', '#explore'] },
    { id: 3, title: 'City Lights', tags: ['#urban', '#night', '#city'] },
    { id: 4, title: 'Ocean Breeze', tags: ['#beach', '#summer', '#relax'] },
    { id: 5, title: 'Forest Walk', tags: ['#forest', '#green', '#peace'] },
    { id: 6, title: 'Desert Mirage', tags: ['#desert', '#heat', '#adventure'] },
    { id: 7, title: 'Snowy Peaks', tags: ['#snow', '#mountains', '#cold'] },
    { id: 8, title: 'Golden Hour', tags: ['#sunset', '#golden', '#photography'] },
    { id: 9, title: 'Rainy Days', tags: ['#rain', '#cozy', '#peaceful'] },
  ];

  const totalPages = Math.ceil(cards.length / itemsPerPage);
  const paginatedCards = cards.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <Head title="Welcome">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
      </Head>
      <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
        <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
          <nav className="flex items-center justify-end gap-4">
            {auth.user ? (
              <Link
                href={route('dashboard')}
                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href={route('login')}
                  className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                >
                  Log in
                </Link>
                <Link
                  href={route('register')}
                  className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                >
                  Register
                </Link>
              </>
            )}
          </nav>
        </header>
        <main>
          <div className="flex flex-wrap justify-center gap-4">
            {paginatedCards.map((card) => (
              <div key={card.id} className="max-w-sm overflow-hidden rounded-lg border border-gray-300 shadow-lg">
                <img className="w-full" src="/images/tour_de_france.jpg" alt={card.title} />
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold text-white">{card.title}</div>
                  <p className="text-base text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
                    praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {card.tags.map((tag, index) => (
                    <span key={index} className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="rounded bg-gray-500 px-4 py-2 text-sm text-white disabled:opacity-50"
            >
              Previous
            </button>
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`rounded px-4 py-2 text-sm ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
              >
                {number}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="rounded bg-gray-500 px-4 py-2 text-sm text-white disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </main>
        <div className="hidden h-14.5 lg:block"></div>
      </div>
    </>
  );
}
