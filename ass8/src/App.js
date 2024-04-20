function App() {
  return (
    <div className="border border-white-800 w-2/3 m-auto mt-32 rounded-xl shadow-xl">
      <header className="flex justify-between p-6">
        <div className="flex gap-8">
          <div>
            <a href="#clarusway">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/682a555ec15382f2c6e7457ca1ef48d8dbb179ac/f8cd3/images/logo.svg"
                alt="logo"
              />
            </a>
          </div>

          <div className="flex gap-8 items-center">
            <a href="#solutions"> Solutions </a>
            <a href="#industries"> Industries </a>
            <a href="#fees"> Fees </a>
            <a href="#About"> About Rareblocks </a>
          </div>
        </div>

        <div>
          <div className="flex gap-8 items-center">
            <a href="#login"> Sign in </a>
            <a
              href="#register"
              rel="noopener noreferrer"
              role="button"
              className="bg-black text-white p-1 rounded-md"
            >
              Create free account
            </a>
          </div>
        </div>
      </header>

      <section>
        <div className="flex justify-between p-20 items-center">
          <div>
            <div className="">
              <h1>A special credit card made for Developers.</h1>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Vehicula massa in enim luctus. Rutrum arcu.
              </p>

              <form
                action="#"
                method="POST"
                className="mt-5 border border-gray-300 flex justify-between items-center p-3 rounded-xl"
              >
                <div>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-black text-white p-3 rounded-lg font-bold "
                  >
                    Get Free Card
                  </button>
                </div>
              </form>
            </div>
            <div className="flex gap-5 items-center">
              <div className="flex items-center gap-3 mt-5">
                <p className="text-5xl">2943</p>
                <p>
                  Cards
                  <br />
                  Delivered
                </p>
              </div>
              <div className="text-gray-400">
                {" "}
                <br />
                <svg
                  width={16}
                  height={39}
                  viewBox="0 0 16 39"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975" />
                  <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398" />
                  <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584" />
                  <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584" />
                  <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584" />
                </svg>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <p className="text-5xl">$1M+</p>
                <p>
                  Transaction
                  <br />
                  Completed
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/d6f1462500f7670e0db6b76b35054a081679a5a0/0ce15/images/hero/5.1/illustration.png"
              width="300px"
              alt="images"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
