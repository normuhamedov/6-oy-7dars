import { useState } from "react"
import { FaRegComment, FaRetweet, FaHeart, FaShareAlt, FaEdit, FaTrash , FaAlignLeft } from "react-icons/fa"
import HomeImg from "../../assets/images/homeImg.png"
import HomeUser2 from "../../assets/images/homeUser2.png"
import User from "../../assets/images/user.png"

export default function Home() {
  const [tweets, setTweets] = useState([
    {
      id: 1,
      name: "Designsta",
      username: "@inner",
      time: "25m",
      text: "Twitterdagi ayol-erkak qarama-qarshiliglardan o'zinglar zerikmadinglarmi?",
      image: null,
      comments: 1,
      retweets: 10,
      likes: 8,
    },
    {
      id: 2,
      name: "cloutexhibition",
      username: "@RajaLahoti",
      time: "22m",
      text: "YPIP dasturining bu yilgi sezoni ham o‘z nihoyasiga yetmoqda. Mentorlilik davomida talaba va yangi bitiruvchilarni o‘sayotganini ko‘rib hursand bo‘ladi odam.",
      image: null,
      comments: 0,
      retweets: 5,
      likes: 9,
    },
    {
      id: 3,
      name: "CreativePhoto",
      username: "@cloutexhibition",
      time: "1h",
      text: "Обедая....\nКечиринглар",
      image: HomeImg,
      comments: 1,
      retweets: 1,
      likes: 8,
    }
  ])

  const [newTweet, setNewTweet] = useState({ text: "", image: "" })
  const [editId, setEditId] = useState(null)

  const handleAddTweet = () => {
    if (!newTweet.text.trim()) return
    if (editId) {
      setTweets(tweets.map(t => t.id === editId ? { ...t, text: newTweet.text, image: newTweet.image } : t))
      setEditId(null)
    } else {
      const newItem = {
        id: Date.now(),
        name: "You",
        username: "@you",
        time: "now",
        text: newTweet.text,
        image: newTweet.image || null,
        comments: 0,
        retweets: 0,
        likes: 0,
      }
      setTweets([newItem, ...tweets])
    }
    setNewTweet({ text: "", image: "" })
  }

  const handleDelete = (id) => {
    setTweets(tweets.filter(t => t.id !== id))
  }

  const handleEdit = (tweet) => {
    setNewTweet({ text: tweet.text, image: tweet.image || "" })
    setEditId(tweet.id)
  }

  const handleCount = (id, type) => {
    setTweets(tweets.map(t => t.id === id ? { ...t, [type]: t[type] + 1 } : t))
  }

  return (
    <div className="max-w-2xl mx-auto bg-white border-x border-gray-200 min-h-screen">
      <div className="p-4 border-b border-gray-200 flex gap-2">
        <img src={User} alt="user" className="rounded-full w-[40px] h-[40px]" width={40} height={40}/>
        <div className="flex-1">
          <textarea
            value={newTweet.text}
            onChange={e => setNewTweet({ ...newTweet, text: e.target.value })}
            placeholder="What's happening?"
            className="w-full border-none outline-none resize-none text-lg"
          />
          <input
            type="text"
            value={newTweet.image}
            onChange={e => setNewTweet({ ...newTweet, image: e.target.value })}
            placeholder="Image URL (optional)"
            className="w-full border rounded p-1 text-sm mt-2"
          />
          <div className="flex justify-between items-center mt-2">
            <button
              onClick={handleAddTweet}
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-1 rounded-full"
            >
              {editId ? "Update" : "Tweet"}
            </button>
          </div>
        </div>
      </div>

      {tweets.map(tweet => (
        <div key={tweet.id} className="p-4 border-b border-gray-200">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <img src={HomeUser2} alt="user" className="rounded-full w-[40px] h-[40px]" width={40} height={40}/>
              <div>
                <span className="font-bold">{tweet.name}</span>{" "}
                <span className="text-gray-500">{tweet.username} · {tweet.time}</span>
                <p className="whitespace-pre-line">{tweet.text}</p>
                {tweet.image && (
                  <img src={tweet.image} alt="tweet" className="rounded-xl mt-2 border" />
                )}
                <div className="flex justify-between mt-2 text-gray-500 text-sm max-w-md">
                  <button onClick={() => handleCount(tweet.id, "comments")} className="flex items-center gap-1 hover:text-sky-500">
                    <FaRegComment /> {tweet.comments}
                  </button>
                  <button onClick={() => handleCount(tweet.id, "retweets")} className="flex items-center gap-1 hover:text-green-500">
                    <FaRetweet /> {tweet.retweets}
                  </button>
                  <button onClick={() => handleCount(tweet.id, "likes")} className="flex items-center gap-1 hover:text-pink-500">
                    <FaHeart /> {tweet.likes}
                  </button>
                  <button className="flex items-center gap-1 hover:text-sky-500">
                    <FaShareAlt />
                  </button>
                  <button className="flex items-center gap-1 hover:text-sky-500 -rotate-90  ">
                    <FaAlignLeft />
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="flex gap-2">
              <button onClick={() => handleEdit(tweet)} className="text-blue-500 hover:text-blue-700"><FaEdit /></button>
              <button onClick={() => handleDelete(tweet.id)} className="text-red-500 hover:text-red-700"><FaTrash /></button>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  )
}
