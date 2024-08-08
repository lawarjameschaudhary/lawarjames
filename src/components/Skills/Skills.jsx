import React from 'react'

const Skills = () => {
  return (
    <div className='bg-black flex flex-col items-center border-b-[0.1px] md:p-28 border-b-blue-300 pb-28'>
      <div className='text-white font-extrabold text-3xl md:text-5xl lg:text-7xl flex justify-center mt-12  pb-4 md:pb-6'>
        <h1 className='bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text'>
          Skills
        </h1>
      </div>

      <div className="design-tool flex flex-col items-center">
        <div className='text-center font-extrabold text-2xl md:text-4xl lg:text-5xl flex justify-center mt-6 md:mt-12 pb-4'>
          <h1 className='bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text'>
            Designing Tools I Use
          </h1>
        </div>
        <div className='flex gap-6 md:gap-8 lg:gap-11 flex-wrap mt-6 md:mt-12 items-center justify-center'>
          <div className="bg-white flex rounded-full px-4 py-2 md:px-5 md:py-4 items-center gap-3 md:gap-5">
            <img src="./src/assets/figma.png" alt="Figma" className='w-10 md:w-12' />
            <div className=" text-lg md:text-xl font-medium">
              Figma
            </div>
          </div>
          <div className="bg-white flex rounded-full px-4 py-2 md:px-5 md:py-4 items-center gap-3 md:gap-5">
            <img src="./src/assets/photoshop.png" alt="Photoshop" className='w-10 md:w-12' />
            <div className="text-md md:text-xl font-medium">
              Photoshop
            </div>
          </div>
        </div>
      </div>

      <div className="technology">
        <div className='text-white text-center font-extrabold text-2xl md:text-4xl lg:text-5xl flex justify-center mt-12 pb-4'>
          <h1 className='bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text'>
            Technology I Use
          </h1>
        </div>
        <div className="flex gap-4 md:gap-6 lg:gap-8 flex-wrap justify-center mt-6 md:mt-12">
          <div className="bg-white flex rounded-full px-4 py-2 md:px-5 md:py-4 items-center gap-1 md:gap-3">
            <img src="./src/assets/react.svg" alt="React JS" className='w-8 md:w-12' />
            <div className="text-md md:text-xl font-medium">
              React JS
            </div>
          </div>
          <div className="bg-white flex rounded-full px-4 py-2 md:px-5 md:py-4 items-center gap-1 md:gap-3">
            <img src="./src/assets/html.png" alt="HTML" className='w-8 md:w-12' />
            <div className="text-md md:text-xl font-medium">
              HTML
            </div>
          </div>
          <div className="bg-white flex rounded-full px-4 py-2 md:px-5 md:py-4 items-center gap-1 md:gap-3">
            <img src="./src/assets/javascript.png" alt="JavaScript" className='w-8 md:w-12' />
            <div className="text-md md:text-xl font-medium">
              JavaScript
            </div>
          </div>
          <div className="bg-white flex rounded-full px-4 py-2 md:px-5 md:py-4 items-center gap-1 md:gap-3">
            <img src="./src/assets/tailwind.png" alt="Tailwind CSS" className='w-8 md:w-12' />
            <div className="text-md md:text-xl font-medium">
              Tailwind CSS
            </div>
          </div>
        </div>
        <div className='flex gap-4 md:gap-6 lg:gap-8 flex-wrap justify-center mt-6 md:mt-12'>
          <div className="bg-white flex rounded-full px-4 py-2 md:px-5 md:py-4 items-center gap-1 md:gap-3">
            <img src="./src/assets/css.png" alt="CSS" className='w-8 md:w-12' />
            <div className="text-md md:text-xl font-medium">
              CSS
            </div>
          </div>
          <div className="bg-white flex rounded-full px-4 py-2 md:px-5 md:py-4 items-center gap-1 md:gap-3">
            <img src="./src/assets/photoshop.png" alt="Photoshop" className='w-8 md:w-12' />
            <div className="text-md md:text-xl font-medium">
              Photoshop
            </div>
          </div>
          <div className="bg-white flex rounded-full px-4 py-2 md:px-5 md:py-4 items-center gap-1 md:gap-3">
            <img src="./src/assets/notion.png" alt="Notion" className='w-8 md:w-12' />
            <div className="text-md md:text-xl font-medium">
              Notion
            </div>
          </div>
        </div>
      </div>

      <div className="development-tool">
        <div className='text-center font-extrabold text-2xl md:text-4xl lg:text-5xl flex justify-center mt-12 pb-4'>
          <h1 className='bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 text-transparent bg-clip-text'>
            Development & Productivity Tools I Use
          </h1>
        </div>
        <div className="flex gap-4 md:gap-6 lg:gap-8 flex-wrap justify-center mt-6 md:mt-12">
          <div className="bg-white flex rounded-full px-4 py-2 md:px-5 md:py-4 items-center gap-1 md:gap-3">
            <img src="./src/assets/vscode.png" alt="Visual Studio Code" className='w-10 md:w-12' />
            <div className="text-md md:text-xl font-medium">
              Visual Studio Code
            </div>
          </div>
          <div className="bg-white flex rounded-full px-4 py-2 md:px-5 md:py-4 items-center gap-1 md:gap-3">
            <img src="./src/assets/github.png" alt="GitHub" className='w-10 md:w-12' />
            <div className="text-md md:text-xl font-medium">
              GitHub
            </div>
          </div>
          <div className="bg-white flex rounded-full px-4 py-2 md:px-5 md:py-4 items-center gap-1 md:gap-3 ">
            <img src="./src/assets/git.png" alt="Git" className='w-10 md:w-12' />
            <div className="text-md md:text-xl font-medium">
              Git
            </div>
          </div>
          <div className="bg-white flex rounded-full px-4 py-2 md:px-5 md:py-4 items-center gap-1 md:gap-3">
            <img src="./src/assets/notion.png" alt="Notion" className='w-10 md:w-12' />
            <div className=" text-md md:text-xl font-medium">
              Notion
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
