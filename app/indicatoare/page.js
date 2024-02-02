const posts = [
  {
    id: 1,
    title: 'Indicatoare de avertizare',
    href: '#',
    description: 'Indicatoarele de avertizare, de regula, au forma unui triunghi echilateral, cu chenarul de culoarea rosie in care, pe un fond alb sunt figurate diferite simboluri de culoare neagra reprezentand natura pericolelor ce urmeaza a fi intalnite. Indicatoarele de avertizare au ca obiect avertizarea participantilor la traficul rutier asupra existentei unui pericol pe drum, indicandu-se si natura acestuia.',
    articleImg: 'https://www.scoalarutiera.ro/upload/img/categories/img/indicatoare-de-avertizare.jpg',
  },
  {
    id: 2,
    title: 'Indicatoare de prioritate',
    href: '#',
    description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    articleImg: 'https://www.scoalarutiera.ro/upload/img/categories/img/indicatoare-de-prioritate.jpg',
  },
  {
    id: 3,
    title: 'Indicatoare de interzicere sau restrictie',
    href: '#',
    description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    articleImg: 'https://www.scoalarutiera.ro/upload/img/categories/img/indicatoare-de-interzicere-sau-restrictie.jpg',
  },
  {
    id: 4,
    title: 'Indicatoare de obligare',
    href: '#',
    description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    articleImg: 'https://www.scoalarutiera.ro/upload/img/categories/img/indicatoare-de-obligare.jpg',
  },
  // More posts...
]

export default function Indicatoare() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col p-2 bg-white shadow-sm rounded-lg items-start justify-between">
              <div className="group relative">
                {/* <img src={post.articleImg} alt="" className="" /> */}
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href} className="flex justify-center">
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

  