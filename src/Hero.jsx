import coverImage from './assets/img.png'
import {GridPattern} from "./GridPattern.jsx";
import {Button} from "./Button.jsx";


export function Hero() {
  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 rounded-br-6xl bg-neutral-800 text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div className="relative z-10 mx-auto flex w-64 rounded-xl bg-slate-600 shadow-xl md:w-80 lg:w-auto">
            <img  src={coverImage} className="w-full" alt="book cover"/>
          </div>
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-32 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-5xl">
              Ramadan Reflections
            </h1>
            <p className="mt-4 text-3xl text-slate-600">
              Embark on a transformative journey this Ramadan with "Ramadan Reflections: A Journey of Spiritual Growth and Gratitude."
            </p>
            <div className="mt-8 flex gap-4">
              <Button href="https://a.co/d/91FBFft" variant="outline" color="slate" target="_blank">
                Buy Book
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
