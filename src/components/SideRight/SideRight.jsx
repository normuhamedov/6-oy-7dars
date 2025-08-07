import MUser from "../../assets/images/mUser.png"
import SUser from "../../assets/images/sUser.png"
export default function SideRight() {
  return (
    <div className="w-[350px] px-4 py-2 hidden lg:block">
      <div className="sticky top-0 bg-white py-2 z-10">
        <input
          type="text"
          placeholder="Search Twitter"
          className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>
      <div className="bg-gray-100 rounded-xl mt-4">
        <div className="px-4 py-3 font-bold text-lg">Trends for you</div>
        {[1, 2, 3].map((item, i) => (
          <div key={i} className="hover:bg-gray-200 cursor-pointer px-4 py-2">
            <div className="text-xs text-gray-500 flex justify-between">
              <span>Trending in Germany</span>
              <span>•••</span>
            </div>
            <div className="font-bold text-sm">Revolution</div>
            <div className="text-xs text-gray-500">50.4K Tweets</div>
          </div>
        ))}
        <div className="text-sky-500 text-sm px-4 py-2 hover:underline cursor-pointer">Show more</div>
      </div>

      <div className="bg-gray-100 rounded-xl mt-4">
        <div className="px-4 py-3 font-bold text-lg">You might like</div>

        <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-200 cursor-pointer">
          <div className="flex items-center gap-3">
            <img
              src={MUser}
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="font-bold text-sm">Mushtariy</div>
              <div className="text-xs text-gray-500">@Mushtar565266</div>
            </div>
          </div>
          <button className="bg-black text-white px-4 py-1 rounded-full text-sm">Follow</button>
        </div>

        <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-200 cursor-pointer">
          <div className="flex items-center gap-3">
            <img
              src={SUser}
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="font-bold text-sm">Shuhratbek</div>
              <div className="text-xs text-gray-500">@mrshukhrat</div>
            </div>
          </div>
          <button className="bg-black text-white px-4 py-1 rounded-full text-sm">Follow</button>
        </div>

        <div className="text-sky-500 text-sm px-4 py-2 hover:underline cursor-pointer">Show more</div>
      </div>
      <div className="text-xs text-gray-500 mt-4 px-4 space-y-1">
        <div className="flex flex-wrap gap-x-2">
          <span className="hover:underline cursor-pointer">Terms of Service</span>
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Cookie Policy</span>
        </div>
        <div className="flex flex-wrap gap-x-2">
          <span className="hover:underline cursor-pointer">Imprint</span>
          <span className="hover:underline cursor-pointer">Ads Info</span>
          <span className="hover:underline cursor-pointer">More …</span>
        </div>
        <div>© 2021 Twitter, Inc.</div>
      </div>
    </div>
  )
}
