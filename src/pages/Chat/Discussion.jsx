export const Discussion = () => {
  return (
    <div class="w-full h-screen text-black ">
      <div class="flex h-full">
        <div class="flex-1  w-full h-full">
          <div class="main-body container m-auto w-11/12 h-full flex flex-col">
            <div class="py-4 flex-2 flex flex-row">
              <div class="flex-1">
                <span class="xl:hidden inline-block  -700 hover: -900 align-bottom">
                  <span class="block h-6 w-6 p-1 rounded-full hover:bg-gray-400">
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </span>
                </span>
              </div>
              <div class="flex-1 text-right dark:text-white">
                <span class="inline-block ">
                  Status:{" "}
                  <span class="inline-block align-text-bottom w-4 h-4 bg-green-400 rounded-full border-2 border-white"></span>{" "}
                  <b>Online</b>
                </span>
              </div>
            </div>

            <div class="main flex-1 flex flex-col">

              <div class="flex-1 flex h-full">
                <div class="sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-6">
                  <div class="search flex-2 pb-6 px-2">
                    <input
                      type="text"
                      class="outline-none py-2 block w-full bg-transparent border-b-2 border-gray-200"
                      placeholder="Search"
                    />
                  </div>
                  <div class="flex-1 h-full overflow-auto px-2">
                    <div class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                      <div class="flex-2">
                        <div class="w-12 h-12 relative">
                          <img
                            class="w-12 h-12 rounded-full mx-auto"
                            src="https://imgs.search.brave.com/_J8N2UDJaL5yqzSP7yAjwI_ndgX4FGOZW3aCDME6dd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ib3ktd2l0aC1z/aGlydC10aGF0LXNh/eXMtaGUtaXMtd2Vh/cmluZy1zaGlydC10/aGF0LXNheXMtaGUt/aXMtd2VhcmluZy1z/aGlydF8xMTQ2Nzkx/LTQ5Mi5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
                            alt="chat-user"
                          />
                          <span class="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                        </div>
                      </div>
                      <div class="flex-1 px-2">
                        <div class="truncate w-32">
                          <span class=" -800">Ryann Remo</span>
                        </div>
                        <div>
                          <small class=" -600">Yea, Sure!</small>
                        </div>
                      </div>
                      <div class="flex-2 text-right">
                        <div>
                          <small class=" -500">15 April</small>
                        </div>
                        <div>
                          <small class="text-xs bg-purple-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
                            23
                          </small>
                        </div>
                      </div>
                    </div>
                    <div class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                      <div class="flex-2">
                        <div class="w-12 h-12 relative">
                          <img
                            class="w-12 h-12 rounded-full mx-auto"
                            src="https://imgs.search.brave.com/_J8N2UDJaL5yqzSP7yAjwI_ndgX4FGOZW3aCDME6dd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ib3ktd2l0aC1z/aGlydC10aGF0LXNh/eXMtaGUtaXMtd2Vh/cmluZy1zaGlydC10/aGF0LXNheXMtaGUt/aXMtd2VhcmluZy1z/aGlydF8xMTQ2Nzkx/LTQ5Mi5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
                            alt="chat-user"
                          />
                          <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                        </div>
                      </div>
                      <div class="flex-1 px-2">
                        <div class="truncate w-32">
                          <span class=" -800">Karp Bonolo</span>
                        </div>
                        <div>
                          <small class=" -600">Yea, Sure!</small>
                        </div>
                      </div>
                      <div class="flex-2 text-right">
                        <div>
                          <small class=" -500">15 April</small>
                        </div>
                        <div>
                          <small class="text-xs bg-purple-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
                            10
                          </small>
                        </div>
                      </div>
                    </div>
                    <div class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md border-l-4 border-purple-500">
                      <div class="flex-2">
                        <div class="w-12 h-12 relative">
                          <img
                            class="w-12 h-12 rounded-full mx-auto"
                            src="https://imgs.search.brave.com/_J8N2UDJaL5yqzSP7yAjwI_ndgX4FGOZW3aCDME6dd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ib3ktd2l0aC1z/aGlydC10aGF0LXNh/eXMtaGUtaXMtd2Vh/cmluZy1zaGlydC10/aGF0LXNheXMtaGUt/aXMtd2VhcmluZy1z/aGlydF8xMTQ2Nzkx/LTQ5Mi5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
                            alt="chat-user"
                          />
                          <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                        </div>
                      </div>
                      <div class="flex-1 px-2">
                        <div class="truncate w-32">
                          <span class=" -800">Mercedes Yemelyan</span>
                        </div>
                        <div>
                          <small class=" -600">Yea, Sure!</small>
                        </div>
                      </div>
                      <div class="flex-2 text-right">
                        <div>
                          <small class=" -500">15 April</small>
                        </div>
                      </div>
                    </div>
                    <div class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                      <div class="flex-2">
                        <div class="w-12 h-12 relative">
                          <img
                            class="w-12 h-12 rounded-full mx-auto"
                            src="https://imgs.search.brave.com/_J8N2UDJaL5yqzSP7yAjwI_ndgX4FGOZW3aCDME6dd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ib3ktd2l0aC1z/aGlydC10aGF0LXNh/eXMtaGUtaXMtd2Vh/cmluZy1zaGlydC10/aGF0LXNheXMtaGUt/aXMtd2VhcmluZy1z/aGlydF8xMTQ2Nzkx/LTQ5Mi5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
                            alt="chat-user"
                          />
                          <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                        </div>
                      </div>
                      <div class="flex-1 px-2">
                        <div class="truncate w-32">
                          <span class=" -800">Cadi Kajetán</span>
                        </div>
                        <div>
                          <small class=" -600">Yea, Sure!</small>
                        </div>
                      </div>
                      <div class="flex-2 text-right">
                        <div>
                          <small class=" -500">15 April</small>
                        </div>
                      </div>
                    </div>
                    <div class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                      <div class="flex-2">
                        <div class="w-12 h-12 relative">
                          <img
                            class="w-12 h-12 rounded-full mx-auto"
                            src="https://imgs.search.brave.com/_J8N2UDJaL5yqzSP7yAjwI_ndgX4FGOZW3aCDME6dd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ib3ktd2l0aC1z/aGlydC10aGF0LXNh/eXMtaGUtaXMtd2Vh/cmluZy1zaGlydC10/aGF0LXNheXMtaGUt/aXMtd2VhcmluZy1z/aGlydF8xMTQ2Nzkx/LTQ5Mi5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
                            alt="chat-user"
                          />
                          <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                        </div>
                      </div>
                      <div class="flex-1 px-2">
                        <div class="truncate w-32">
                          <span class=" -800">Rina Samuel</span>
                        </div>
                        <div>
                          <small class=" -600">Yea, Sure!</small>
                        </div>
                      </div>
                      <div class="flex-2 text-right">
                        <div>
                          <small class=" -500">15 April</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="chat-area flex-1 flex flex-col">
                  <div class="flex-3">
                    <h2 class="text-xl py-1 mb-8 border-b-2 dark:text-white border-gray-200">
                      Chatting with <b>Mercedes Yemelyan</b>
                    </h2>
                  </div>
                  <div class="messages flex-1 overflow-auto">
                    <div class="message mb-4 flex">
                      <div class="flex-2">
                        <div class="w-12 h-12 relative">
                          <img
                            class="w-12 h-12 rounded-full mx-auto"
                            src="https://imgs.search.brave.com/_J8N2UDJaL5yqzSP7yAjwI_ndgX4FGOZW3aCDME6dd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ib3ktd2l0aC1z/aGlydC10aGF0LXNh/eXMtaGUtaXMtd2Vh/cmluZy1zaGlydC10/aGF0LXNheXMtaGUt/aXMtd2VhcmluZy1z/aGlydF8xMTQ2Nzkx/LTQ5Mi5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
                            alt="chat-user"
                          />
                          <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                        </div>
                      </div>
                      <div class="flex-1 px-2">
                        <div class="inline-block bg-gray-300 rounded-full p-2 px-6  -700">
                          <span>
                            Hey there. We would like to invite you over to our
                            office for a visit. How about it?
                          </span>
                        </div>
                        <div class="pl-4">
                          <small class=" -500">15 April</small>
                        </div>
                      </div>
                    </div>
                    <div class="message mb-4 flex">
                      <div class="flex-2">
                        <div class="w-12 h-12 relative">
                          <img
                            class="w-12 h-12 rounded-full mx-auto"
                            src="https://imgs.search.brave.com/_J8N2UDJaL5yqzSP7yAjwI_ndgX4FGOZW3aCDME6dd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ib3ktd2l0aC1z/aGlydC10aGF0LXNh/eXMtaGUtaXMtd2Vh/cmluZy1zaGlydC10/aGF0LXNheXMtaGUt/aXMtd2VhcmluZy1z/aGlydF8xMTQ2Nzkx/LTQ5Mi5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
                            alt="chat-user"
                          />
                          <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                        </div>
                      </div>
                      <div class="flex-1 px-2">
                        <div class="inline-block bg-gray-300 rounded-full p-2 px-6  -700">
                          <span>
                            All travel expenses are covered by us of course :D
                          </span>
                        </div>
                        <div class="pl-4">
                          <small class=" -500">15 April</small>
                        </div>
                      </div>
                    </div>
                    <div class="message me mb-4 flex text-right">
                      <div class="flex-1 px-2">
                        <div class="inline-block bg-blue-600 rounded-full p-2 px-6 text-white">
                          <span>It's like a dream come true</span>
                        </div>
                        <div class="pr-4">
                          <small class=" -500">15 April</small>
                        </div>
                      </div>
                    </div>
                    <div class="message me mb-4 flex text-right">
                      <div class="flex-1 px-2">
                        <div class="inline-block bg-blue-600 rounded-full p-2 px-6 text-white">
                          <span>I accept. Thank you very much.</span>
                        </div>
                        <div class="pr-4">
                          <small class=" -500">15 April</small>
                        </div>
                      </div>
                    </div>
                    <div class="message mb-4 flex">
                      <div class="flex-2">
                        <div class="w-12 h-12 relative">
                          <img
                            class="w-12 h-12 rounded-full mx-auto"
                            src="https://imgs.search.brave.com/_J8N2UDJaL5yqzSP7yAjwI_ndgX4FGOZW3aCDME6dd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ib3ktd2l0aC1z/aGlydC10aGF0LXNh/eXMtaGUtaXMtd2Vh/cmluZy1zaGlydC10/aGF0LXNheXMtaGUt/aXMtd2VhcmluZy1z/aGlydF8xMTQ2Nzkx/LTQ5Mi5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
                            alt="chat-user"
                          />
                          <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                        </div>
                      </div>
                      <div class="flex-1 px-2">
                        <div class="inline-block bg-gray-300 rounded-full p-2 px-6  -700">
                          <span>You are welome. We will stay in touch.</span>
                        </div>
                        <div class="pl-4">
                          <small class=" -500">15 April</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-2 pt-4 pb-10">
                    <div class="write bg-white shadow flex rounded-lg">
                      <div class="flex-1">
                        <textarea
                          name="message"
                          class="w-full block outline-none py-4 px-4 bg-transparent"
                          rows="1"
                          placeholder="Type a message..."
                          autofocus
                        ></textarea>
                      </div>
                      <div class="flex-2 w-32 p-2 flex content-center items-center">
                        <div class="flex-1">
                          <button class="bg-purple-400 w-10 h-10 rounded-full inline-block">
                            <span class="inline-block align-text-bottom">
                              <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                class="w-4 h-4 text-white"
                              >
                                <path d="M5 13l4 4L19 7"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
