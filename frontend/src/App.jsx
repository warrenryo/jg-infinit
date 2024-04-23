import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import "./index.css";
import "preline/preline";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          entry.target.classList.add('show_2');
        } else {
          entry.target.classList.remove('show');
          entry.target.classList.remove('show_2');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hide');
    const hiddenElements2 = document.querySelectorAll('.hide_2');
    const hiddenElements3 = document.querySelectorAll('.hide_3');
    hiddenElements.forEach((el) => observer.observe(el));
    hiddenElements2.forEach((el) => observer.observe(el));
    hiddenElements3.forEach((el) => observer.observe(el));
    // Cleanup function to disconnect the observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []); 
  return (
    <>
    <h1 className="hide_3">
      Hello
    </h1>
      <select
        data-hs-select='{
  "placeholder": "Select option...",
  "toggleTag": "<button type=\"button\"></button>",
  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400",
  "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
  "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
  "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-blue-600 dark:text-blue-500\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
  "extraMarkup": "<div class=\"absolute top-1/2 end-3 -translate-y-1/2\"><svg class=\"flex-shrink-0 size-3.5 text-gray-500 dark:text-neutral-500\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/></svg></div>"
}'
        class="hidden"
      >
        <option value="">Choose</option>
        <option>Name</option>
        <option>Email address</option>
        <option>Description</option>
        <option>User ID</option>
      </select>

      <button
        type="button"
        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        data-hs-overlay="#hs-scroll-inside-body-modal"
      >
        Scroll inside body
      </button>

      <div
        id="hs-scroll-inside-body-modal"
        class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
      >
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)]">
          <div class="max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
              <h3 class="font-bold text-gray-800 dark:text-white">
                Modal title
              </h3>
              <button
                type="button"
                class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                data-hs-overlay="#hs-scroll-inside-body-modal"
              >
                <span class="sr-only">Close</span>
                <svg
                  class="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-y-auto">
              <div class="space-y-4">
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                    Be bold
                  </h3>
                  <p class="mt-1 text-gray-800 dark:text-neutral-400">
                    Motivate teams to do their best work. Offer best practices
                    to get users going in the right direction. Be bold and offer
                    just enough help to get the work started, and then get out
                    of the way. Give accurate information so users can make
                    educated decisions. Know your user's struggles and desired
                    outcomes and give just enough information to let them get
                    where they need to go.
                  </p>
                </div>

                <div>
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                    Be optimistic
                  </h3>
                  <p class="mt-1 text-gray-800 dark:text-neutral-400">
                    Focusing on the details gives people confidence in our
                    products. Weave a consistent story across our fabric and be
                    diligent about vocabulary across all messaging by being
                    brand conscious across products to create a seamless flow
                    across all the things. Let people know that they can jump in
                    and start working expecting to find a dependable experience
                    across all the things. Keep teams in the loop about what is
                    happening by informing them of relevant features, products
                    and opportunities for success. Be on the journey with them
                    and highlight the key points that will help them the most -
                    right now. Be in the moment by focusing attention on the
                    important bits first.
                  </p>
                </div>

                <div>
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                    Be practical, with a wink
                  </h3>
                  <p class="mt-1 text-gray-800 dark:text-neutral-400">
                    Keep our own story short and give teams just enough to get
                    moving. Get to the point and be direct. Be concise - we tell
                    the story of how we can help, but we do it directly and with
                    purpose. Be on the lookout for opportunities and be quick to
                    offer a helping hand. At the same time realize that nobody
                    likes a nosy neighbor. Give the user just enough to know
                    that something awesome is around the corner and then get out
                    of the way. Write clear, accurate, and concise text that
                    makes interfaces more usable and consistent - and builds
                    trust. We strive to write text that is understandable by
                    anyone, anywhere, regardless of their culture or language so
                    that everyone feels they are part of the team.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
              <button
                type="button"
                class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                data-hs-overlay="#hs-scroll-inside-body-modal"
              >
                Close
              </button>
              <button
                type="button"
                class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
