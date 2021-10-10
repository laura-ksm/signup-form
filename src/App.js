const App = () => {
  return (
    <div className="box-border md:box-content ...">
      <div className="bg-hero-background w-full h-screen bg-no-repeat bg-cover bg-red-400">

      <div className="md:flex">
        <div className="md:flex-shrink-1">
          <div className="max-w-md text-white">
            <div className="text-5xl font-bold">Learn to code by watching others</div>
            <div className="text-base	pt-8">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</div>
          </div>
        </div>
        <div className="p-8">
          <div class="p-6 max-w-sm mx-auto bg-indigo-800 rounded-xl shadow-2xl flex items-center">
            <div className="text-white">Try it free 7 days then $20/mo. thereafter</div>
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
