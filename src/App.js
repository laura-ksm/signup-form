const App = () => {
  return (
    <div className="box-border md:box-content ...">
      <div className="bg-hero-background w-full h-screen bg-no-repeat bg-cover bg-red-400">

      <div className="max-w-max mx-auto">
        <div className="md:flex">
          <div className="md:flex-shrink-1">
            <div className="max-w-md text-white">
              <div className="text-5xl font-bold">Learn to code by watching others</div>
              <div className="text-base	pt-8">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</div>
            </div>
          </div>
          <div className="md:flex">
          <div className="md:flex-shrink-1">
            <div className="p-4">
              <div className="px-8 py-6 max-w-sm mx-auto bg-indigo-800 rounded-xl shadow-2xl items-center">
                <div className="text-white">Try it free 7 days then $20/mo. thereafter</div>
              </div>
            </div>
            <div className="p-4">
              <div className="px-8 py-6 max-w-sm mx-auto bg-white rounded-xl shadow-2xl items-center">
                <form>
                  <input className="border border-gray-300 rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:border-gray-600" type="text" placeholder="First Name"/>
                  <input className="border border-gray-300 rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:border-gray-600" type="text" placeholder="Last Name"/>
                  <input className="border border-gray-300 rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:border-gray-600" type="email" placeholder="Email Address"/>
                  <input className="border border-gray-300 rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:border-gray-600" type="password" placeholder="Password"/>
                  <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-400 hover:bg-green-200">CLAIM YOUR FREE TRIAL</button>
                </form>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      

        <footer>
          <p className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="https://github.com/laura-ksm">Laura Salinas</a>.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
