import React from 'react'
import HeroImg from '../../assets/hero-img.png'

function Hero() {
  return (
    <section className="">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-10 lg:flex-row gap-20">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={HeroImg} alt="" className="object-contain h-72 sm:h-80 lg:h-50 xl:h-90 2xl:h-100" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold sm:text-6xl text-white poppins-semibold max-w-prose">Where Every <span className="text-green-500">Byte</span> Tells a Story
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-300 poppins-regular">
				<br  className="hidden md:inline lg:hidden" />Bringing you fresh updates on the latest gadgets, software, and trends
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				{/* <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-green-600 dark:text-gray-50">Suspendisse</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-green-600 text-green-600">Malesuada</a> */}
			</div>
		</div>
	</div>
</section>
  )
}

export default Hero