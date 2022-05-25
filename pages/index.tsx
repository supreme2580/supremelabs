import Image from "next/image"
import Link from "next/link"
import host from "../images/mark-zuckerberg.jpg"

const Home = () => {
  const topics = [
    { name: 'adri', slug: 'adri'},
    { name: 'becky', slug: 'becky'},
    { name: 'chris', slug: 'chris'},
    { name: 'dillon', slug: 'dillion'},
    { name: 'evan', slug: 'evan'},
    { name: 'frank', slug: 'frank'},
    { name: 'georgette', slug: 'georgette'},
    { name: 'hugh', slug: 'hugh'},
    { name: 'igor', slug: 'igor'},
    { name: 'jacoby', slug: 'jacoby'},
    { name: 'kristina', slug: 'kristina'},
    { name: 'lemony', slug: 'lemony'},
    { name: 'matilda', slug: 'matilda'},
    { name: 'nile', slug: 'nile'},
    { name: 'ophelia', slug: 'ophelia'},
    { name: 'patrick', slug: 'patrick'},
    { name: 'quincy', slug: 'quincy'},
    { name: 'roslyn', slug: 'roslyn'},
    { name: 'solene', slug: 'solene'},
    { name: 'timothy', slug: 'timothy'},
    { name: 'uff', slug: 'uff'},
    { name: 'violet', slug: 'violet'},
    { name: 'wyatt', slug: 'wyatt'},
    { name: 'x', slug: 'x'},
    { name: 'yadri', slug: 'yadri'},
    { name: 'zack', slug: 'zack'},
  ]
  function search () {
    const input = document.querySelector<HTMLInputElement>(".search-input")
    let x = document.getElementsByClassName("topics")
    let value = input?.value.toLocaleLowerCase()
    const searchField = document.querySelector(".search")
    for (let i = 0; i <= topics.length; i++) {
      if (value != null && value.length > 0) {
        searchField?.classList.remove("hidden")
        if (!x[i]?.innerHTML.includes(value+"")) {
            x[i]?.classList.add("hidden")
          }
          else {
            x[i]?.classList.remove("hidden")
          }
        }
        else {
          searchField?.classList.add("hidden")
        }
    }
  }
  function searchCheck() {
    const input = document.querySelector<HTMLInputElement>(".search-input")
    let value = input?.value.toLocaleLowerCase()
    let result = new Array()
    topics.map(element => {
      if (element.name.includes(value+"") == true && value != null && value?.length > 0) {
        result.push(element.name)
      }
    });
    return result.length
  }
  function searchButton () {
    const noResult = document.querySelector(".no-result")
    if (searchCheck() == 0) {
      noResult?.classList.remove("hidden")
    }
    else {
      noResult?.classList.add("hidden")
    }
  }
  return (
    <div className="relative min-h-screen md:flex">
      <div className="bg-zinc-800 px-2 flex justify-between items-center md:hidden">
        <Link href="/"><a className="text-xl text-white font-extrabold">{"Supreme Labs (...){...}"}</a></Link>
        <button className="mobile-menu-button p-4 focus:outline-none"onClick={() => document.querySelector(".sidebar")?.classList.toggle("-translate-x-full")}>
          <svg className="w-5 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 
              01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd">
            </path>
          </svg>
        </button>
      </div>
      <div className="sidebar bg-zinc-800 w-72 space-y-4 fixed top-0 bottom-0 left-0 md:fixed md:translate-x-0 transform
      -translate-x-full transition duration-200 ease-in-out">
        <nav className="flex flex-col space-y-2 mt-4">
          <div className="flex flex-col items-center space-y-2 mx-4">
            <Image src={host} width={150} height={150} className="rounded-full" />
            <div className="w-full px-4 text-white font-semibold flex items-center space-x-4"><div className="w-10 h-2 bg-white flex-1 rounded-lg"></div><span>Your Host</span>
            <div className="w-10 h-2 bg-white flex-1 rounded-lg"></div></div>
            <div className="text-white text-xl font-semibold">Victor Omorogbe</div>
            <div className="text-white text-base text-center">Hi there my name is Victor Omorogbe and I love innovation and technology.</div>
          </div>
          <div className="space-y-4 mx-4">
            <div><Link href="/"><a className="flex items-center py-2.5 px-4 text-white text-xl font-semibold hover:bg-green-600 rounded-md">
              <span className="mr-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 
                0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
              </span>Home</a></Link></div>
            <div><Link href="/"><a className="flex items-center py-2.5 px-4 text-white text-xl font-semibold hover:bg-green-600 rounded-md">
              <span className="mr-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 
                2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 
                1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 
                4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 
                5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 
                0 2 2 0 014 0z" clip-rule="evenodd"></path>
              </svg>
              </span>  
            Support Blog</a></Link></div>
            <div><Link href="/"><a className="flex items-center py-2.5 px-4 text-white text-xl font-semibold hover:bg-green-600 rounded-md">
              <span className="mr-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 
                1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
              </span>
            Report an issue</a></Link></div>
            <div><Link href="/"><a className="flex items-center py-2.5 px-4 text-white text-xl font-semibold hover:bg-green-600 rounded-md">
              <span className="mr-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 
                0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
              </svg>
              </span>Have A Question?</a></Link></div>
          </div>
        </nav>
      </div>
      <div className="p-10 flex-1 flex flex-col md:ml-56 overflow-auto items-center px-4 sm:px-32 space-y-3">
        <div className="text-zinc-800 font-bold text-3xl text-center">Supreme Labs - A Blog Made For Developers</div>
        <div className="text-zinc-600">This is a platform that provides content related to programming and also teaches you how to build 
          certain projects and gives you project ideas, you are welcome.
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full flex justify-center items-center">
            <input type="search" placeholder="Start typing to search and select an article" className="search-input w-full py-2 px-5 border-2
            border-green-600 border-r-0 rounded-l-full outline-0" onChange={search} onKeyUp={searchButton} />
            <button className="border-2 border-green-600 border-l-0 rounded-r-full p-2 focus:outline-none" onClick={searchButton}>
              <svg className="w-6 h-6 text-zinc-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 
                1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd">
                </path>
              </svg>
            </button>
          </div>
          <div className="search shadow shadow-xl rounded-lg border-2 mt-1 hidden max-h-64 overflow-y-scroll
            scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thin">
            <ol>
              {
                <div>
                  {
                    topics.map((names)=>{
                      return <div key={names.slug}>
                        <Link href={names.slug}>
                          <a>
                          <div className="topics w-full p-5 border border-b-1 border-x-0 border-t-0 hidden">{names.name.toLowerCase()}</div>
                        </a>
                        </Link>
                      </div>
                    })
                  }
                </div>
              }
              <div className="no-result w-full p-5 border border-b-1 border-x-0 border-t-0 hidden">No Results Found</div>
            </ol>
          </div>
        </div>
        <div>
          <div className="w-full flex flex-col">
            <div className="flex w-full space-x-2 pt-10 items-center">
              <div className="flex flex-col">
                <div className="text-zinc-800 font-bold text-xl">Why every developer should have a blog</div>
                <div className="text-zinc-600 text-sm">Published on 12/24/2022</div>
                <div className="text-zinc-600 font-semibold text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis maiores nostrum eos praesentium quasi asperiores ad, facilis consequatur architecto voluptate accusantium sunt in totam aspernatur laudantium, eius omnis tenetur optio.</div>
                <div className="text-green-600"><Link href="/"><a>Read more →</a></Link></div>
              </div>
            </div>

            <div className="flex w-full space-x-2 pt-10 items-center">
              <div className="flex flex-col max-w-2xl">
                <div className="text-zinc-800 font-bold text-xl">Why every developer should have a blog</div>
                <div className="text-zinc-600 text-sm">Published on 12/24/2022</div>
                <div className="text-zinc-600 font-semibold text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis maiores nostrum eos praesentium quasi asperiores ad, facilis consequatur architecto voluptate accusantium sunt in totam aspernatur laudantium, eius omnis tenetur optio.</div>
                <div className="text-green-600"><Link href="/"><a>Read more →</a></Link></div>
              </div>
            </div>

            <div className="flex w-full space-x-2 pt-10 items-center">
              <div className="flex flex-col max-w-2xl">
                <div className="text-zinc-800 font-bold text-xl">Why every developer should have a blog</div>
                <div className="text-zinc-600 text-sm">Published on 12/24/2022</div>
                <div className="text-zinc-600 font-semibold text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis maiores nostrum eos praesentium quasi asperiores ad, facilis consequatur architecto voluptate accusantium sunt in totam aspernatur laudantium, eius omnis tenetur optio.</div>
                <div className="text-green-600"><Link href="/"><a>Read more →</a></Link></div>
              </div>
            </div>

            <div className="flex w-full space-x-2 pt-10 items-center">
              <div className="flex flex-col max-w-2xl">
                <div className="text-zinc-800 font-bold text-xl">Why every developer should have a blog</div>
                <div className="text-zinc-600 text-sm">Published on 12/24/2022</div>
                <div className="text-zinc-600 font-semibold text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis maiores nostrum eos praesentium quasi asperiores ad, facilis consequatur architecto voluptate accusantium sunt in totam aspernatur laudantium, eius omnis tenetur optio.</div>
                <div className="text-green-600"><Link href="/"><a>Read more →</a></Link></div>
              </div>
            </div>

            <div className="flex w-full space-x-2 pt-10 items-center">
              <div className="flex flex-col max-w-2xl">
                <div className="text-zinc-800 font-bold text-xl">Why every developer should have a blog</div>
                <div className="text-zinc-600 text-sm">Published on 12/24/2022</div>
                <div className="text-zinc-600 font-semibold text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis maiores nostrum eos praesentium quasi asperiores ad, facilis consequatur architecto voluptate accusantium sunt in totam aspernatur laudantium, eius omnis tenetur optio.</div>
                <div className="text-green-600"><Link href="/"><a>Read more →</a></Link></div>
              </div>
            </div>

            <div className="flex w-full space-x-2 pt-10 items-center">
              <div className="flex flex-col max-w-2xl">
                <div className="text-zinc-800 font-bold text-xl">Why every developer should have a blog</div>
                <div className="text-zinc-600 text-sm">Published on 12/24/2022</div>
                <div className="text-zinc-600 font-semibold text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis maiores nostrum eos praesentium quasi asperiores ad, facilis consequatur architecto voluptate accusantium sunt in totam aspernatur laudantium, eius omnis tenetur optio.</div>
                <div className="text-green-600"><Link href="/"><a>Read more →</a></Link></div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Home